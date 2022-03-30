
import "./Task.scss";

const Task = ({name, date}) => {
    return (
        <div className="task-div">
            <div className="task-div-up">
                <div className="task-div-name">{name}</div>
                <div className="task-div-close">X</div>
            </div>

            <div className="task-div-down">{date}</div>
        </div>
    )
}

export default Task;