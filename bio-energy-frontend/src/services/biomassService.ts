import axios from 'axios';
import { Biomass, BiomassDTO } from '../models/IBiomass';

const API_URL = 'https://localhost:7265/api/Biomass';

const getBiomasses = () => {
  return axios.get<Biomass[]>(API_URL);
};

const getBiomassById = (id: string) => {
  return axios.get<Biomass>(`${API_URL}/${id}`);
};

const createBiomass = (biomass: BiomassDTO) => {
  return axios.post<Biomass>(API_URL, biomass, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const updateBiomass = (id: string, biomass: BiomassDTO) => {
  return axios.put<Biomass>(`${API_URL}/${id}`, biomass, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const deleteBiomass = (id: string) => {
  return axios.delete(`${API_URL}/${id}`);
};

export { getBiomasses, getBiomassById, createBiomass, updateBiomass, deleteBiomass };
