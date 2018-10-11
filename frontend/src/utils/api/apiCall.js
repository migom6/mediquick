import { HttpClient } from "./httpClient";

// This is the API. The backend root URL can be set from here.

const API = "http://139.59.27.218:5000/";

//Setting the todos URI

const GET_SYMPTOMPS = `${API}/symptoms`;
const GET_DIAGNOSIS = `${API}/diagnosis`;
const GET_RESULTS = `${API}/results`;

const getSymptoms = body => {
  return HttpClient.get(GET_SYMPTOMPS, body);
};

const getDiagnosis = body => {
  return HttpClient.get(GET_DIAGNOSIS, body);
};

const getResults = body => {
  return HttpClient.get(GET_RESULTS, body);
};

const MedicApi = { getSymptoms, getDiagnosis, getResults };

export { MedicApi };
