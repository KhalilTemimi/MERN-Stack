import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthorList from './components/authorList';
import Form from './components/form';
import Update from './components/update';
import Details from './components/details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/author' element={<AuthorList/>} />
        <Route path='/new' element={<Form/>} />
        <Route path='/author/:id' element={<Update/>}/>
        <Route path='/author/details/:id' element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
