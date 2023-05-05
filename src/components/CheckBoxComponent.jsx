import React, { useState, useRef, useEffect } from "react";
import ListItem from "./ListItem";

export default function CheckBoxComponent() {
  const API_URL = "http://localhost:3500/item";
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [item, setItem] = useState([]);

  useEffect(() => {
    // RETRIVE OR READ

    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw Error("No data found");
        const data = await res.json();
        setItem(data);
        localStorage.setItem("shoppingList", JSON.stringify(data));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  function addItem() {
    const id = item.length ? item[item.length - 1].id + 1 : 1;
    const itemText = inputRef.current.value;
    const newItem = { id: id, item: itemText, checked: false };

    const listItem = [...item, newItem];
    setItem(listItem);

           // CREATE ITEM
    async function postRequest() {
      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newItem),
        });
        if (!res.ok) throw Error("Error addind");
        console.log(res.json());
      } catch (err) {
        console.log("error");
      }
    }
    postRequest();
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function handleCheck(id) {
    const newArray = item.map((i) => {
      return id === i.id ? { ...i, checked: !i.checked } : i;
    });

    const singleObjArray = newArray.filter((item) => {
      return item.id === id;
    });

    setItem(newArray);

    //         UPDATE
    async function updateRequest() {
      try {
        const res = await fetch(`${API_URL}/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ checked: singleObjArray[0].checked }),
        });
        if (!res.ok) throw Error("Error addind");
      } catch (err) {
        console.log("error");
      }
    }
    updateRequest();
  }

  function handleDelete(id) {
    const newArray = item.filter((i) => {
      return id !== i.id;
    });
    setItem(newArray);
    // DELETE THE ITEM 
    async function deleteRequest() {
      try {
        const res = await fetch(`${API_URL}/${id}`, {
          method: "Delete",
        });
        if (!res.ok) throw Error("Error addind");
      } catch (err) {
        console.log("error");
      }
    }
    deleteRequest();

  }
  const filterItems = item.filter((i) => {
    return i.item.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const unOrderedListItems = filterItems.map((i) => {
    return (
      <ListItem
        item={i}
        key={i.id}
        id={i.id}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
    );
  });

  return (
    <div style={{ margin: "50px 0px 0px 100px" }}>
      <div>
        <div style={{ padding: "40px 40px 20px" }}>
          {/* SEARCH */}
          <div>
            <input
              type="text"
              placeholder="Search items here...."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              value={searchTerm}
            />
          </div>
          {/* ADD ITEM FIELD */}
          <input type="text" placeholder="Item name" ref={inputRef} />
          <button onClick={addItem}>Add item</button>
        </div>
        {/* LIST ITEMS */}

        <ul>{loading ? "Loading" : unOrderedListItems}</ul>

        {/* LENGTH  */}
        <p>
          {item.length === 1
            ? item.length + " list item"
            : item.length + " list items"}
        </p>
      </div>
    </div>
  );
}