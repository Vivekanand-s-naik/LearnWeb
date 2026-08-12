import UseListItemsContext from "../Context/ListItemsContext";
import { useCallback, useState, memo } from "react";

function Input({ style, index }) {
  const { ListItems, setListItems } = UseListItemsContext();
  let task = ListItems[index];
  const [isCompleted, setCompleted] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const [editButtonText, setEditButtonText] = useState("📝");

  const handleRemoveButton = useCallback(() => {
    console.log(index);
    setListItems((prev) => prev.filter((_, i) => i != index));
  }, [setListItems, index]);

  const handleEditButton = () => {
    if (isDisabled) {
      setDisabled(false);
      setEditButtonText("✅");
    } else {
      setDisabled(true);
      setEditButtonText("📝");
    }
  };

  const handleInputChange = useCallback(
    (e) => {
      setListItems((prev) =>
        prev.map((_, i) => {
          if (i == index) return e.target.value;
          else return _;
        }),
      );
    },
    [index, setListItems],
  );

  const handleCheck = useCallback(
    (e) => {
      e.currentTarget.checked ? setCompleted(true) : setCompleted(false);
    },
    [setCompleted],
  );

  return (
    <div
      style={style}
      className={`mx-auto h-[clamp(80px,500px,70px)] w-[60%] pb-3 text-3xl`}
    >
      <div
        className={`${isCompleted ? "bg-green-300" : "bg-blue-500"} h-full w-full flex justify-around rounded-2xl`}
      >
        <div className="flex w-10/12">
          <input
            type="checkbox"
            onChange={handleCheck}
            defaultChecked={false}
          />
          <input
            type="text"
            placeholder="Enter Task"
            value={task}
            onChange={handleInputChange}
            disabled={isDisabled}
            className="w-full p-3"
          />
        </div>

        <button type="button" className="text-2xl" onClick={handleEditButton}>
          {editButtonText}
        </button>
        <button type="button" className="text-2xl" onClick={handleRemoveButton}>
          ❌
        </button>
      </div>
    </div>
  );
}

export default memo(Input);
