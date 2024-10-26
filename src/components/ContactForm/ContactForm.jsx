import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useId } from "react";

import css from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(40, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
  });
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContactWithId = { ...values, id: nanoid() };
    onAddContact(newContactWithId);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="nameFieldId">
          Name
        </label>
        <Field className={css.input} type="text" name="name" id={nameFieldId} />
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="span"
        />

        <label className={css.label} htmlFor="phoneFieldId">
          Number
        </label>
        <Field
          className={css.input}
          type="phone"
          name="number"
          id={phoneFieldId}
        />
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="span"
        />

        <div className={css.button}>
          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
