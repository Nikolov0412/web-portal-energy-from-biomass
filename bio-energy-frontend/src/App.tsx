import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/Home';
import { AboutPage } from './pages/About';
import { BioMassTypesPage } from './pages/BiomassTypes';
import { EnergyCreationPage } from './pages/EnergyCreation';
import { FirmsPage } from './pages/Firms';
import { FirmDataPage } from './pages/FirmData';
import { HeatMeasurePage } from './pages/HeatMeasure';
import { PowerMeasurePage } from './pages/PowerMeasure';
import { NKIDPage } from './pages/NKID';
import { TownsPage } from './pages/Towns';
import { BiomassPage } from './pages/Biomass';
import { BioEnergyPage } from './pages/BioEnergy';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';


function App() {
  Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/types-biomass' element={<BioMassTypesPage/>}/>
        <Route path='/creation-process' element={<EnergyCreationPage/>}/>
        <Route path='/firms' element={<FirmsPage/>}/>
        <Route path='/firm-data' element={<FirmDataPage/>}/>
        <Route path='/heat-measures' element={<HeatMeasurePage/>}/>
        <Route path='/power-measures' element={<PowerMeasurePage/>}/>
        <Route path='/nkid' element={<NKIDPage/>}/>
        <Route path='/towns' element={<TownsPage/>}/>
        <Route path='/biomass' element={<BiomassPage/>}/>
        <Route path='/bio-energy' element={<BioEnergyPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
