import './App.css';
import StudentPage from './features/student/StudentPage';
import StudentView from './features/student/StudentView';
import StudentBookPage from './features/studentBook/studentBookPage';
import StudentBookView from './features/studentBook/studentBookView';

function App() {
  return (
    <div className="App">
      <StudentPage view={StudentView} />
      <StudentBookPage view={StudentBookView}/>
    </div>
  );
}

export default App;