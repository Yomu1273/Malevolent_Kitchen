import { useEffect, useState } from "react";
import Level1 from "./Level1";

const PlayNow = () => {

    let [level,setLevel] = useState(1);

    return(
    <>
        <div className="Heading">
            <h1>Level {level}</h1>
        </div>
        <Level1/>
    </>
    );
};

export default PlayNow;