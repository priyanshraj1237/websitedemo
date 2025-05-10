import React, { useState, useEffect } from "react";
import {
    Bell,
    MessageCircle,
    User,
    Briefcase,
    BookOpen,
} from "lucide-react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

const cardStyle = {
    border: "1px solid #e0e0e0",
    borderRadius: "16px",
    background: "#fff",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
};

const sectionTitle = {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#333",
};

const listItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
    color: "#333",
    transition: "background 0.3s ease",
};

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState("dashboard");
    const [enrolledCourse, setEnrolledCourse] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const courseData = localStorage.getItem("enrolledCourse");
        if (courseData) {
            setEnrolledCourse(JSON.parse(courseData));
        }
    }, []);

    const notifications = [
        "🎉 Your profile is 90% complete!",
        "✅ Course payment confirmed.",
        "📦 Your certificate is ready to download.",
    ];

    const servicesData = {
        toDo: ["Submit your ID Proof", "Fill up course preference form", "Upload project proposal"],
        completed: ["Payment verified", "Profile setup completed"],
    };

    const messagesData = [
        { from: "Mentor John", content: "Don't forget the project deadline is next week." },
        { from: "Support", content: "Your course access has been extended." },
        { from: "Admin", content: "Join the orientation meeting at 5 PM today." },
    ];

    return (
        <div>
            <Navbar />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr 1fr", gap: "24px", padding: "24px" }}>
                {/* Sidebar Navigation */}
                <div style={{ ...cardStyle, paddingBottom: "28px" }}>
                    <h2 style={sectionTitle}>Zeepo Dashboard</h2>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li style={listItemStyle} onClick={() => setActiveSection("profile")}>
                            <User size={20} /> Profile
                        </li>
                        <li style={listItemStyle} onClick={() => setActiveSection("services")}>
                            <Briefcase size={20} /> Services
                        </li>
                        <li style={listItemStyle} onClick={() => setActiveSection("learning")}>
                            <BookOpen size={20} /> Learning
                        </li>
                        <li style={listItemStyle} onClick={() => setActiveSection("messages")}>
                            <MessageCircle size={20} /> Messages
                        </li>
                        <li style={listItemStyle} onClick={() => setActiveSection("notifications")}>
                            <Bell size={20} /> Notifications
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
                    {/* Welcome Section */}
                    <div
                        style={{
                            ...cardStyle,
                            gridColumn: "span 2",
                            background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
                            color: "white",
                        }}
                    >
                        <h2 style={{ fontSize: "26px", fontWeight: "700" }}>Welcome to Zeepo!</h2>
                        <p style={{ marginTop: "10px", fontSize: "15px", fontWeight: "400" }}>
                            Connect. Learn. Grow. Empower yourself and others.
                        </p>
                    </div>

                    {/* Conditional Sections */}
                    {activeSection === "profile" ? (
                        <div
                            style={{
                                ...cardStyle,
                                gridColumn: "span 2",
                                display: "flex",
                                alignItems: "center",
                                gap: "24px",
                            }}
                        >
                            <div
                                style={{
                                    width: "120px",
                                    height: "120px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    border: "4px solid #4f46e5",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                    flexShrink: 0,
                                }}
                            >
                                <img
                                    src="https://i.pravatar.cc/150?img=32"
                                    alt="Profile"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "8px", color: "#333" }}>
                                    Sai Sangita Adhek
                                </h3>
                                <p style={{ fontSize: "14px", color: "#555", margin: "4px 0" }}>
                                    <strong>Role:</strong> Student
                                </p>
                                <p style={{ fontSize: "14px", color: "#555", margin: "4px 0" }}>
                                    <strong>Email:</strong> saisangita@example.com
                                </p>
                                <p style={{ fontSize: "14px", color: "#555", margin: "4px 0" }}>
                                    <strong>Skills:</strong> Web Dev, UI/UX, Flutter, GenAI
                                </p>
                            </div>
                        </div>
                    ) : activeSection === "services" ? (
                        <>
                            <div style={cardStyle}>
                                <h3 style={{ fontWeight: "600", fontSize: "16px", marginBottom: "8px" }}>📝 To Do Tasks</h3>
                                <ul style={{ fontSize: "14px", color: "#555", paddingLeft: "18px" }}>
                                    {servicesData.toDo.map((task, i) => (
                                        <li key={i}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                            <div style={cardStyle}>
                                <h3 style={{ fontWeight: "600", fontSize: "16px", marginBottom: "8px" }}>✅ Completed Tasks</h3>
                                <ul style={{ fontSize: "14px", color: "#555", paddingLeft: "18px" }}>
                                    {servicesData.completed.map((task, i) => (
                                        <li key={i}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            {enrolledCourse && (
                                <div
                                    style={{
                                        ...cardStyle,
                                        gridColumn: "span 2",
                                        backgroundColor: "#f0fdf4",
                                        borderLeft: "6px solid #10b981",
                                    }}
                                >
                                    <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#065f46" }}>🎓 My Course</h3>
                                    <p style={{ fontSize: "16px", fontWeight: "500", margin: "8px 0" }}>
                                        {enrolledCourse.title}
                                    </p>
                                    <p style={{ fontSize: "14px", color: "#555" }}>
                                        Price Paid: ₹{enrolledCourse.price}
                                    </p>
                                    <button
                                        style={{
                                            marginTop: "12px",
                                            padding: "10px 20px",
                                            background: "#10b981",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                            fontWeight: "500",
                                        }}
                                    >
                                        🚀 Start Learning
                                    </button>
                                </div>
                            )}
                            <div style={cardStyle}>
                                <h3 style={{ fontWeight: "600", marginBottom: "8px", fontSize: "16px" }}>
                                    Your Active Projects
                                </h3>
                                <p style={{ fontSize: "14px", color: "#555" }}>2 ongoing, 1 completed</p>
                            </div>
                            <div style={cardStyle}>
                                <h3 style={{ fontWeight: "600", marginBottom: "8px", fontSize: "16px" }}>
                                    Earnings Overview
                                </h3>
                                <p style={{ fontSize: "14px", color: "#555" }}>₹5,200 earned this month</p>
                            </div>
                            <div style={cardStyle}>
                                <h3 style={{ fontWeight: "600", marginBottom: "8px", fontSize: "16px" }}>
                                    Learning Progress
                                </h3>
                                <p style={{ fontSize: "14px", color: "#555" }}>3 courses in progress</p>
                            </div>
                            <div style={cardStyle}>
                                <h3 style={{ fontWeight: "600", marginBottom: "8px", fontSize: "16px" }}>
                                    Suggested Gigs
                                </h3>
                                <ul
                                    style={{
                                        fontSize: "14px",
                                        color: "#1d4ed8",
                                        paddingLeft: "18px",
                                        marginTop: "6px",
                                    }}
                                >
                                    <li>Poster Design for Local Café</li>
                                    <li>Social Media Graphics for NGO</li>
                                    <li>Landing Page for a Startup</li>
                                </ul>
                            </div>
                            <div style={{ ...cardStyle, gridColumn: "span 2", textAlign: "center" }}>
                                <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Want to earn more?</h3>
                                <p style={{ fontSize: "14px", color: "#555" }}>
                                    Take a course and apply your skills immediately on real gigs.
                                </p>
                                <button
                                    style={{
                                        marginTop: "18px",
                                        padding: "12px 28px",
                                        background: "#4f46e5",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                    }}
                                    onClick={() => navigate("/learn")}
                                >
                                    Explore Courses
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* Right Panel: Notifications or Messages */}
                <div style={{ ...cardStyle, height: "100%" }}>
                    {activeSection === "notifications" ? (
                        <>
                            <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}>🔔 Notifications</h3>
                            <ul style={{ paddingLeft: "18px", fontSize: "14px", color: "#333" }}>
                                {notifications.map((note, idx) => (
                                    <li key={idx} style={{ marginBottom: "10px", lineHeight: "1.6" }}>
                                        {note}
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : activeSection === "messages" ? (
                        <>
                            <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}>📬 Messages</h3>
                            <ul style={{ paddingLeft: "0", fontSize: "14px", color: "#333", listStyle: "none" }}>
                                {messagesData.map((msg, idx) => (
                                    <li key={idx} style={{ marginBottom: "16px", borderBottom: "1px solid #eee", paddingBottom: "8px" }}>
                                        <strong>{msg.from}</strong>
                                        <p style={{ margin: "4px 0", color: "#555" }}>{msg.content}</p>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
