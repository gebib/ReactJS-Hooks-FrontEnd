import axios from "axios";

//the rest API URL
const DATA_BASE_REST_API_URL = 'http://localhost:8080/api/v1/data';

class DataFromDb {

    //get all data
    getallData = () => {
        return axios.get(DATA_BASE_REST_API_URL);
    };

    //put in new data
    createData = (newData) => {
        console.log('//////DataTobeSaved: ',newData);
        return axios.post(DATA_BASE_REST_API_URL, newData)
    }
}

export default new DataFromDb();