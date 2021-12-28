import axios from "axios";//Ajax lib

//the rest API URL
const DATA_BASE_REST_API_URL = 'http://localhost:8080/api/v1/data';

class DataFromDb {

    //Read all data
    getallData = () => {
        return axios.get(DATA_BASE_REST_API_URL);
    };

    //Create in new data
    createData = (newData) => {
        return axios.post(DATA_BASE_REST_API_URL, newData);
    };

    //get aData by Id
    getDataById = (aDataId) => {
        return axios.get(DATA_BASE_REST_API_URL + "/" + aDataId);
    };

    //update aData by Id
    updateDataById = (aDataId, updatedData) => {
        return axios.put(DATA_BASE_REST_API_URL + "/" + aDataId, updatedData);
    };

    //update aData by Id
    deleteDataById = (aDataId) => {
        return axios.delete(DATA_BASE_REST_API_URL + "/" + aDataId);
    }
}

export default new DataFromDb();