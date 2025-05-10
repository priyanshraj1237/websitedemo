import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function InstructorForm() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [level, setLevel] = useState('');
    const [duration, setDuration] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            title,
            description,
            level,
            duration,
            category,
            price,
        };

        setIsLoading(true);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/upload-instructor/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                alert('Instructor form submitted successfully!');
                navigate('/');
            } else {
                const errorData = await response.json();
                console.error('Error response:', errorData);
                alert('Failed to submit instructor form.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            alert('Failed to submit instructor form.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{
            padding: '40px',
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#f8fafc',
            borderRadius: '12px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}>
            <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#1d4ed8' }}>
                Instructor Registration
            </h2>

            <form onSubmit={handleSubmit}>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '6px',
                            marginTop: '4px',
                        }}
                    />
                </label>

                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        rows={4}
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '6px',
                            marginTop: '4px',
                        }}
                    />
                </label>

                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Level:
                    <input
                        type="text"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        required
                        placeholder="Beginner / Intermediate / Advanced"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '6px',
                            marginTop: '4px',
                        }}
                    />
                </label>

                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Duration (in minutes):
                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '6px',
                            marginTop: '4px',
                        }}
                    />
                </label>

                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Category:
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        placeholder="e.g., Programming, Design"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '6px',
                            marginTop: '4px',
                        }}
                    />
                </label>

                {/* ✅ Price Field */}
                <label style={{ display: 'block', marginBottom: '20px' }}>
                    Price (₹):
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        placeholder="e.g., 499"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '6px',
                            marginTop: '4px',
                        }}
                    />
                </label>

                <button
                    type="submit"
                    disabled={isLoading}
                    style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: isLoading ? '#60a5fa' : '#1d4ed8',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        cursor: 'pointer',
                    }}
                >
                    {isLoading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}
