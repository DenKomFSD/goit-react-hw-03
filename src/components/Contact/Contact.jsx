import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import css from "../Contact/Contact.module.css";

export default function Contact({ id, name, number }) {
  return (
    <div className={css.container}>
      <li className={css.item} key={id}>
        <p className={css.data}>
          <FaUser />
          {name}
        </p>
        <p className={css.data}>
          <FaPhoneAlt />
          {number}
        </p>
      </li>
      <button className={css.btn}>Delete</button>
    </div>
  );
}
