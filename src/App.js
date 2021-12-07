import React from 'react';
import './App.scss'

// Custom Component
import AppBar  from 'components/AppBar/AppBar';
import BoardBar from 'components/BoardBar/BoardBar';
import BoardContent from 'components/BoardContent/BoardContent';

function App() {
  return (
    <div className="trello-minhhoangdev-master">
      <AppBar />
      <BoardBar />
      <BoardContent />
    </div>
    
  );
}

export default App;
