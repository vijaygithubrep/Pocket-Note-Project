import React from 'react';
import './Sidebar.css';

const Sidebar = ({ noteGroups, onGroupClick, onOpenModal }) => {
  return (
    <>
      <div className="sidebar">
        <div>
          <h2>Pocket Notes</h2>
          <button onClick={onOpenModal} className="create-group-btn">+ Create Notes group</button>
          <ul className="note-groups">
            {noteGroups.map((group) => (
              <li key={group.id} className="note-group-item" style={{ backgroundColor: group.color }} onClick={() => onGroupClick(group)}>
                <span className="group-id">{group.id}</span>
                {group.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
