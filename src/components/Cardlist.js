import React from "react";
import Card from "./Card";

const CardList = ({robots}) =>{
    const nizRobota = robots.map((a,i)=>{
        return <Card id={i} name={robots[i].name} email={robots[i].email}/>
    })
    return (
        <div> {nizRobota} </div>
    );
}

export default CardList;