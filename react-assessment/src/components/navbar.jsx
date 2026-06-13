import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: '15px', background: '#112240', display: 'flex', gap: '20px' }}>
      <Link to="/" style={{ color: 'white' }}>Home</Link>
      <Link to="/about" style={{ color: 'white' }}>About</Link>
      <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
    </nav>
  )
}

export default Navbar