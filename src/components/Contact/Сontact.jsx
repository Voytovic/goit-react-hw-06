import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactOps';
import css from './contact.module.css';

const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div className={css.contactInfo}>
        <FaUser className={css.contactIcon} />
        <p className={css.contactText}>{name}</p>
      </div>
      <div className={css.contactInfo}>
        <FaPhoneAlt className={css.contactIcon} />
        <p className={css.contactText}>{number}</p>
      </div>
      <button
        className={css.btnDelete}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
        <MdDelete className={css.contactIcon} />
      </button>
    </div>
  );
};

export default Contact;
