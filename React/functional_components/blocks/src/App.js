import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Main from './components/main';

function App() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <Main/>
    </div>
  );
}

export default App;
