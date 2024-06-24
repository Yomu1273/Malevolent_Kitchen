import { useEffect, useRef, useState } from "react";

const Home = () => {
    const roller = useRef();
    let [pos,setPos] = useState(0);

    useEffect(
        () => {setTimeout(()=>{
            setPos(pos+100);
            if(pos>=window.screen.width){
                setPos(0);
            }
            //roller.current.style.left = pos.toString()+"px";
        },300);
        }
    );

    return(
        <div id="BodyBox">
            <div style={{color:"white",backgroundColor:"black",position:"relative"}}>
                <h1 style={{position:"relative"}} id="roller" ref={roller}>CLICK ON PLAY NOW TO PLAY THE GAME</h1>
            </div>
            <h4 className="Heading" style={{listStyle:"None"}}><li>SCORE 1000 OR MORE POINTS TO WIN</li><li>EACH CORRECT ANSWER WEIGHS 50 POINTS</li></h4>
        </div>
    );
};

export default Home;