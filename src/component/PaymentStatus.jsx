import React, { useState, useEffect } from 'react';

const initialPayments = [
  { id: 1, freelancer: 'Alice Johnson', project: 'Website Redesign', amount: 500, status: 'Pending', date: '2025-04-10' },
  { id: 2, freelancer: 'David Lee',     project: 'Mobile App UI',     amount: 300, status: 'Pending', date: '2025-04-15' },
  { id: 3, freelancer: 'Sophie Carter', project: 'API Integration',    amount: 200, status: 'Completed', date: '2025-04-17' },
  { id: 4, freelancer: 'Mark Spencer',  project: 'Logo Design',        amount: 450, status: 'Pending', date: '2025-04-20' },
  { id: 5, freelancer: 'Jane Doe',      project: 'E‑comm Platform',     amount: 800, status: 'Failed',    date: '2025-04-22' },
];

const PaymentStatus = () => {
  const [payments, setPayments]         = useState([]);
  const [search, setSearch]             = useState('');
  const [sortKey, setSortKey]           = useState('date');
  const [page, setPage]                 = useState(1);
  const perPage                         = 5;
  const [selectedIds, setSelectedIds]   = useState([]);

  // Load initial data (replace with real API)
  useEffect(() => { setPayments(initialPayments); }, []);

  // Filter + Sort
  const visible = payments
    .filter(p =>
      p.freelancer.toLowerCase().includes(search.toLowerCase()) ||
      p.project.toLowerCase().includes(search.toLowerCase()) ||
      p.status.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortKey === 'amount') return a.amount - b.amount;
      if (sortKey === 'freelancer') return a.freelancer.localeCompare(b.freelancer);
      return new Date(b.date) - new Date(a.date);
    });

  // Pagination
  const totalPages = Math.ceil(visible.length / perPage);
  const paged      = visible.slice((page - 1) * perPage, page * perPage);

  // Row actions
  const updateStatus = (id, status) =>
    setPayments(ps => ps.map(p => p.id===id ? { ...p, status } : p));

  const deletePayment = id =>
    setPayments(ps => ps.filter(p => p.id !== id));

  // Bulk actions
  const toggleSelect = id =>
    setSelectedIds(ids =>
      ids.includes(id) ? ids.filter(x=>x!==id) : [...ids, id]
    );

  const bulkAction = status => {
    setPayments(ps => ps.map(p =>
      selectedIds.includes(p.id) ? { ...p, status } : p
    ));
    setSelectedIds([]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Payment Status</h2>

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
          <button onClick={() => bulkAction('Completed')} style={bulkBtn}>Mark Completed</button>
          <button onClick={() => bulkAction('Failed')}    style={{ ...bulkBtn, marginLeft: 8, background: '#e74c3c' }}>Mark Failed</button>
        </div>
      )}

      {/* Payments Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th/><th>Freelancer</th><th>Project</th><th>Amount</th><th>Status</th><th>Date</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paged.map(p => (
            <tr key={p.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ textAlign: 'center' }}>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(p.id)}
                  onChange={() => toggleSelect(p.id)}
                />
              </td>
              <td>{p.freelancer}</td>
              <td>{p.project}</td>
              <td>${p.amount}</td>
              <td>{p.status}</td>
              <td>{p.date}</td>
              <td>
                {p.status==='Pending' && (
                  <>
                    <button onClick={() => updateStatus(p.id,'Completed')} style={actionBtn}>Complete</button>
                    <button onClick={() => updateStatus(p.id,'Failed')}    style={{ ...actionBtn, marginLeft:4 }}>Fail</button>
                  </>
                )}
                <button onClick={() => deletePayment(p.id)} style={{ ...actionBtn, marginLeft:4, background:'#e74c3c' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ marginTop:12, textAlign:'center' }}>
        <button onClick={()=>setPage(p=>p-1)} disabled={page===1} style={paginateBtn}>Prev</button>
        <span style={{ margin:'0 12px' }}>{page} / {totalPages}</span>
        <button onClick={()=>setPage(p=>p+1)} disabled={page===totalPages} style={paginateBtn}>Next</button>
      </div>
    </div>
  );
};

// Styles
const actionBtn = {
  padding:'4px 8px', border:'none', borderRadius:4,
  background:'#3498db', color:'#fff', cursor:'pointer', fontSize:12
};
const bulkBtn = {
  padding:'6px 12px', border:'none', borderRadius:4,
  background:'#2ecc71', color:'#fff', cursor:'pointer'
};
const paginateBtn = {
  padding:'6px 12px', border:'1px solid #ccc', borderRadius:4,
  background:'#fff', cursor:'pointer'
};

export default PaymentStatus;
