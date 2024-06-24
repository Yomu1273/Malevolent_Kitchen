import { useRef, useState } from "react";

const QuestionBox = ({onQuestionBox}) => {

    let [qn,setQn] = useState("ATB!");
    let [btn,setBtn] = useState("Start");
    let [crctOption,setCrctOption] = useState(0);
    let [op1,setOp1] = useState(0);
    let [op2,setOp2] = useState(0);
    let [op3,setOp3] = useState(0);
    let [op4,setOp4] = useState(0);
    let [score,setScore] = useState(0);

    const clicked = useRef();
    const opArr = ['+','-','*'];

    let generateRandom = () => {
        return Math.floor(Math.random()*10)+1; 
    };

    let generateEquation = () => {
        let num1 = generateRandom();
        let num2 = generateRandom();
        let operator = opArr[Math.floor(Math.random()*opArr.length)];
        let question = num1.toString() + operator + num2.toString();
        setQn(question);
        let answer = 0;
        if(operator==='+'){
            answer = num1+num2;
        } else if(operator==='-'){
            answer=num1-num2;
        } else {
            answer=num1*num2;
        }
        let crctOp = Math.floor(Math.random()*4)+1;
        setCrctOption(crctOp);
        switch(crctOp){
            case 1:
                setOp1(answer);
                setOp2(answer+generateRandom()+1);
                setOp3(answer-generateRandom()+1);
                setOp4(answer*generateRandom()+2);
                break;
            case 2:
                setOp2(answer);
                setOp1(answer+generateRandom()+1);
                setOp3(answer-generateRandom()+1);
                setOp4(answer*generateRandom()+2);
                break;
            case 3:
                setOp3(answer);
                setOp2(answer+generateRandom()+1);
                setOp1(answer-generateRandom()+1);
                setOp4(answer*generateRandom()+2);
                break;
            case 4:
                setOp4(answer);
                setOp2(answer+generateRandom()+1);
                setOp3(answer-generateRandom()+1);
                setOp1(answer*generateRandom()+2);
                break;
        }
    };

    let checkAnswer = (e,val) => {
        if(val===crctOption){
            setScore(score+5);
            onQuestionBox(score+5);
            clicked.current.style.backgroundColor = "green";
        } else {
            clicked.current.style.backgroundColor = "red";
        }
        setTimeout(()=>{
            clicked.current.style.backgroundColor = "black";
            generateEquation();
        },600);
    };

    let toggleControl = () => {
        if(btn=="Start"||"Skip"){
            setBtn("Skip");
            generateEquation();
        }
        else setBtn("Start");
    };

    return(
        <div className="PlayArea">
                <table className="L1Table">
                    <tr className="L1qCell">
                        <th colSpan={2} ref={clicked}>{qn}</th>
                    </tr>
                    <tr className="L1Cell">
                        <th onClick={(e)=>checkAnswer(e,1)}>{op1}</th>
                        <th onClick={(e)=>checkAnswer(e,2)}>{op2}</th>
                    </tr>
                    <tr className="L1Cell">
                        <th onClick={(e)=>checkAnswer(e,3)}>{op3}</th>
                        <th onClick={(e)=>checkAnswer(e,4)}>{op4}</th>
                    </tr>
                </table><br/>
                <button style={{fontFamily:"Courier new",backgroundColor:"black",color:"white"}} onClick={toggleControl}>{btn}</button>
            </div>
    );
}

export default QuestionBox;