import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(contact.id));
  };
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
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
