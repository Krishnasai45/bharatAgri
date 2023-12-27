import React, { useEffect, useState } from "react";
import { Modal } from "./Modal";
import '../Styles/Card.css'


const Card =({image,crop_name})=>{
    const [modalOpen, setModalOpen] = useState(false);
    const handelOpen =(e)=>{
        e.preventDefault()
        setModalOpen(true)
    }
    const handelClose =()=>{
        setModalOpen(false)
    }
return(
    <>
    <div onClick={(e)=>handelOpen(e)} className="maincard">
        <img className="cardimage" alt="image" src={image}/>
        <div className="cardname">{crop_name}</div>
    </div>
    {
        modalOpen && <Modal closeModal ={handelClose}>
            <img className="modelimage" src={image} alt="images"/>
        </Modal>
    }
    </>
)
}

export default Card