import { useState, useEffect } from 'react'
import logo from './logo.png';
import './App.css';
import DataTable from './components/Table'
import Submit from './components/Submit'
import axios from 'axios'

function App() {
  const [ rowData, setRowData ] = useState([])
  const [loading, setLoading ] = useState(false)

      useEffect( () => {
        const fetchData = async () => {
          setLoading(true)
          const response = await axios.get('http://localhost:8000/api/v1/subscriptions/');
          setRowData(response.data);
          console.log('Loading = ', loading)
          setLoading(false)
        };
        fetchData()
      }, [] );

      const sendData = async (body) => {
        setLoading(true)
        const response = await axios.post('http://localhost:8000/api/v1/subscriptions/', body);
        setRowData([...rowData, response.data])
        console.log('Loading = ', loading)
        setLoading(false)
      }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Submit sendData={sendData} />
      <DataTable rows={rowData}/>
    </div>
  );
}

export default App;
