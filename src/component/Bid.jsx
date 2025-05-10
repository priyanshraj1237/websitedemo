import React, { useState } from 'react';

const Bids = () => {
  // Sample data for freelancer's bids
  const [bids, setBids] = useState([
    { id: 1, project: 'Landing Page Design', amount: '₹5000', status: 'Active' },
    { id: 2, project: 'Mobile App Development', amount: '₹15000', status: 'Expired' },
    { id: 3, project: 'E-commerce Website', amount: '₹12000', status: 'Active' },
  ]);

  // Sample data for job provider's requests
  const [requests, setRequests] = useState([
    { id: 1, project: 'Logo Design', freelancer: 'John Doe', status: 'Pending' },
    { id: 2, project: 'SEO Services', freelancer: 'Jane Smith', status: 'Pending' },
  ]);

  // Handler to accept a job provider's request
  const acceptRequest = (requestId) => {
    setRequests(requests.map(request =>
      request.id === requestId ? { ...request, status: 'Accepted' } : request
    ));
    alert('Request Accepted!');
  };

  // Handler to decline a job provider's request
  const declineRequest = (requestId) => {
    setRequests(requests.map(request =>
      request.id === requestId ? { ...request, status: 'Declined' } : request
    ));
    alert('Request Declined!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#333' }}>Bids and Requests</h2>

      {/* Freelancer's Bids Section */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>Freelancer's Bids</h3>
        {bids.length === 0 ? (
          <p>No bids placed yet.</p>
        ) : (
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            {bids.map(bid => (
              <li key={bid.id} style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '12px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '600' }}>{bid.project}</h4>
                <p>Amount: {bid.amount}</p>
                <p>Status: {bid.status}</p>
                {bid.status === 'Active' && (
                  <button
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#4f46e5',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                  >
                    Withdraw Bid
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Job Provider's Requests Section */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>Job Provider's Requests</h3>
        {requests.length === 0 ? (
          <p>No requests received yet.</p>
        ) : (
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            {requests.map(request => (
              <li key={request.id} style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '12px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '600' }}>{request.project}</h4>
                <p>Freelancer: {request.freelancer}</p>
                <p>Status: {request.status}</p>
                {request.status === 'Pending' && (
                  <div>
                    <button
                      onClick={() => acceptRequest(request.id)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        marginRight: '12px',
                      }}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => declineRequest(request.id)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#dc3545',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                      }}
                    >
                      Decline
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Bids;
