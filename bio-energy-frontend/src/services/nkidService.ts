import axios from 'axios';
import { NKID, NKIDDTO } from '../models/INKID';

const API_URL = 'https://localhost:7265/api/NKID'; // Replace with your API URL

const getNKIDs = () => {
  return axios.get<NKID[]>(API_URL);
};

const getNKIDById = (id: string) => {
  return axios.get<NKID>(`${API_URL}/${id}`);
};

const createNKID = (nkid: NKIDDTO) => {
  return axios.post<NKID>(API_URL, nkid, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const updateNKID = (id: string, nkid: NKIDDTO) => {
  return axios.put<NKID>(`${API_URL}/${id}`, nkid, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const deleteNKID = (id: string) => {
  return axios.delete(`${API_URL}/${id}`);
};

export { getNKIDs, getNKIDById, createNKID, updateNKID, deleteNKID };
