import React from "react";
import Navbar from "./navbar";

const cardStyle = {
    border: "1px solid #e0e0e0",
    borderRadius: "16px",
    background: "#fff",
    padding: "24px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
};

const sectionTitle = {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#333",
};

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div style={{ padding: "32px", backgroundColor: "#f9fafb", fontFamily: "sans-serif" }}>
                {/* Hero Section */}
                <div
                    style={{
                        ...cardStyle,
                        background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
                        color: "white",
                        textAlign: "center",
                    }}
                >
                    <h1 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "12px" }}>About Zeepo</h1>
                    <p style={{ fontSize: "16px", maxWidth: "700px", margin: "0 auto" }}>
                        Zeepo is a platform crafted to connect passionate learners, creative minds, and professionals. Our aim is to foster skill-building through real opportunities and empower individuals to thrive in their journey.
                    </p>
                </div>

                {/* Mission / Vision / Who We Are */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "24px",
                        marginTop: "32px",
                    }}
                >
                    <div style={cardStyle}>
                        <h3 style={sectionTitle}>Who We Are</h3>
                        <p style={{ fontSize: "15px", color: "#444" }}>
                            We are a group of developers, educators, and creators committed to simplifying access to education and opportunities. Zeepo bridges the gap between learning and earning through meaningful gigs and community support.
                        </p>
                    </div>

                    <div style={cardStyle}>
                        <h3 style={sectionTitle}>Our Mission</h3>
                        <p style={{ fontSize: "15px", color: "#444" }}>
                            To empower individuals by providing them the tools, skills, and platforms to grow professionally and personally, while enabling real-world applications of their learning.
                        </p>
                    </div>

                    <div style={cardStyle}>
                        <h3 style={sectionTitle}>Our Vision</h3>
                        <p style={{ fontSize: "15px", color: "#444" }}>
                            A world where every learner gets the opportunity to apply their knowledge, showcase their talent, and grow without barriers—making learning more relevant, inclusive, and powerful.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div style={{ marginTop: "48px" }}>
                    <h2 style={sectionTitle}>Meet the Team</h2>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "24px",
                            marginTop: "20px",
                        }}
                    >
                        {[
                            { name: "Sai Sanguta Adhek", role: "Frontend Developer" },
                            { name: "Alok Raj Mahto", role: "UI/UX Designer" },
                            { name: "Khusi Murarka", role: "Backend Developer" },
                            { name: "Kuldeep Naik", role: "Team Lead / Full Stack Dev" },
                            { name: "Priyanshu Ranjan", role: "Team Lead / Full Stack Dev" },
                        ].map((member, index) => (
                            <div
                                key={index}
                                style={{
                                    ...cardStyle,
                                    textAlign: "center",
                                    padding: "20px",
                                    borderRadius: "16px",
                                }}
                            >
                                <div
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        backgroundColor: "#c7d2fe",
                                        borderRadius: "50%",
                                        margin: "0 auto 12px auto",
                                    }}
                                />
                                <h4 style={{ fontSize: "16px", fontWeight: "600" }}>{member.name}</h4>
                                <p style={{ fontSize: "14px", color: "#666" }}>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
