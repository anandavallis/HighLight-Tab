
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Tabs = () => {
  const { tabName } = useParams();
  const tabs = ['home', 'profile', 'settings'];

  return (
    <div>
      <h2>Tabs Example</h2>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        {tabs.map(tab => (
          <NavLink
            key={tab}
            to={`/tab/${tab}`}
            style={({ isActive }) => ({
              padding: '8px 16px',
              borderRadius: '6px',
              textDecoration: 'none',
              backgroundColor: isActive ? 'dodgerblue' : '#eee',
              color: isActive ? 'white' : 'black',
            })}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </NavLink>
        ))}
      </nav>

      <div style={{ marginTop: '2rem' }}>
        <h3>Current Tab: {tabName}</h3>
      </div>
    </div>
  );
};

export default Tabs;
