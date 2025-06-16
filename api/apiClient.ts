import axios, { CreateAxiosDefaults } from "axios";

export const API_URL = process.env.API_URL;
export const BASE_URL = "/api";

//프록시 설정으로 인해 클라이언트 / 서버 환경에 따라 url 조정
export const baseConfig: CreateAxiosDefaults = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const ServerConfig: CreateAxiosDefaults = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const apiClient = axios.create(baseConfig);
export const ServerClient = axios.create(ServerConfig);
