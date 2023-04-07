import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ff71cc9683654f68a65a34d74630dcfa'
    }
})