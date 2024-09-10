import logo from './logo.svg';
import './App.css';
import './components/CommentsList/commentsList.css';
import CommentsList from './components/CommentsList/CommentsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CommentsList />
       
      </header>
    </div>
  );
}

export default App;
