import React from "react";
import 'tachyons'
const Card = ({id,name,email}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="photo of robot" src={`https://robohash.org/${id}`}></img>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    );
}

export default Card;