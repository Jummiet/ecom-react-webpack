
export default function Button({children, variant = 'primary', ...props}){
  const baseStyle = {
    border: 'none',
    padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
    borderRadius: '0.75rem',
    fontWeight: '600',
    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: 'var(--shadow)',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
  };

  const variants = {
    primary: {
      ...baseStyle,
      background: 'var(--gradient-brand)',
      color: '#fff',
    },
    accent: {
      ...baseStyle,
      background: 'var(--accent)',
      color: '#fff',
    },
    secondary: {
      ...baseStyle,
      background: '#fff',
      color: 'var(--brand)',
      border: '2px solid var(--brand)',
    }
  };

  return (
    <button 
      style={variants[variant]} 
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow)';
      }}
      {...props}
    >
      {children}
    </button>
  );
}
