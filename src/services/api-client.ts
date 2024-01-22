import axios from "axios";

export interface FetchResponse<T> {
    count: number,
    results: T[]
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ed36045d5a704346b58a28d442ce857c"
    }
})