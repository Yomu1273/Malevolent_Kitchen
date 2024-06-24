import {useState} from "react";
import QuestionBox from "./L1/QuestionBox";
import Timer from "./L1/Timer";

const Level1 = () => {

    let [score,setScore] = useState(0);
    let [time, setTime] = useState(60);
    let joker = 0;
    

    const getScore = (val) => {
        setScore(val)
    };

    const getTime = (val) => {
        setTime(val);
    }

    return(
        <div id="BodyBox">
            <div className="Scoreboard">
            <Timer onTimer={getTime}/>
            <h4>Time Remaining: {time}s</h4>
                Score: {score}
            {time==0 ? ((score<100) ? (window.alert("You Lost")) : window.alert("You Won")): .0}
            </div>
            <QuestionBox onQuestionBox={getScore}/>
        </div>
    );
};

export default Level1;