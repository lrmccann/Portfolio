import React, { useEffect, useState } from "react";
import "./style.css";

export default function SkillsContainer(props) {
    const [propsToMap, setPropsToMap] = useState([]);
    const arrayOfProps = [props]
    useEffect(() => {
        setPropsToMap(arrayOfProps)
    }, [arrayOfProps]
    )
    return (
        <div className="skillTypeCont">
            {console.log(propsToMap, 'asdas')}
            <h2 id="skillsTypeText">{props.skillType}</h2>
            {propsToMap.map((index, myKey) => (
                <div className="makeFlexRow">
                    <div className="makeFlexColumn">
                        <img src={index.imageOne} alt={index.altOne} id='skillImg'></img>
                        <h5 >{index.itemOne}</h5>
                    </div>
                    <div className="makeFlexColumn">
                        <img src={index.imageTwo} alt={index.altTwo} id='skillImg'></img>
                        <h5 >{index.itemTwo}</h5>
                    </div>
                    <div className="makeFlexColumn">
                        <img src={index.imageThree} alt={index.altThree} id='skillImg'></img>
                        <h5 >{index.itemThree}</h5>
                    </div>
                    <div className="makeFlexColumn">
                        <img src={index.imageFour} alt={index.altFour} id='skillImg'></img>
                        <h5>{index.itemFour}</h5>
                    </div>
                    <div className="makeFlexColumn">
                        <img src={index.imageFive} className="rando" alt={index.altFive} id='skillImg'></img>
                        <h5 >{index.itemFive}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}