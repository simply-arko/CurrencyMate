import React from "react";
import { SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface componentProps {
    label: string;
    isDisabled: boolean;
    amount: number;
    setAmount: React.Dispatch<SetStateAction<number>>;
    currency: string;
    setCurrency: React.Dispatch<SetStateAction<string>>;
    optionList: string[];
}

const CurrencyBox: React.FC<componentProps> = ({
    label,
    isDisabled,
    amount,
    setAmount,
    currency,
    setCurrency,
    optionList,
}) => {
    return (
        <div className="border border-slate-500 rounded-lg p-6 mb-4">
            <div className="flex flex-row justify-between px-1 opacity-65">
                <h3>{label}</h3>
                <h3>Currency Type</h3>
            </div>
            <div className="flex flex-row gap-x-8 mt-4">
                <Input
                    disabled={isDisabled}
                    type="number"
                    placeholder="Amount"
                    defaultValue={amount}
                    value={amount}
                    onChange={(e) => {
                        setAmount(Number(e.target.value));
                    }}
                />
                <Select onValueChange={(item) => setCurrency(item)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={currency} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {optionList.map((item, index) => {
                                return (
                                    <SelectItem key={index} value={item}>
                                        {item}
                                    </SelectItem>
                                );
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default CurrencyBox;
