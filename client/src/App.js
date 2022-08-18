import './App.css';
import Home from './Container/Home/Home';
import Calculate from './Container/Calculate/Calculate';
import AboutUs from './Container/AboutUs/AboutUs';
import ExcelView from './Container/ExcelView/ExcelView';
import Doutliners from './Container/DataVisual/Doutliners';
import Houtliners from './Container/DataVisual/Houtliners';
import Fcorreraltion from './Container/DataVisual/Fcorreraltion';
import Cuniquelabels from './Container/DataVisual/Cuniquelabels';

function App() {
  return (
    <div className="App">
      <Home/>
      <Calculate/>
      <AboutUs/>
      <ExcelView/>
      <Doutliners/>
      <Houtliners/>
      <Fcorreraltion/>
      <Cuniquelabels/>
    </div>
  );
}

export default App;
