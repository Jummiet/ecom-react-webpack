
import { useState } from 'react';

export default function SearchBar(){
  const [q, setQ] = useState('');
  
  const formStyle = {
    display: 'flex',
    gap: '0.5rem',
    width: '100%',
    position: 'relative',
    zIndex: 1,
  };

  const inputStyle = {
    flex: '1',
    padding: '0.6rem 1rem',
    borderRadius: '0.5rem',
    border: '1px solid var(--border)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.2s ease',
    minWidth: 0,
  };

  const buttonStyle = {
    padding: '0.6rem 1rem',
    borderRadius: '0.5rem',
    border: 'none',
    background: 'var(--brand)',
    color: '#fff',
    fontWeight: '600',
    fontSize: '0.95rem',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease',
    flexShrink: 0,
  };

  return (
    <form 
      role="search" 
      aria-label="Site" 
      onSubmit={e=>e.preventDefault()} 
      style={formStyle}
    >
      <label htmlFor="site-search" className="sr-only">Search products</label>
      <input 
        id="site-search" 
        value={q} 
        placeholder="Search products" 
        onChange={e=>setQ(e.target.value)}
        style={inputStyle}
        onFocus={(e) => e.target.style.borderColor = 'var(--brand)'}
        onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
      />
      <button 
        type="submit"
        style={buttonStyle}
        onMouseEnter={(e) => e.target.style.background = 'var(--brand-dark)'}
        onMouseLeave={(e) => e.target.style.background = 'var(--brand)'}
      >
        Search
      </button>
    </form>
  );
}
