import axios from "axios";
import useSWR from "swr";

export const API_URL = "http://api.ceos-sinchon.com/";

export const AxiosClient = axios.create({ baseURL: API_URL });
export const fetcher = (url) => AxiosClient.get(url).then((res) => res.data);

export const fetchKeywords = () =>
  AxiosClient.get("/api/v1/keywords").then((res) => res.data);
export const createKeyword = (keyword) =>
  AxiosClient.post("/api/v1/keywords", { name: keyword }).then(
    (res) => res.data
  );
export const getKeywordById = (keywordId) =>
  AxiosClient.get(`/api/v1/keywords/${keywordId}`).then((res) => res.data);

export const getProfiles = () =>
  AxiosClient.get("/api/v1/profiles").then((res) => res.data);
  
export const createProfile = () => null;
