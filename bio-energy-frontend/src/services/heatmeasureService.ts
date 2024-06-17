import axios from 'axios';
import { HeatMeasure, HeatMeasureDTO } from '../models/IMeasure';

const API_URL = 'https://localhost:7265/api/Measurement/Heat';

const getHeatMeasures = () => {
  return axios.get<HeatMeasure[]>(API_URL);
};

const getHeatMeasureById = (id: string) => {
  return axios.get<HeatMeasure>(`${API_URL}/${id}`);
};

const createHeatMeasure = (heatMeasure: HeatMeasureDTO) => {
  return axios.post<HeatMeasure>(API_URL, heatMeasure, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const updateHeatMeasure = (id: string, heatMeasure: HeatMeasureDTO) => {
  return axios.put<HeatMeasure>(`${API_URL}/${id}`, heatMeasure, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const deleteHeatMeasure = (id: string) => {
  return axios.delete(`${API_URL}/${id}`);
};

export { getHeatMeasures, getHeatMeasureById, createHeatMeasure, updateHeatMeasure, deleteHeatMeasure };
