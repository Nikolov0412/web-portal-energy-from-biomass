import axios from 'axios';
import { Firm, FirmDTO } from '../models/IFirm';

const API_URL = 'https://localhost:7265/api/Firm';

const getFirms = () => {
  return axios.get<Firm[]>(API_URL);
};

const getFirmById = (id: string) => {
  return axios.get<Firm>(`${API_URL}/${id}`);
};

const createFirm = (firm: FirmDTO) => {
  return axios.post<Firm>(API_URL, firm);
};

const updateFirm = (id: string, firm: FirmDTO) => {
  return axios.put<Firm>(`${API_URL}/${id}`, firm);
};

const deleteFirm = (id: string) => {
  return axios.delete(`${API_URL}/${id}`);
};

export { getFirms, getFirmById, createFirm, updateFirm, deleteFirm };
