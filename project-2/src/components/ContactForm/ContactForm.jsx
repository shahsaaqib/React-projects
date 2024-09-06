import { FaEnvelope } from 'react-icons/fa';
import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdMessage, MdPhone } from 'react-icons/md';
import { useState } from 'react';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<MdPhone fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<FaEnvelope fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="10" />
          </div>
          <div className={styles.submit_btn}>
            <Button text="Submit" />
          </div>
          <div>{name + '    ' + email + '    ' + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/contact.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
