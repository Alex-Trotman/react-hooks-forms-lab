import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [typedCategory, setTypedCategory] = useState("All")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    console.log("Changed!")
    if (event.target.value === ""){
      setSelectedCategory("All")
    } else if (event.target.value === "Produce"){
      setSelectedCategory("Produce")
    } else if (event.target.value === "Dairy"){
      setSelectedCategory("Dairy")
    } else if (event.target.value === "Dessert"){
      setSelectedCategory("Dessert")
    } else (setSelectedCategory("All"))
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function handleNameChange(){
    console.log("Name changed!")
  }

  function handleNewCategoryChange(){
    console.log("Category changed!")
  }


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={null} handleNameChange={handleNameChange} handleCategoryChange={handleNewCategoryChange}/>
      <Filter onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
