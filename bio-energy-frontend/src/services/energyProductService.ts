import axios from 'axios';
import { EnergyProduct, EnergyProductDTO } from '../models/IBioEnergyProduct';

const API_URL = 'https://localhost:7265/api/EnergyProduct'; // Replace with your API URL

const getEnergyProducts = () => {
  return axios.get<EnergyProduct[]>(API_URL);
};

const getEnergyProductById = (id: string) => {
  return axios.get<EnergyProduct>(`${API_URL}/${id}`);
};

const createEnergyProduct = (energyProduct: EnergyProductDTO) => {
  return axios.post<EnergyProduct>(API_URL, energyProduct, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const updateEnergyProduct = (id: string, energyProduct: EnergyProductDTO) => {
  return axios.put<EnergyProduct>(`${API_URL}/${id}`, energyProduct, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const deleteEnergyProduct = (id: string) => {
  return axios.delete(`${API_URL}/${id}`);
};

export { getEnergyProducts, getEnergyProductById, createEnergyProduct, updateEnergyProduct, deleteEnergyProduct };
