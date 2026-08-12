import { useId } from "react";

function InputContainer({
  type,
  amount = 0,
  onAmountChange,
  currencyOptions = [],
  onCurrencyChange,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div
      className={`bg-[#ffffff] h-37 border-4 rounded-3xl border-black flex justify-between items-start p-3 ${className}`}
    >
      <div className="flex flex-col">
        <label
          htmlFor={amountInputId}
          className="mb-2 inline-block min-h-8 max-w-[30%]"
        >
          {type}
        </label>
        <input
          id={amountInputId}
          type="number"
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className=""
        />
      </div>
      <div className="flex flex-col min-h-8 max-w-[30%]">
        <p>Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currItem, index) => {
            return(
            <option value={currItem} key={index}>
              {currItem}
            </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
export default InputContainer;
