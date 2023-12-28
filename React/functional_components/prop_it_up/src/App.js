import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard firstName = {"Doe"} lastName = {"Jane"} age = {35} hairColor = {"Black"}/>
        <PersonCard firstName = {"Jhon"} lastName = {"Smith"} age = {47} hairColor = {"Brown"}/>
        <PersonCard firstName = {"Fillmore"} lastName = {"Millard"} age = {50} hairColor = {"Brown"}/>
        <PersonCard firstName = {"Smith"} lastName = {"Maria"} age = {62} hairColor = {"Brown"}/>
    </div>
  );
}

export default App;
