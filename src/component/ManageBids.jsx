import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Initial dummy data; replace with API call as needed
const initialBids = [
  { id: 1, freelancer: 'Alice Johnson', project: 'Website Redesign', amount: 500, status: 'Pending', date: '2025-03-15' },
  { id: 2, freelancer: 'David Lee',     project: 'Mobile App UI',     amount: 300, status: 'Pending', date: '2025-03-20' },
  { id: 3, freelancer: 'Sophie Carter', project: 'Logo Design',        amount: 200, status: 'Rejected', date: '2025-01-10' },
  { id: 4, freelancer: 'Mark Spencer',  project: 'API Integration',    amount: 450, status: 'Pending', date: '2025-04-01' },
  { id: 5, freelancer: 'Jane Doe',      project: 'E‑commerce Site',     amount: 800, status: 'Pending', date: '2025-04-05' },
];

const ManageBids = () => {
  const [bids, setBids]               = useState([]);
  const [search, setSearch]           = useState('');
  const [sortKey, setSortKey]         = useState('date');
  const [page, setPage]               = useState(1);
  const perPage                       = 5;
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    // Simulate API call
    setBids(initialBids);
  }, []);

  // Filter and sort logic
  const visible = bids
    .filter(b =>
      b.freelancer.toLowerCase().includes(search.toLowerCase()) ||
      b.project.toLowerCase().includes(search.toLowerCase()) ||
      b.status.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortKey === 'amount') return a.amount - b.amount;
      if (sortKey === 'freelancer') return a.freelancer.localeCompare(b.freelancer);
      return new Date(b.date) - new Date(a.date);
    });

  const totalPages = Math.ceil(visible.length / perPage);
  const paged      = visible.slice((page - 1) * perPage, page * perPage);

  // Row actions
  const updateStatus = (id, status) =>
    setBids(bs => bs.map(b => b.id === id ? { ...b, status } : b));

  const deleteBid = id =>
    setBids(bs => bs.filter(b => b.id !== id));

  // Bulk actions
  const toggleSelect = id =>
    setSelectedIds(ids =>
      ids.includes(id) ? ids.filter(x => x !== id) : [...ids, id]
    );

  const bulkAction = status => {
    setBids(bs => bs.map(b => selectedIds.includes(b.id) ? { ...b, status } : b));
    setSelectedIds([]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Manage Bids</h2>

      {/* Search & Sort */}
      <div style={{ margin: '10px 0' }}>
        <input
          placeholder="Search freelancer/project/status…"
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
          style={{ padding: 8, width: '70%', marginRight: 10 }}
        />
        <select
          value={sortKey}
          onChange={e => setSortKey(e.target.value)}
          style={{ padding: 8 }}
        >
          <option value="date">Newest First</option>
          <option value="amount">Amount ↑</option>
          <option value="freelancer">Freelancer A‑Z</option>
        </select>
      </div>

      {/* Bulk Actions */}
      {selectedIds.length > 0 && (
        <div style={{ margin: '10px 0' }}>
          <button onClick={() => bulkAction('Accepted')} style={bulkBtn}>Accept Selected</button>
          <button onClick={() => bulkAction('Rejected')} style={{ ...bulkBtn, marginLeft: 8, background: '#e74c3c' }}>Reject Selected</button>
        </div>
      )}

      {/* Bid Rows */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th/><th>Freelancer</th><th>Project</th><th>Amount</th><th>Status</th><th>Date</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paged.map(b => (
            <tr key={b.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ textAlign: 'center' }}>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(b.id)}
                  onChange={() => toggleSelect(b.id)}
                />
              </td>
              <td>{b.freelancer}</td>
              <td>{b.project}</td>
              <td>${b.amount}</td>
              <td>{b.status}</td>
              <td>{b.date}</td>
              <td>
                {b.status === 'Pending' && (
                  <>
                    <button onClick={() => updateStatus(b.id, 'Accepted')} style={actionBtn}>Accept</button>
                    <button onClick={() => updateStatus(b.id, 'Rejected')} style={{ ...actionBtn, marginLeft: 4 }}>Reject</button>
                  </>
                )}
                <button onClick={() => deleteBid(b.id)} style={{ ...actionBtn, marginLeft: 4, background: '#e74c3c' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ marginTop: 12, textAlign: 'center' }}>
        <button onClick={() => setPage(p => p-1)} disabled={page===1} style={paginateBtn}>Prev</button>
        <span style={{ margin: '0 12px' }}>{page} / {totalPages}</span>
        <button onClick={() => setPage(p => p+1)} disabled={page===totalPages} style={paginateBtn}>Next</button>
      </div>
    </div>
  );
};

// Button styles
const actionBtn = {
  padding: '4px 8px', border: 'none', borderRadius: 4,
  background: '#3498db', color: '#fff', cursor: 'pointer', fontSize: 12
};
const bulkBtn = {
  padding: '6px 12px', border: 'none', borderRadius: 4,
  background: '#2ecc71', color: '#fff', cursor: 'pointer'
};
const paginateBtn = {
  padding: '6px 12px', border: '1px solid #ccc', borderRadius: 4,
  background: '#fff', cursor: 'pointer'
};

export default ManageBids;
