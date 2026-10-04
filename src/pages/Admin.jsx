import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function AdminPanel() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Agarbatti'); // Default कॅटेगरी
  const [products, setProducts] = useState([]);
  
  const [isEditing, setIsEditing] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  // कॅटेगरीची लिस्ट (जी तुमच्या होम पेज मॅच करेल)
  const categoryList = [
    { value: 'Udbatti', label: 'उदबत्ती (Udbatti)' },
    { value: 'Agarbatti', label: 'अगरबत्ती (Agarbatti)' },
    { value: 'Dhup', label: 'धूप (Dhup)' },
    { value: 'Attar', label: 'अत्तर (Attar)' }
  ];

  // १. डेटाबेस मधून प्रॉडक्ट्स आणणे
  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('id', { ascending: false });

    if (!error && data) {
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // २. प्रॉडक्ट ॲड किंवा अपडेट करणे
  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = { 
      name: name, 
      price: parseFloat(price), 
      category: category // कॅटेगरी डेटा इथे पाठवला
    };

    if (isEditing) {
      const { error } = await supabase
        .from('products')
        .update(productData)
        .eq('id', currentProductId);

      if (error) {
        alert("Error: " + error.message);
      } else {
        alert("Product यशस्वीरित्या अपडेट झाला!");
        resetForm();
        fetchProducts();
      }
    } else {
      const { error } = await supabase
        .from('products')
        .insert([productData]);

      if (error) {
        alert("Error: " + error.message);
      } else {
        alert("Product यशस्वीरित्या ॲड झाला!");
        resetForm();
        fetchProducts();
      }
    }
  };

  // ३. एडिट मोड चालू करणे
  const startEdit = (product) => {
    setIsEditing(true);
    setCurrentProductId(product.id);
    setName(product.name);
    setPrice(product.price);
    setCategory(product.category || 'Agarbatti'); // जुनी कॅटेगरी सेट करा
  };

  // ४. फॉर्म रिसेट करणे
  const resetForm = () => {
    setIsEditing(false);
    setCurrentProductId(null);
    setName('');
    setPrice('');
    setCategory('Agarbatti');
  };

  // ५. प्रॉडक्ट डिलीट करणे
  const deleteProduct = async (id) => {
    if (window.confirm("तुम्हाला खात्री आहे का की हा प्रॉडक्ट डिलीट करायचा आहे?")) {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) {
        alert("Error: " + error.message);
      } else {
        alert("Product डिलीट झाला!");
        fetchProducts();
        if(currentProductId === id) resetForm();
      }
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#800020' }}>Admin Dashboard</h2>
      
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
        <h3>{isEditing ? "Edit Product" : "Add New Product"}</h3>
        
        <div style={{ marginBottom: '15px' }}>
          <input 
            type="text" 
            placeholder="Product Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <input 
            type="number" 
            placeholder="Price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required 
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
        </div>

        {/* 🎯 नवीन कॅटेगरी Dropdown (Select Box) */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#666' }}>Select Category:</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', background: '#fff' }}
          >
            {categoryList.map((cat) => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" style={{ flex: 1, background: isEditing ? '#ffc107' : '#800020', color: isEditing ? '#000' : 'white', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            {isEditing ? "Update Product" : "Add Product"}
          </button>
          {isEditing && (
            <button type="button" onClick={resetForm} style={{ background: '#6c757d', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer' }}>
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* प्रॉडक्ट्स लिस्ट */}
      <h3>Current Products ({products.length})</h3>
      <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '10px' }}>
        {products.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666' }}>कोणतेही प्रॉडक्ट्स उपलब्ध नाहीत.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {products.map((product) => (
              <li key={product.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 10px', borderBottom: '1px solid #eee' }}>
                <div>
                  <strong style={{ color: '#333' }}>{product.name}</strong>
                  <span style={{ marginLeft: '10px', color: '#666' }}>₹{product.price}</span>
                  {/* कॅटेगरी टॅग दाखवण्यासाठी */}
                  <span style={{ marginLeft: '10px', padding: '2px 8px', background: '#eee', borderRadius: '12px', fontSize: '11px', color: '#800020', fontWeight: 'bold' }}>
                    {product.category || 'N/A'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <button onClick={() => startEdit(product)} style={{ background: '#007bff', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Edit</button>
                  <button onClick={() => deleteProduct(product.id)} style={{ background: '#dc3545', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
