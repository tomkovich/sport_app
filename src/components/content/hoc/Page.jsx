import React, { useState } from "react";
import Button from "../Button/Button";
import List from "../List";
import Form from "../Form";
import EditForm from "../EditForm";
import style from "./../Content.module.css";
import Search from "../Search";

const Page = props => {
  const [isToggle, setToggle] = useState(false);
  const [editing, setEditing] = useState(false);
  const initialFormState = { title: "", time: "", date: "" };
  const [currentItem, setCurrentItem] = useState(initialFormState);

  const editTraining = id => {
    setEditing(true);
    
    setCurrentItem({
      id: id,
      title: props.type[id].title,
      time: props.type[id].time,
      date: props.type[id].date
    });
  };

  const updateItem = (updatedItem, id) => {
    setEditing(false);

    props.updateTraining(updatedItem, id);
  };

  const [isSearch, setIsSearch] = useState(false)
  const [filteredItems, setFilteredItems] = useState(null)

  let onChangeValue = (titleFilter) => {
    let filteredItems = props.type

    titleFilter.length > 0 && setIsSearch(true)
    filteredItems = filteredItems.filter((item) => {
      
      let itemTitle = item.title.toLowerCase()

      return itemTitle.indexOf(titleFilter.toLowerCase()) !== -1
    })
    setFilteredItems(filteredItems)
  }

  return (
    <div className={style.pageTraining}>
      <h1>{props.title}</h1>
      <Button toggle={setToggle} /><Search setIsSearch={setIsSearch} onChangeValue={onChangeValue} />
      {isToggle && <Form addTraining={props.addTraining} toggle={setToggle} />}
      {editing && (
        <EditForm currentItem={currentItem} updateItem={updateItem} />
      )}
      <List
        isSearch={isSearch}
        editTraining={editTraining}
        deleteTraining={props.deleteTraining}
        list={props.type}
        filteredItems={filteredItems}
        setIsSearch={setIsSearch}
      />
    </div>
  );
};

export default Page;
