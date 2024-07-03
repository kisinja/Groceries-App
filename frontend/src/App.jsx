import { useSelector } from "react-redux";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import SearchItem from "./SearchItem";

const App = () => {

  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items') || '[]'));

  const [search, setSearch] = useState('');


  const setAndSaveItems = (items) => {
    setItems(items);
    localStorage.setItem('items', JSON.stringify(items));
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  return (
    <div
      className={`App ${darkMode ? " dark" : ""}`}
    >
      <Header title="Groceries" />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter(item => ((item.name).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        setItems={setItems}
      />
      <Footer items={items} />
    </div>
  )
};

export default App