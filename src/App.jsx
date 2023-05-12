import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './LogIn';
import Notes from './Notes';
import { NoteProvider } from './context/noteContext';

function App() {
  return (
    <div className="App">
      <NoteProvider>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/notes" element={<Notes />} exact />
        </Routes>
      </NoteProvider>
    </div>
  );
}
export default App;
