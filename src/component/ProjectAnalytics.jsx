import React from 'react';
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// Sample data
const pieData = [
  { name: 'Approved', value: 10 },
  { name: 'Pending', value: 4 },
  { name: 'Rework Requested', value: 3 },
  { name: 'Rejected', value: 1 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const barData = [
  { month: 'Jan', projects: 2 },
  { month: 'Feb', projects: 3 },
  { month: 'Mar', projects: 4 },
  { month: 'Apr', projects: 5 },
  { month: 'May', projects: 3 },
];

const ProjectAnalytics = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>📊 Project Analytics</h2>

      <div style={styles.analyticsSection}>
        {/* Pie Chart */}
        <div style={styles.chartBox}>
          <h3>Status Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div style={styles.chartBox}>
          <h3>Monthly Projects</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="projects" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={styles.quickStats}>
        <div style={{ ...styles.statCard, borderLeftColor: '#007BFF' }}>
          <h4>Total Projects</h4>
          <p>25</p>
        </div>
        <div style={{ ...styles.statCard, borderLeftColor: '#28a745' }}>
          <h4>Freelancer Responses</h4>
          <p>50</p>
        </div>
        <div style={{ ...styles.statCard, borderLeftColor: '#ffc107' }}>
          <h4>Approved Projects</h4>
          <p>18</p>
        </div>
        <div style={{ ...styles.statCard, borderLeftColor: '#dc3545' }}>
          <h4>Reworks</h4>
          <p>5</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Segoe UI, sans-serif'
  },
  header: {
    fontSize: '28px',
    marginBottom: '20px'
  },
  analyticsSection: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    marginBottom: '30px'
  },
  chartBox: {
    flex: 1,
    minWidth: '350px',
    background: '#f9f9f9',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
  quickStats: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px'
  },
  statCard: {
    flex: 1,
    minWidth: '200px',
    background: '#ffffff',
    padding: '20px',
    borderLeft: '6px solid',
    borderRadius: '10px',
    boxShadow: '0 1px 5px rgba(0,0,0,0.1)',
    textAlign: 'center'
  }
};

export default ProjectAnalytics;
