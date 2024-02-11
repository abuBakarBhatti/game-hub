import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number,
    next: string | null, 
    results: T[]
}

export const axiosInstance =  axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ed36045d5a704346b58a28d442ce857c"
    }
})

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
                .get<FetchResponse<T>>(this.endpoint, config)
                .then(res => res.data)
    }

    get = (id: number |  string) => {
       return axiosInstance.get<T>(this.endpoint + "/" + id).then(res => res.data)
    } 
}
export default APIClient

