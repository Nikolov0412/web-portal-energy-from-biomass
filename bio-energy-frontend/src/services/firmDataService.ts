import axios from 'axios';
import { FirmDataDTO } from '../models/IFirm';

const API_URL = 'https://localhost:7265/api/FirmData';

const getFirmData = () => {
  return axios.get(API_URL);
};

const getFirmDataById = (id:string) => {
  return axios.get(`${API_URL}/${id}`);
};

const createFirmData = (firmData:FirmDataDTO) => {
  return axios.post(API_URL, firmData);
};

const updateFirmData = (id:string, firmData:FirmDataDTO) => {
  return axios.put(`${API_URL}/${id}`, firmData);
};

const deleteFirmData = (id:any) => {
  return axios.delete(`${API_URL}/${id}`);
};

export { getFirmData, getFirmDataById, createFirmData, updateFirmData, deleteFirmData };
