import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.contact}>
      <div>
        <p>
          <FaPhone />
          {contact.name}
        </p>
        <p>
          <IoPerson />
          {contact.number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
