import styles from "./Smallcolors.module.css";

const Smallcolors = ({ clr, colorClickHandler }) => {
    return (
        <button
            onClick={() => {
                colorClickHandler(clr);
            }}
            className={styles.btn}
            style={{ backgroundColor: clr }}
        ></button>
    );
};
export default Smallcolors;
