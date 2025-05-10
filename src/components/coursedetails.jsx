// src/components/CourseDetails.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BadgeCheck, Clock, Layers } from 'lucide-react';
import PaymentPage from './Paymentpage';

export default function CourseDetails() {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        title,
        description,
        level,
        duration,
        price = '₹999',
        benefits = [
            'Certificate of Completion',
            'Access to all materials',
            'Real-world projects',
        ],
    } = location.state || {};

    const handleEnroll = () => {
        navigate('/payment', {
          state: {
            title,
            description,
            level,
            duration,
            price,
            benefits,
          },
        });
      };
      

    return (
        <div style={{
            backgroundColor: 'rgba(249, 250, 251, 0)',
            minHeight: '100vh',
            padding: '40px 20px',
            fontFamily: 'Arial, sans-serif',
        }}>
            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                backgroundColor: '#fff',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
            }}>
                <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '10px', color: '#1D4ED8' }}>
                    {title}
                </h2>

                <p style={{ fontSize: '16px', color: '#374151', marginBottom: '20px' }}>
                    {description}
                </p>

                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6B7280' }}>
                        <Layers size={20} /> <strong>Level:</strong> {level}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6B7280' }}>
                        <Clock size={20} /> <strong>Duration:</strong> {duration}
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#fef3c7',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    color: '#92400e',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    display: 'inline-block',
                    marginBottom: '30px',
                }}>
                    Special Offer Price: {price}
                </div>

                <h4 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
                    What you’ll get:
                </h4>
                <ul style={{ paddingLeft: '20px', marginBottom: '30px' }}>
                    {benefits.map((b, i) => (
                        <li key={i} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <BadgeCheck color="#10b981" size={18} /> {b}
                        </li>
                    ))}
                </ul>

                <button
                    onClick={handleEnroll}
                    style={{
                        backgroundColor: '#1D4ED8',
                        color: '#fff',
                        padding: '12px 24px',
                        fontSize: '16px',
                        fontWeight: '500',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                    }}
                >
                    Enroll Now
                </button>
            </div>
        </div>
    );
}
