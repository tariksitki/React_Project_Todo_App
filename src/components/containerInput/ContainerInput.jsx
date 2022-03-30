import "./ContainerInput.scss";
import { useState } from "react";
import Task from "../task/Task";

let dataArray = JSON.parse(localStorage.getItem("dataLocal"));

const ContainerInput = (props) => {
  const [stateName, setStateName] = useState("");
  const [stateDate, setStateDate] = useState("");
  const [stateAdd, setStateAdd] = useState(false);

  const handleName = (e) => {
    return setStateName(e.target.value);
  };

  const handleDate = (e) => {
    return setStateDate(e.target.value);
  };

  const handleAdd = (e) => {
    if (stateName && stateDate) {
      dataArray.push({ name: stateName, date: stateDate });
    } else {
      alert("Please Enter a Value for Name and Date");
    }
    localStorage.setItem("dataLocal", JSON.stringify(dataArray));
    setStateName("");
    setStateDate("");
  };

  const handleDelete = (e) => {
    return (
      e.target.classList.contains("task-div-close")
        ? e.target.parentElement.parentElement.remove()
        : null,
      (dataArray = dataArray.filter((item) => {
        return (
          item.name !== e.target.parentElement.firstElementChild.innerText &&
          item.date !==
            e.target.parentElement.parentElement.lastElementChild.innerText
        );
      })),
      localStorage.setItem("dataLocal", JSON.stringify(dataArray))
    );
  };

  return (
    <div className="containerInput" onClick={handleDelete}>
      <div className={props.classname}>
        <div className="containerInputName">
          <label className="nameLabel" htmlFor="taskname">
            Task Name*
          </label>
          <input
            type="text"
            id="taskname"
            name="taskname"
            onChange={handleName}
            value={stateName}
          />
        </div>

        <div className="containerInputDate">
          <label className="dateLabel" htmlFor="taskdate">
            Task Date
          </label>
          <input
            type="datetime-local"
            name="taskdate"
            id="taskdate"
            onChange={handleDate}
            value={stateDate}
          />
        </div>

        <div className="containerInputButton">
          <button className="addButton" onClick={handleAdd}>
            ADD TASK
          </button>
        </div>

      </div>

      <section className="section">
        {JSON.parse(localStorage.getItem("dataLocal")).map((data, input) => {
          return <Task name={data.name} date={data.date} key={input} />;
        })}
      </section>

    </div>
  );
};

export default ContainerInput;
