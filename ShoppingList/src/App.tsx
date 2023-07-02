import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import "./App.css";

function App() {
  const [addedItem, setAddedItem] = useState<string>("");
  const [listOfItemsState, setListOfItemsState] = useState<string[]>([]);
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...listOfItemsState, input?.value];
    console.log(input);
    setListOfItemsState(newItems);
    form.reset();
  };

  const handleDeleteItem = (i: number) => {
    const afterRemoval = listOfItemsState.filter((item) => {
      return listOfItemsState.indexOf(item) !== i;
    });

    setListOfItemsState(afterRemoval);
  };
  return (
    <>
      <div>
        <h1>shopping list</h1>
        <h3>Items to buy:</h3>
        <form onSubmit={onSubmit}>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor: "bisque",
              border: "aliceblue solid",
              width: "500px",
              height: "200px",
            }}
          >
            <input
              title="Need To buy"
              placeholder="Milk, Bread, eggs..."
              name="item"
              type="text"
              required
            ></input>
            <button>Add</button>
          </div>
        </form>

        {listOfItemsState.map((item, index) => (
          <Stack direction="row" spacing={1} key={index}>
            <p>{item}</p>
            <IconButton
              aria-label="delete"
              onClick={() => handleDeleteItem(index)}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
        ))}
      </div>
    </>
  );
}

export default App;
