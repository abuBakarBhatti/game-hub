import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number,
    results: T[]
}

// export default axios.create({
//     baseURL: "https://api.rawg.io/api",
//     params: {
//         key: "ed36045d5a704346b58a28d442ce857c"
//     }
// })

export const axiosInstance =  axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ed36045d5a704346b58a28d442ce857c"
    }
})

class APIClient<T>{
    endpoint: string

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
                .get<FetchResponse<T>>(this.endpoint, config)
                .then(res => res.data)
    }
}
export default APIClient

