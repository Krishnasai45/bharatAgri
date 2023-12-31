import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cropData } from "../Redux/action";
import Card from "./Card";
import "../Styles/Screen.css";
import Pagination from "./Pagination";

const Screen2 =()=>{
    const dispatch = useDispatch()
    const cropsData = useSelector((state)=>state.CropDatas.crop)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);


    useEffect(() => {
        dispatch(cropData())
    },[]);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = cropsData.slice(firstPostIndex, lastPostIndex);
    return(
        <div>
            <h2>CROPS LIST</h2>
        <div className="cardsmain">
        {/* <h1>{cropsData?(<div>Screen2</div>):(<div>...loading</div>)}</h1> */}
        {
           Array.isArray(currentPosts)
            ? currentPosts.map((ele)=>{
                return(
                    <Card key={ele.id} image={ele.thumbnails[0].image} crop_name={ele.crop_name}/>
                )
            }):null
        }
        </div>
        <Pagination
                totalPosts={cropsData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default Screen2