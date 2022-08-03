import './App.css';
import StudentView from './features/student/StudentView';
import StudentBookPage from './features/studentBook/studentBookPage';
import StudentBookView from './features/studentBook/studentBookView';

function App() {
  return (
    <div className="App">
      <StudentView />
      <StudentBookPage view={StudentBookView}/>
    </div>
  );
}

export default App;