import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cropData } from "../Redux/action";
import Card from "./Card";

const Screen2 =()=>{
    const dispatch = useDispatch()
    const cropsData = useSelector((state)=>state.CropDatas.crop)
    // const data = cropsData
    // let  [crops,setCrops] = useState(Array.isArray(cropsData)?cropsData:[])


    useEffect(() => {
        dispatch(cropData())
    },[]);
    console.log(cropsData)
    return(
        <>
        <h1>{cropsData?(<div>Screen2</div>):(<div>...loading</div>)}</h1>
        {
           Array.isArray(cropsData)
            ? cropsData.map((ele)=>{
                return(
                    <Card key={ele.id} image={ele.thumbnails[0].image} crop_name={ele.crop_name}/>
                )
            }):null
        }
        </>
    )
}

export default Screen2