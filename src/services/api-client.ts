import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ed36045d5a704346b58a28d442ce857c"
    }
})