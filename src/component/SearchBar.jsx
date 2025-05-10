import React, { useState, useEffect, useRef } from "react";

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);

  // Debounce Search for Better Performance
  useEffect(() => {
    const debounce = setTimeout(() => {
      const results = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(results.length > 0 ? results : ["No Results Found"]);
      setSelectedIndex(-1);
    }, 300);

    return () => clearTimeout(debounce);
  }, [query, data]);

  // Handle Keyboard Navigation (Arrow Up, Down, Enter)
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev < filteredData.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      if (filteredData[selectedIndex] !== "No Results Found") {
        setQuery(filteredData[selectedIndex]);
      }
      setFilteredData([]);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputWrapper}>
        <input
          ref={inputRef}
          type="text"
          placeholder="🔍 Type to search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          style={styles.input}
        />
        {query && (
          <button onClick={() => setQuery("")} style={styles.clearButton}>
            ✖
          </button>
        )}
      </div>
      {query && (
        <ul style={styles.list}>
          {filteredData.map((item, index) => (
            <li
              key={index}
              style={{
                ...styles.listItem,
                background: selectedIndex === index ? "#007bff" : "transparent",
                color: selectedIndex === index ? "white" : "black",
                cursor: item === "No Results Found" ? "default" : "pointer",
                fontWeight: item === "No Results Found" ? "bold" : "normal",
                textAlign: item === "No Results Found" ? "center" : "left",
              }}
              onMouseEnter={() => item !== "No Results Found" && setSelectedIndex(index)}
              onMouseLeave={() => setSelectedIndex(-1)}
              onClick={() => {
                if (item !== "No Results Found") {
                  setQuery(item);
                  setFilteredData([]);
                }
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Example Usage
const App = () => {
  const items = [
    "Apple", "Banana", "Cherry", "Mango", "Orange", "Pineapple",
    "Blueberry", "Strawberry", "Grapes", "Watermelon", "Peach", "Papaya"
  ];

  return (
    <div>
      <SearchBar data={items} />
    </div>
  );
};

// Styles
const styles = {
  container: {
    maxWidth: "450px",
    margin: "20px auto",
    textAlign: "center",
    position: "relative",
  },
  title: {
    textAlign: "center",
    color: "#007bff",
    fontSize: "24px",
    fontWeight: "bold",
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    border: "2px solid #007bff",
    borderRadius: "8px",
    outline: "none",
    transition: "0.3s",
  },
  clearButton: {
    position: "absolute",
    right: "10px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "18px",
    color: "#666",
  },
  list: {
    listStyle: "none",
    padding: "0",
    marginTop: "5px",
    background: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    maxHeight: "200px",
    overflowY: "auto",
    position: "absolute",
    width: "100%",
    zIndex: "1000",
    animation: "fadeIn 0.3s ease-in-out",
  },
  listItem: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    transition: "0.3s",
    textAlign: "left",
  },
};

export default App;