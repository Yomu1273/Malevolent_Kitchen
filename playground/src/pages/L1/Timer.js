import { useState, useEffect } from "react";

const Timer  = ({onTimer}) => {
    let [time, setTime] = useState(60);

    const func = useEffect(
        () => {
            const timeId = setTimeout(() => {
                if(time<0){
                    //setTime(60);
                    return 0;
                } else {
                    setTime((time) => time-1);
                    onTimer(time);
                }
            },1000);

            return () => clearTimeout(timeId);
        }
    );
};

export default Timer;