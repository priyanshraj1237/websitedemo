import React, { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, Lightbulb } from 'lucide-react';
import Navbar from "../navbar";
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';





export default function LearnSection() {
    const [data, setData] = useState(null);
    const [trendingcoursedata, setTrendingCourseData] = useState([]);
    const [skillsData, setSkillsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [activeTrending, setActiveTrending] = useState('');
    const [activeSkill, setActiveSkill] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res1 = await fetch('http://localhost:8000/api/hello/');
                const helloData = await res1.json();
                setData(helloData);

                const res2 = await fetch('http://localhost:8000/api/trending-courses/');
                const trendingData = await res2.json();
                setTrendingCourseData(trendingData);
                console.log(trendingData);

                const res3 = await fetch('http://localhost:8000/api/skills-courses/');
                const skillsCourseData = await res3.json();
                setSkillsData(skillsCourseData);
                console.log(skillsCourseData);

                if (Object.keys(trendingData).length > 0) {
                    setActiveTrending(Object.keys(trendingData)[0]);
                }

                if (Object.keys(skillsCourseData).length > 0) {
                    setActiveSkill(Object.keys(skillsCourseData)[0]);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    
    if (loading) {
        return (
            <div style={{
              height: '100vh',
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              background: 'linear-gradient(to right, #fdfbfb, #ebedee)',
            }}>
              <DotLottieReact
                src="/loading.lottie"
                loop
                autoplay
                style={{ width: 200, height: 200 }}
              />
              <p style={{
                marginTop: 20,
                fontSize: 18,
                color: '#333',
                fontWeight: 600,
                fontFamily: 'sans-serif',
              }}>
                Loading Best Courses For you...
              </p>
            </div>
          );
      }
    
    if (error) return <div>Error: {error}</div>;

    const trendingTabs = trendingcoursedata ? Object.keys(trendingcoursedata) : [];
    const skillsTabs = skillsData ? Object.keys(skillsData) : [];

    return (
        <div>
            <div className='learn-container'><Navbar /></div>
            <div style={{ padding: '40px', backgroundColor: 'white', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                
                <div>
                    {/* Learn & Grow Header */}
                    <div className="header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: 'blue' }}>
                            <GraduationCap size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                            Learn & Grow
                        </h2>
                        <p style={{ color: 'black', maxWidth: '600px', margin: '10px auto' }}>
                            Build your skills with real-world courses, taught by experts. Gain confidence and start working on live projects.
                        </p>
                    </div>

                    {/* Trending Courses Section */}
                    <div className="trending" style={{ marginBottom: '30px' }}>
                        <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '10px', color: 'black' }}>Trending</h3>
                        <div style={{ display: 'flex', overflowX: 'auto', gap: '12px', marginBottom: '16px' }}>
                            {trendingTabs.map((topic) => (
                                <div
                                    key={topic}
                                    onClick={() => setActiveTrending(topic)}
                                    style={{
                                        minWidth: '200px',
                                        backgroundColor: activeTrending === topic ? '#2563eb' : '#f0f9ff',
                                        color: activeTrending === topic ? '#fff' : '#1D4ED8',
                                        padding: '10px 16px',
                                        borderRadius: '6px',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        whiteSpace: 'nowrap',
                                    }}>
                                    {topic}
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
                            {trendingcoursedata[activeTrending]?.map((course, index) => (
                                <div key={index} style={{
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    padding: '20px',
                                    width: '300px',
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)'
                                }}>
                                    <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                        <BookOpen style={{ verticalAlign: 'middle', marginRight: '6px', color: '#1D4ED8' }} />
                                        {course.title}
                                    </h3>
                                    <p style={{ color: '#444', marginBottom: '10px' }}>{course.description}</p>
                                    <p style={{ fontSize: '14px', marginBottom: '5px' }}>Level: {course.level}</p>
                                    <p style={{ fontSize: '14px', marginBottom: '15px' }}>Duration: {course.duration}</p>
                                    <button
                                        onClick={() => navigate('/course-details', { state: course })}
                                        style={{
                                            width: '100%',
                                            backgroundColor: '#1D4ED8',
                                            color: '#fff',
                                            padding: '10px',
                                            border: 'none',
                                            borderRadius: '4px'
                                        }}>
                                        Enroll Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="skills" style={{ marginBottom: '40px' }}>
                        <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '10px', color: 'black' }}>Skills</h3>
                        <div style={{ display: 'flex', overflowX: 'auto', gap: '12px', marginBottom: '16px' }}>
                            {skillsTabs.map((skill) => (
                                <div
                                    key={skill}
                                    onClick={() => setActiveSkill(skill)}
                                    style={{
                                        minWidth: '180px',
                                        backgroundColor: activeSkill === skill ? '#2563eb' : '#f0f9ff',
                                        color: activeSkill === skill ? '#fff' : '#1D4ED8',
                                        padding: '10px 16px',
                                        borderRadius: '6px',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        whiteSpace: 'nowrap',
                                    }}>
                                    {skill}
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
                            {skillsData[activeSkill]?.map((course, index) => (
                                <div key={index} style={{
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    padding: '20px',
                                    width: '300px',
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)'
                                }}>
                                    <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                        <BookOpen style={{ verticalAlign: 'middle', marginRight: '6px', color: 'blue' }} />
                                        {course.title}
                                    </h3>
                                    <p style={{ color: '#444', marginBottom: '10px' }}>{course.description}</p>
                                    <p style={{ fontSize: '14px', marginBottom: '5px' }}>Level: {course.level}</p>
                                    <p style={{ fontSize: '14px', marginBottom: '15px' }}>Duration: {course.duration}</p>
                                    <button
                                        onClick={() => navigate('/course-details', { state: course })}
                                        style={{
                                            width: '100%',
                                            backgroundColor: '#1D4ED8',
                                            color: '#fff',
                                            padding: '10px',
                                            border: 'none',
                                            borderRadius: '4px'
                                        }}>
                                        Enroll Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Project Completion Section */}
                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'black' }}>Project Completion</h3>
                        <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                            {['Complete Now', 'In Review', 'Completed'].map((status, i) => (
                                <button key={i} style={{
                                    backgroundColor: '#d1d5db',
                                    color: 'black',
                                    padding: '10px 16px',
                                    borderRadius: '10px',
                                    border: 'none',
                                    fontWeight: '500',
                                    cursor: 'pointer'
                                }}>
                                    {status}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Earnings Section */}
                    <div style={{
                        backgroundColor: '#a3a3a3',
                        borderRadius: '20px',
                        padding: '20px',
                        marginBottom: '40px'
                    }}>
                        <h3 style={{ fontSize: '18px', marginBottom: '10px', color: 'black' }}>Your Earnings</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '16px', color: 'black' }}>Rs...</span>
                        </div>
                    </div>
                </div>

                {/* Instructor CTA */}
                <div style={{ marginTop: '60px', textAlign: 'center' }}>
                    <p style={{ fontSize: '16px', marginBottom: '10px', color: '#facc15' }}>
                        <Lightbulb style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                        Want to share your knowledge? Become an instructor and earn.
                    </p>
                    <button onClick={() => navigate('/become-instructor')} style={{
                        backgroundColor: 'blue',
                        color: '#fff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '20px',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}>
                        Become an Instructor
                    </button>
                </div>

            </div>
        </div>
    );
}
