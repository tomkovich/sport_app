import React from "react";
import style from "./Content.module.css";
import TrainingItem from "./TrainingItem/TrainingItem";
import FilterList from "./FilterList";

export default props => {
  return (
    <>
      {props.isSearch ? (
        <FilterList filteredItems={props.filteredItems} />
      ) : (
        props.list.length > 0 && (
          <>
            <div className={style.total}>
              Total Trainings: {props.list.length}
            </div>
            <div className={style.trainingList}>
              {props.list.map((t, index) => (
                <TrainingItem
                  key={index}
                  setIsSearch={props.setIsSearch}
                  title={t.title}
                  id={index}
                  date={t.date}
                  time={t.time}
                  editTraining={props.editTraining}
                  deleteItem={props.deleteTraining}
                />
              ))}
            </div>
          </>
        )
      )}
    </>
  );
};
