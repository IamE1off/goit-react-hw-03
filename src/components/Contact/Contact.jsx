import css from "./Contact.module.css"
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ name, number, id, onDelete }) {
    return (
        <div className={css.container}>
            <div className={css.info}>
                <p> <FaUser className={css.icon} size="16" /> {name}</p>
                <p> <FaPhoneAlt className={css.icon} size="16" /> {number}</p>
            </div>
            <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}