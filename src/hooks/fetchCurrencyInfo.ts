import { useEffect, useState } from "react";
import fetchDataFromApi from "@/utils/api";

const fetchCurrencyInfo = (currency: string) => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetchDataFromApi(currency).then((res: Object) => setData(res));
    }, [currency]);

    return data;
};

export default fetchCurrencyInfo;
