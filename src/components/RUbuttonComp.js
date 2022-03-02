
import React, {useState, useEffect} from "react";

const RUbuttonComp = (props) => {
    // Use console.log() for debugging
    const [content, setContent] = useState("")

    useEffect(()=>{

    })

    const btnClicked = (e) => {
        setContent(e.child.props.children);
    }
    return <div className="tabs">
            {
                props.children.map((child, index)=>{
                    return(<button key={index} onClick={()=>btnClicked({child})} className="btn">
                        {child.props.title}
                    </button>)
                })
            }
        <div className="view">
            {content}
        </div>
    </div>;
};

export default RUbuttonComp;