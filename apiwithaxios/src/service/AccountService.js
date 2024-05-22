import axios from "axios";
import { PREFIX_API } from "../constant/AppConstant";


export const getAll = async () => {
    try {
        const response = await axios.get(`${PREFIX_API}/student`)
        // const response = await axios.get("http://localhost:8080/accounts");
        // const response = await axios.get("http://localhost:8080/accounts?_page=2&_limit=1");
        return response.data;
    } catch (e) {
        console.log(e);
        return [];
    }
}

export const addAccount = async (account) => {
    try {
        await axios.post("http://localhost:8080/accounts", account);
    } catch (e) {
        throw e;
    }
}

export const removeAccount = async (account) => {
    try {
        await axios.delete(`http://localhost:8080/accounts/${account.id}`, account);
    } catch (e) {
        throw e;
    }
}