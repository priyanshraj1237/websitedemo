import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';


const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const linkStyle = {
        textDecoration: 'none',
        color: '#333',
        fontWeight: 500,
        position: 'relative',
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
                position: 'relative',
                zIndex: 100,
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
                    alignItems: 'center',
                }}
            >
                {[
                    { name: 'Home', href: '/' },
                    { name: 'DashBoard', href: '/dashboard' },
                    { name: 'About Us', href: '/about' },
                    { name: 'FAQ', href: '/faq' },
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

                {/* Avatar Dropdown */}
                <li
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                    style={{ position: 'relative', cursor: 'pointer' }}
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1154/1154448.png" // Replace with your avatar URL or icon
                        alt="User Avatar"
                        style={{
                            borderRadius: '50%',
                            width: '35px',
                            height: '35px',
                            objectFit: 'cover',
                        }}
                    />

                    {showDropdown && (
                        <div
                            style={{
                                position: 'absolute',
                                top: '45px',
                                right: 0,
                                backgroundColor: 'white',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                                borderRadius: '6px',
                                overflow: 'hidden',
                                minWidth: '200px',
                            }}
                        >
                            <a
                                href="/login"
                                style={dropdownLinkStyle}
                            >
                                Login
                            </a>
                            <a
                                href="/register"
                                style={dropdownLinkStyle}
                            >
                                Register
                            </a>
                            <a
                                href="/profile"
                                style={dropdownLinkStyle}
                            >
                                Profile
                            </a>
                            <a
                                href="/become-instructor"
                                style={dropdownLinkStyle}
                            >
                                Upload Courses (if signed up as instructor)
                            </a>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
};

const dropdownLinkStyle = {
    display: 'block',
    padding: '10px 15px',
    textDecoration: 'none',
    color: '#333',
    borderBottom: '1px solid #eee',
    transition: 'background-color 0.2s',
};

export default Navbar;
