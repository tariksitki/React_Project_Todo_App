
import ContainerHeader from "../containerHeader/ContainerHeader";
import ContainerInput from "../containerInput/ContainerInput";
import "./Container.scss";
import { useState } from "react";

const Container = () => {
    const [state, setState] = useState(true);

    const handleClickOpen = (e) => {
       return ( 
        (e.target.classList.contains("buttonOpen") ? setState(!state) : null)
       )}
    
    const handleClickAdd = (e) => {
        console.log(e.target);
    }
       
    return (
        <div className="container" onClick={() => {
            handleClickOpen() 
            handleClickAdd()
            }}>
            <ContainerHeader />
            {state ? <ContainerInput /> :null }
        </div>
    )
};

export default Container;