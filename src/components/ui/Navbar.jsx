import React from 'react';

const Navbar = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: '#333',
        fontWeight: 500,
    };

    const handleMouseOver = (e) => (e.target.style.color = '#3a86ff');
    const handleMouseOut = (e) => (e.target.style.color = '#333');

    return (
        <nav
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.5rem 5%',
                backgroundColor: 'white',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <div
                style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#3a86ff',
                }}
            >
                Zeepo
            </div>

            <ul
                style={{
                    display: 'flex',
                    listStyle: 'none',
                    gap: '2rem',
                    margin: 0,
                    padding: 0,
                }}
            >
                {[
                    { name: 'Home', href: '/' },
                    { name: 'DashBoard', href: '/dashboard' },
                    { name: 'About Us', href: '/about' },
                    { name: 'FAQ', href: '/faq' },
                    { name: 'Login/SignUp', href: '/signup' },
                ].map((link, idx) => (
                    <li key={idx}>
                        <a
                            href={link.href}
                            style={linkStyle}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;