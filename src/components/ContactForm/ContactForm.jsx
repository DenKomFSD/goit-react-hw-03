import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "../ContactForm/ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const initialValues = {
    name: "",
    phone: "",
  };

  const nameId = useId();
  const phoneId = useId();

  //sending form
  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      phone: values.phone,
    });
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor={nameId}>Name</label>
          <Field
            className={css.inputfield}
            type="text"
            name="name"
            id={nameId}
          />
        </div>
        <div className={css.field}>
          <label htmlFor={phoneId}>Phone</label>
          <Field
            className={css.inputfield}
            type="number"
            name="phone"
            id={phoneId}
          />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
