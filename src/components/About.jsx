import React from "react";
import blogData from "../data/blog";

export default function About({image, about}){
    return(
    
        <>
        <aside>
            <img 
            src = {image}
            placeholder = "https://via.placeholder.com/215"
            alt = "blog logo"/>
            <p>{about}</p>
        </aside>
        </>
    )
}