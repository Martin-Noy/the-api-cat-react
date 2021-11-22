import { useState, useEffect, useCallback } from "react";
import Gatito from "./Components/Gatito";
import Select from "./Components/Select";
const URL = 'https://api.thecatapi.com/v1/breeds'
export default function App() {
  const [gatitos, setGatitos] = useState([])
  const [gatito, setGatito] = useState({})
  const fetchData = useCallback(
    () => fetch(URL)
      .then(response => response.text())
      .then(data => {
          const json = JSON.parse(data);
          console.log(json);
          setGatitos(json)
        }
      )
    ,[]
  )
  const handleChange = (e) => {
    if(e.target.value==='--none--'){
      console.log(e.target.value)
      setGatito({})
    }else{
      setGatito(JSON.parse(e.target.value))
    }
    
  }
  useEffect(() => {
    fetchData()
  }, [fetchData])
  return (
    <div>
      <h1>Seleccione un gatito</h1>
      <Select gatitos={gatitos} handleChange={handleChange}/>
      {gatito.name !== undefined ?
      <Gatito value={gatito}/>
      :
      null
      }
    </div>
  );
}