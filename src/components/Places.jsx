import React from "react";

const Places = (props) => {
    return (
        <div className="card">
            <img src={props.image} className="image"></img>
            <h3>{props.name}</h3>
            <h4>{props.location}</h4>
        </div>
    )
}

export default Places