
import "./ContainerInput.scss";


const ContainerInput = () => {
  return (
    <div className="containerInput">
        <div className="containerInputName">
            <label className="nameLabel" htmlFor="taskname">Task Name*</label>
            <input type="text" id="taskname" name ="taskname" />        
        </div>

        <div className="containerInputDate">
            <label className="dateLabel" htmlFor="taskdate">Task Date</label>
            <input type="datetime-local" name="taskdate" id="taskdate" />
        </div>

        <div className="containerInputButton">
            <button className="addButton">   
                Add Task
            </button>
        </div>
    </div>
  )
}

export default ContainerInput;