import axios from "axios";

const Axios = axios.create({
    baseURL:"https://job-finder-server-5l5w.onrender.com"
})

export default Axios;