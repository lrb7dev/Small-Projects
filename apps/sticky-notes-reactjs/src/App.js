
import './App.scss';

function App() {

  const addNote = () => {}

  return (
    <div className="app">
      <h1>Sticky Notes</h1>
      <h6 className='devName'>by Luan Rabelo</h6>
      <form onSubmit={addNote} className='note-form'>
        <textarea placeholder='Create a new note...'></textarea>
        <button>ADD</button>
      </form>
    </div>
  );

  // put the version in the final
}

export default App;
