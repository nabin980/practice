import axios from "axios";
import React, { useEffect, useState } from "react";

const TaskOne = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setItems(response.data);
        setFilteredItems(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    setFilteredItems(
      items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, items]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search user..."
        className="flex-1 outline-none text-sm inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2"
      />
      <ul className="filtered-list">
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskOne;
