import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import CurrencyBox from "./components/CurrencyBox";
import { Button } from "./components/ui/button";
import fetchCurrencyInfo from "./hooks/fetchCurrencyInfo";
import { useState } from "react";

function App() {
    const [from, setFrom] = useState<string>("USD");
    const [to, setTo] = useState<string>("INR");
    const [amount, setAmount] = useState<number>(0);
    const [convertedAmount, setConvertedAmount] = useState<number>(0);

    const currencyData: any = fetchCurrencyInfo(from);
    const currenyList = Object.keys(currencyData);

    const handleCurrencyConvert = () => {
        setConvertedAmount(amount * currencyData[to]);
    };

    const handleSwap = () => {
        setTo(from);
        setFrom(to);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div
                id="wrapper"
                className="flex flex-row justify-center items-center text-white"
            >
                <div className="p-6 inline-block min-w-[600px] border border-slate-500 rounded-lg relative">
                    <CurrencyBox
                        label="From"
                        currency={from}
                        setCurrency={setFrom}
                        isDisabled={false}
                        amount={amount}
                        setAmount={setAmount}
                        optionList={currenyList}
                    />
                    <Button
                        className="absolute left-[45%] top-[37%]"
                        onClick={handleSwap}
                    >
                        Swap
                    </Button>
                    <CurrencyBox
                        label="To"
                        currency={to}
                        setCurrency={setTo}
                        isDisabled={true}
                        amount={convertedAmount}
                        setAmount={setAmount}
                        optionList={currenyList}
                    />
                    <Button
                        className="w-full min-h-8"
                        onClick={handleCurrencyConvert}
                    >
                        Convert from {from} to {to}
                    </Button>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
