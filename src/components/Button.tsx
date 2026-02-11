import { ButtonInterface } from '../types';
import styles from './Button.module.css';

const Button = ({ text, filled, type, onclick }: ButtonInterface) => { 
    const typeClass = type ? styles[type.toLowerCase()] : "";
    const filledClass = filled ? styles.filled : "";
    const btnClass = styles.btn ?? "";

    return (
        <button onClick={onclick} className={`${styles.btn} ${styles[type]} ${filledClass}`}>
            <span>{text}</span>
        </button>
    );
}


export default Button
