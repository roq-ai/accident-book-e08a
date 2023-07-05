import axios from 'axios';
import queryString from 'query-string';
import { AccidentInterface, AccidentGetQueryInterface } from 'interfaces/accident';
import { GetQueryInterface } from '../../interfaces';

export const getAccidents = async (query?: AccidentGetQueryInterface) => {
  const response = await axios.get(`/api/accidents${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createAccident = async (accident: AccidentInterface) => {
  const response = await axios.post('/api/accidents', accident);
  return response.data;
};

export const updateAccidentById = async (id: string, accident: AccidentInterface) => {
  const response = await axios.put(`/api/accidents/${id}`, accident);
  return response.data;
};

export const getAccidentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/accidents/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAccidentById = async (id: string) => {
  const response = await axios.delete(`/api/accidents/${id}`);
  return response.data;
};
