

import ButtonOpenClose from "../buttonOpenClose/ButtonOpenClose";
import "./ContainerHeader.scss";


const ContainerHeader = () => {
  return (
    <section className="container-header">
        <h1>TASK TRACKER</h1>
        <ButtonOpenClose  ></ButtonOpenClose>
    </section>
  )
}

export default ContainerHeader;