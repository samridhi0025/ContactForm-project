import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("sami");
  const [email, setEmail] = useState("sami@gmail.com");
  const [text, setText] = useState("hii!");
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
            icon={<MdMessage fontSize="15px" />}
          />
          <Button
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="15px" />}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="15px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_controller}>
            <input type="text" name="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className={styles.form_controller}>
            <input type="email" name="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className={styles.form_controller}>
            <textarea name="text" rows="5" />
            <label htmlFor="text">Text</label>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Button text="SUBMIT" />
          </div>
        </form>
        <div>{name + " "  + email + " " + text }</div>
      </div>

      <div className={styles.contact_image}>
        <img src="/images/img_2.png" alt="contact image" />
      </div>
    </section>
  );
};


export default ContactForm;
