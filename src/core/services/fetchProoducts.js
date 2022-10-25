import axios from "axios";


export const getProducts = async (url) => {
    
    const response = await axios.get(url)
    return response.data
}
