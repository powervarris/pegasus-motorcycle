import React, { useState, useEffect } from "react";
import "./index.css";
import MotorBody from "./MotorBody";
import KartBody from "./KartBody";
import Header from "./Header";
import Title from "./Title";
import Searchbar from "./Searchbar";
import SortDropdown from "./SortDropdown";
import motorcycles from "./Data";
import NumResult from "./NumResult";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  // const [results, setResults] = useState(motorcycles);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(motorcycles);
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    const sortedData = [...filteredData].sort((a, b) => {
      switch (sortOption) {
        case "modelaz":
          return (a.model?? "").localeCompare(b.model?? "");
        case "modelza":
          return (b.model?? "").localeCompare(a.model?? "");
        case "brandaz":
        return (a.brand?? "").localeCompare(b.brand?? "");
        case "brandza":
        return (b.brand?? "").localeCompare(a.brand?? "");
        case "pricelowhigh":
          return a.price - b.price; 
        case "pricehighlow":
          return b.price - a.price; 
        default:
          return 0;
      }
    });

    if (!arraysAreEqual(sortedData, filteredData)) {
      setFilteredData(sortedData);
    }
  }, [sortOption, filteredData]);

  function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i]!== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  // useEffect(() => {
  //   if (searchQuery === "") {
  //     setFilteredData(motorcycles);
  //   } else {
  //     const filtered = motorcycles.filter(
  //       (motorcycles) => {
  //         if (motorcycles.model && motorcycles) {
  //           return motorcycles.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //                  motorcycles.brand.toLowerCase().includes(searchQuery.toLowerCase())
  //         }
  //         return false;
  //       });
  //     setFilteredData(filtered);
  //   }
  // }, [searchQuery, motorcycles]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearch = (event) => {
    const {value} = event.target;
    setSearchTerm(value);
    filterData(value);
  }

  const filterData = (searchTerm) => {
    const filteredData = motorcycles.filter((motorcycles) => 
      motorcycles.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      motorcycles.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      motorcycles.color.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData)
  }


  const addToCart = (item) => {
    const existingItem = cartItems.find((i) => i.model === item.model);
    if (existingItem) {
      addQuantity(existingItem);
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  const addQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i.model === item.model ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const subtractQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i.model === item.model
          ? { ...i, quantity: Math.max(1, i.quantity - 1) }
          : i
      )
    );
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="App">
      <Header/>
      <Title/>
      <div className="filter-container">
        <Searchbar handleSearch={handleSearch} searchTerm={searchTerm} />
        <SortDropdown handleSortChange={handleSortChange}/>
        <NumResult filteredData={filteredData}/>
        <br/>
      </div>
      <MotorBody addToCart={addToCart} filteredData = {filteredData} />
      <KartBody
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        addQuantity={addQuantity}
        subtractQuantity={subtractQuantity}
        imgSRC={cartItems[0]?.imgSRC}
        total={getTotal()}
      />
    </div>
  );
}