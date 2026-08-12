import { memo } from "react";
import { FixedSizeList } from "react-window";
import Input from "./Input";
import UseListItemsContext from "../Context/ListItemsContext";

function ToDoList() {
  const { ListItems } = UseListItemsContext();

  return (
    <div className="flex justify-center w-screen">
      <FixedSizeList
        height={500}
        width={800}
        itemSize={100}
        itemCount={ListItems.length}
        itemData={ListItems}
        className="[&::-webkit-scrollbar]:hidden scrollbar-none [-ms-overflow-style:none]"
      >
        {Input}
      </FixedSizeList>
    </div>
  );
}

export default memo(ToDoList);
