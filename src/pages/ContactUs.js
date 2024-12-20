import React, { useRef, useState } from "react";

const ContactUs = () => {
  const [items, setItems] = useState(initialItems);
  const [itemToAdd, setItemToAdd] = useState("");
  const [selected, setSelected] = useState([]);
  const totalNoOfItems = items.length;
  const selectedItems = selected.length;
  const currentIdRef = useRef(items.length + 1);

  const handleAddItem = () => {
    const newItem = {
      id: currentIdRef.current++,
      name: itemToAdd,
    };
    if (itemToAdd.length > 3) {
      setItems([...items, newItem]);
      setItemToAdd("");
    } else {
      alert("Item to short");
    }
    
  };

  const handleCheckboxChange = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((sel) => sel !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((it) => it.id !== id));
    setSelected(selected.filter((sel)=>sel !==  id))
  };

  return (
    <div className="p-8">
      <h1 className="font-bold text-3xl ">Things to pack</h1>
      <div className="my-8">
        <input
          type="text"
          value={itemToAdd}
          onChange={(e) => setItemToAdd(e.target.value)}
          className="border p-2 rounded-md"
        />
        <button
          onClick={handleAddItem}
          type="button"
          className="bg-green-700 text-white px-4 py-2 mx-3 rounded-md"
        >
          Add item
        </button>
      </div>
      <div>
        {items?.map((item) => {
          return (
            <div key={item.id} className="flex items-center my-5 space-x-5">
              <div className="space-x-2">
                <input
                  onChange={() => handleCheckboxChange(item.id)}
                  type="checkbox"
                  id={item.id}
                  checked={selected.includes(item.id)}
                />
                <label htmlFor={item.id}>{item.name}</label>
              </div>
              <button
                type="button"
                onClick={()=>handleDeleteItem(item.id)}
                className="bg-red-600 text-white px-4 rounded-md"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <hr className="my-10" />
      <p className="text-xl ">
        {selectedItems} out of {totalNoOfItems} items packed
      </p>
    </div>
  );
};

export default ContactUs;

const initialItems = [
  {
    id: 1,
    name: "Shoes",
  },
  {
    id: 2,
    name: "Make up",
  },
  {
    id: 3,
    name: "Clothes",
  },
  {
    id: 4,
    name: "Books",
  },
];
