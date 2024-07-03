import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CreateGroupModal from './CreateGroupModal';
import MainContent from './MainContent';


function App() {
  const [noteGroups, setNoteGroups] = useState([
    { id: 'MG', name: 'My personal grp', color: 'purple', note: [] },
    { id: 'JS', name: 'Javascript grp', color: 'pink', note: [] },
    { id: 'HT', name: 'HTML grp', color: 'lightblue', note: [] },
    { id: 'CS', name: 'CSS Notes', color: 'orange', note: [] },
    { id: 'SQ', name: 'SQL Notes', color: 'blueviolet', note: [] },
    { id: 'PY', name: 'Python Notes', color: 'lightpink', note: [] },
  ]);

  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateGroup = (newGroup) => {
    setNoteGroups([...noteGroups, newGroup]);
  };

  return (
    <div className="app">
      <Sidebar noteGroups={noteGroups} onGroupClick={handleGroupClick} onOpenModal={handleOpenModal} />
      <MainContent selectedGroup={selectedGroup} />
      {isModalOpen && <CreateGroupModal onClose={handleCloseModal} onCreate={handleCreateGroup} />}
    </div>
  );
}

export default App;
