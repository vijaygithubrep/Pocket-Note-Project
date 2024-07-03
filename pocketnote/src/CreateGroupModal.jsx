import React, { useState } from 'react';
import './CreateGroupModal.css';

const CreateGroupModal = ({ onClose, onCreate }) => {
  const [groupName, setGroupName] = useState('');
  const [groupColor, setGroupColor] = useState('blue');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ id: groupName.substring(0, 2).toUpperCase(), name: groupName, color: groupColor });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Create New Notes group</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Group Name
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter your group name..."
              required
            />
          </label>
          <label>
            Choose colour
            <div className="color-options">
              {['pink', 'purple', 'lightblue', 'blue', 'orange', 'blueviolet', 'lightpink'].map(color => (
                <span
                  key={color}
                  className={`color-option ${color === groupColor ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setGroupColor(color)}
                />
              ))}
            </div>
          </label>
          <button type="submit" className="create-btn">Create</button>
        </form>
        <button onClick={onClose} className="close-btn">X</button>
      </div>
    </div>
  );
};

export default CreateGroupModal;
