import axios, { AxiosResponse } from "axios";

const BASE_URL: string = "https://v6.exchangerate-api.com/v6/";
const exchangeRateApiKey: string = import.meta.env.VITE_APP_EXCHANGE_TOKEN;

const fetchDataFromApi = async (currency: string) => {
    const res: AxiosResponse = await axios.get(
        BASE_URL + `${exchangeRateApiKey}/latest/${currency}`
    );

    return res.data.conversion_rates;
};

export default fetchDataFromApi;
