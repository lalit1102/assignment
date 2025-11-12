import Task from './Components/Task';
import Task2 from './Components/Task2';
import Task3 from './Components/Task3';


function App() {
  return (
    <>
    <Task />    
    <Task2 name="Lalit Baldaniya" age={30} location="Ahmedabad" />
    <Task2 name="Ansh Baldaniya" age={16} location="Ahmedabad" />
    <Task2 name="Kenil Baldaniya" age={8} location="Ahmedabad" />
    <Task3 />
    </>  
  );
}

export default App;
