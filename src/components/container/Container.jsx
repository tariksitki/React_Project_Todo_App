
import ContainerHeader from "../containerHeader/ContainerHeader";
import ContainerInput from "../containerInput/ContainerInput";
import "./Container.scss";
import { useState } from "react";
import Task from "../task/Task";

const Container = () => {
    const [stateOpen, setStateOpen] = useState(true);
    const [stateAdd, setStateAdd] = useState(true);
   
    const handleClickOpen = (e) => {
       return ( 
        (e.target.classList.contains("buttonOpen") ? setStateOpen(!stateOpen) : null)
       )}
    
    return (
        <div className="container" onClick={(e) => {
            handleClickOpen(e)
        }}>
            <ContainerHeader />
           
            {stateOpen ?  <ContainerInput classname = "visible" /> : <ContainerInput classname = "unvisible" />}
        </div>
    )
};

export default Container;