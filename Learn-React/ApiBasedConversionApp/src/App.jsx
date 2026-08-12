import "./index.css";
import { InputContainer } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [ConvertedAmount, setConvertedAmount] = useState(0);
  const data = useCurrencyInfo(from);

  const options = Object.keys(data);
  const swap = () => {
    setAmount(ConvertedAmount);
    setConvertedAmount(amount);
    setFrom(to);
    setTo(from);
  };

  const convert = () => {  
    setConvertedAmount(amount * data[to])
  };

  // console.log(
  //   amount,
  //   to,
  //   ConvertedAmount,
  //   data,
  //   setAmount,
  //   setFrom,
  //   setTo,
  //   setConvertedAmount,
  //   options,
  //   swap,
  //   convert,
  // );
  return (
    <>
      <img
        src="/CurrencyBackGround.jpg"
        alt="currency Background"
        className="h-screen w-screen relative"
      />
      <div className="h-screen w-screen flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <div className="bg-transparent backdrop-blur-md h-100 w-[40%] flex flex-col gap-8 rounded-3xl overflow-hidden p-3">
          <div className="relative h-74 flex flex-col gap-4">
            <InputContainer
              type={"from"}
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
            /> 
            <InputContainer
              type="to"
              amount={ConvertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
            <div className="absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <button
                className="bg-blue-700 text-white h-12 w-24 rounded-3xl"
                onClick={swap}
              >
                Swap
              </button>
            </div>
          </div>
          <button className="bg-blue-500 rounded-3xl text-white text-center flex flex-col items-center justify-center h-12" onClick={convert}>
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
