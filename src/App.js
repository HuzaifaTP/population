import './App.css';
import PieChart from "./PieChart/PieChart";
import BarChart from "./BarChart/BarChart";
import {useEffect, useState} from "react";
import populationDetails from "./populationDetails.json";
import InputForm from "./InputForm/InputForm";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(populationDetails)
    }, []);

    const handleUserInput = (inputFromUser)=>{
        setData([...data,inputFromUser]);
    }
  return (
      <div className="App">
          <InputForm onNewInput={handleUserInput}/>
          <PieChart data={data}/>
          <BarChart data={data}/>
      </div>
  );
}

export default App;
