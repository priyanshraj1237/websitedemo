import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Initial dummy data
const initialProjects = [
  {
    id: 1,
    title: 'Website Redesign',
    status: 'Active',
    deadline: '2025-06-15',
    description: 'Redesign the corporate website for better UX.',
    progress: 45, // percent
  },
  {
    id: 2,
    title: 'Mobile App Development',
    status: 'Applied',
    deadline: '2025-07-01',
    description: 'Build an Android & iOS app.',
    progress: 0,
  },
  {
    id: 3,
    title: 'Database Migration',
    status: 'Expired',
    deadline: '2025-04-01',
    description: 'Migrate data to a new cloud database.',
    progress: 100,
  },
  {
    id: 4,
    title: 'UI/UX Audit',
    status: 'Active',
    deadline: '2025-05-20',
    description: 'Conduct a full audit of existing UI/UX.',
    progress: 20,
  },
];

const JpMyProjects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState('deadline');
  const [page, setPage] = useState(1);
  const perPage = 3;

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '', status: '', deadline: '', description: '', progress: 0
  });

  const [selectedIds, setSelectedIds] = useState([]);

  // Notification for upcoming deadlines
  useEffect(() => {
    const soon = projects.filter(p => {
      const diff = (new Date(p.deadline) - new Date()) / (1000*60*60*24);
      return diff >=0 && diff < 3;
    });
    if (soon.length) {
      alert(`You have ${soon.length} project(s) with deadlines in the next 3 days!`);
    }
  }, [projects]);

  // Search + Sort
  const visible = projects
    .filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.status.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortKey === 'deadline')
        return new Date(a.deadline) - new Date(b.deadline);
      if (sortKey === 'title')
        return a.title.localeCompare(b.title);
      return 0;
    });

  // Pagination slice
  const paged = visible.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(visible.length / perPage);

  // Handlers
  const startEdit = p => {
    setEditingId(p.id);
    setEditForm({
      title: p.title,
      status: p.status,
      deadline: p.deadline,
      description: p.description,
      progress: p.progress
    });
  };
  const saveEdit = id => {
    setProjects(ps =>
      ps.map(p => p.id === id ? { ...p, ...editForm } : p)
    );
    setEditingId(null);
  };
  const deleteProject = id => {
    setProjects(ps => ps.filter(p => p.id !== id));
    setSelectedIds(ids => ids.filter(x => x !== id));
  };
  const bulkDelete = () => selectedIds.forEach(deleteProject);

  const toggleSelect = id => {
    setSelectedIds(ids =>
      ids.includes(id) ? ids.filter(x => x !== id) : [...ids, id]
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>My Projects</h2>

      {/* Search & Sort */}
      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Search by title or status…"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{ padding: 8, marginRight: 10 }}
        />
        <select
          value={sortKey}
          onChange={e => setSortKey(e.target.value)}
          style={{ padding: 8 }}
        >
          <option value="deadline">Sort by Deadline</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      {/* Bulk Actions */}
      {selectedIds.length > 0 && (
        <button onClick={bulkDelete} style={{ marginBottom: 10, background: '#e74c3c', color: '#fff', padding: '8px 12px', border: 'none', borderRadius: 4 }}>
          Delete Selected ({selectedIds.length})
        </button>
      )}

      {/* Project Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 20 }}>
        {paged.map(p => (
          <div key={p.id} style={{ border: '1px solid #ddd', borderRadius: 6, padding: 12, position: 'relative' }}>
            <input
              type="checkbox"
              checked={selectedIds.includes(p.id)}
              onChange={() => toggleSelect(p.id)}
              style={{ position: 'absolute', top: 10, left: 10 }}
            />

            {editingId === p.id ? (
              <>
                <input
                  value={editForm.title}
                  onChange={e => setEditForm({ ...editForm, title: e.target.value })}
                  style={{ width: '100%', marginBottom: 6 }}
                />
                <select
                  value={editForm.status}
                  onChange={e => setEditForm({ ...editForm, status: e.target.value })}
                  style={{ width: '100%', marginBottom: 6 }}
                >
                  <option>Active</option>
                  <option>Applied</option>
                  <option>Expired</option>
                </select>
                <input
                  type="date"
                  value={editForm.deadline}
                  onChange={e => setEditForm({ ...editForm, deadline: e.target.value })}
                  style={{ width: '100%', marginBottom: 6 }}
                />
                <textarea
                  value={editForm.description}
                  onChange={e => setEditForm({ ...editForm, description: e.target.value })}
                  rows="3"
                  style={{ width: '100%', marginBottom: 6 }}
                />
                <label>
                  Progress: 
                  <input
                    type="number"
                    value={editForm.progress}
                    onChange={e => setEditForm({ ...editForm, progress: +e.target.value })}
                    min="0"
                    max="100"
                    style={{ width: 60, marginLeft: 6 }}
                  />%
                </label>
                <div style={{ marginTop: 6 }}>
                  <button onClick={() => saveEdit(p.id)} style={{ marginRight: 6 }}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <h3>{p.title}</h3>
                <p><strong>Status:</strong> {p.status}</p>
                <p><strong>Deadline:</strong> {p.deadline}</p>
                <p>{p.description}</p>
                <progress value={p.progress} max="100" style={{ width: '100%' }} />
                <p>{p.progress}% complete</p>
                <div style={{ marginTop: 6 }}>
                  <Link to={`/project-details/${p.id}`} style={{ marginRight: 10 }}>View Details</Link>
                  <button onClick={() => startEdit(p)} style={{ marginRight: 6 }}>Edit</button>
                  <button onClick={() => deleteProject(p.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          style={{ marginRight: 10 }}
        >
          Prev
        </button>
        {page} / {totalPages}
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          style={{ marginLeft: 10 }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JpMyProjects;
