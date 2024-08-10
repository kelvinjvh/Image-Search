import { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx'
import useStore from './Store/index'
import ListImage from './Components/ListImage.jsx'
function App() {

  const { FecthData, loading } = useStore();

  useEffect(() => {
    FecthData('paisajes');
  }, [])

  return (
    <div className="App">
      <Navbar />
      <ListImage />
      {/* {loading ? <p>Cargando</p> : ''} */}
    </div>
  );
}

export default App;
