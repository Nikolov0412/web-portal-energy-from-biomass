import axios from 'axios';
import { PowerMeasure, PowerMeasureDTO } from '../models/IMeasure';

const API_URL = 'https://localhost:7265/api/Measurement/Power'; // Replace with your API URL

const getPowerMeasures = () => {
  return axios.get<PowerMeasure[]>(API_URL);
};

const getPowerMeasureById = (id: string) => {
  return axios.get<PowerMeasure>(`${API_URL}/${id}`);
};

const createPowerMeasure = (powerMeasure: PowerMeasureDTO) => {
  return axios.post<PowerMeasure>(API_URL, powerMeasure, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const updatePowerMeasure = (id: string, powerMeasure: PowerMeasureDTO) => {
  return axios.put<PowerMeasure>(`${API_URL}/${id}`, powerMeasure, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const deletePowerMeasure = (id: string) => {
  return axios.delete(`${API_URL}/${id}`);
};

export { getPowerMeasures, getPowerMeasureById, createPowerMeasure, updatePowerMeasure, deletePowerMeasure };
