import logo from './logo.svg';
import './App.css';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <h1 className='leadersboardHeading'>Leaderboard</h1>
      <Student name="Batool" university = "Habib" score={355}/>
      <Student name="Batool" university = "Habib" score={240}/>
      <Student name="Batool" university = "Habib" score={355}/>
    </div>
  );
}

export default App;
