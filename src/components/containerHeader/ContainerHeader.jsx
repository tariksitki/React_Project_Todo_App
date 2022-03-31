

import ButtonOpenClose from "../buttonOpenClose/ButtonOpenClose";
import "./ContainerHeader.scss";
import { useState } from "react";


const ContainerHeader = () => {
  const [stateOpen, setStateOpen] = useState(true);

  const OpenCloseFunc = (e) => {
    console.log(e.target)
    setStateOpen(!stateOpen);
  }
  return (
    <section className="container-header">
        <h1>TASK TRACKER</h1>
        <ButtonOpenClose OpenCloseFunc = {OpenCloseFunc} stateOpen = {stateOpen} ></ButtonOpenClose>
    </section>
  )
}

export default ContainerHeader;