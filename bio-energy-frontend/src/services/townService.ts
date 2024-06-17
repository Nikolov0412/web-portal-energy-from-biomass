import axios from 'axios';
import { Town, TownDTO } from '../models/ITowns';

const API_URL = 'https://localhost:7265/api/Town'; // Replace with your API URL

const getTowns = () => {
  return axios.get<Town[]>(API_URL);
};

const getTownById = (id: string) => {
  return axios.get<Town>(`${API_URL}/${id}`);
};

const createTown = (town: TownDTO) => {
  return axios.post<Town>(API_URL, town, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const updateTown = (id: string, town: TownDTO) => {
  return axios.put<Town>(`${API_URL}/${id}`, town, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const deleteTown = (id: string) => {
  return axios.delete(`${API_URL}/${id}`);
};

export { getTowns, getTownById, createTown, updateTown, deleteTown };
