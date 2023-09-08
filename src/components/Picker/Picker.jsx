import { useState } from "react";
import Smallcolors from "../Smallcolors/Smallcolors";
import styles from "./Picker.module.css";

const Picker = () => {
    const [color, setColor] = useState("");

    const [colors, setColors] = useState(["red", "pink", "brown", "black", "yellow"]);

    const colorClickHandler = (clrName) => {
        setColor(clrName);
    };

    const [newShade, setNewShade] = useState("")

    const [ipShade, setIpShade] = useState("");

    const smallColorBoxes = colors.map((shade, index) => {
        return <Smallcolors key={index} clr={shade} colorClickHandler={colorClickHandler} />
    });

    const addColorHandler = () => {
        const trimNewShade = newShade.trim();
        setColors([...colors, trimNewShade]);
        setIpShade("");
    }

    const changeHandler = e => {
        setNewShade(e.target.value);
        setIpShade(e.target.value);
    }

    return (
        <>
            <div>
                <input type="text" onChange={changeHandler} value={ipShade} />
                <button onClick={addColorHandler}>Add Color</button>
            </div>
            <div className={styles.head}>
                <div className={styles.mainbox} style={{ backgroundColor: color }}></div>
            </div>
            <div>
                {smallColorBoxes}
            </div>
        </>
    );
};
export default Picker;
