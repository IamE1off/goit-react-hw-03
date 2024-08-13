import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from 'nanoid'
import css from "./ContactForm.module.css"

export default function ContactForm({ onAdd }) {
    const initialValues = {
        username: "",
        number: ""
    };

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
        onAdd({
            id: nanoid(),
            name: values.username,
            number: values.number,
        })
    };

    const FeedbackSchema = Yup.object().shape({
        username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("*Required"),
        number: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("*Required"),
    });

    const nameFieldId = useId();
    const numberFieldId = useId();


    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={FeedbackSchema}
            >
                <Form className={css.container}>
                    <div className={css.item}>
                        <label className={css.inputLabel} htmlFor={nameFieldId}>Name</label>
                        <Field className={css.inputItem} type="text" name="username" id={nameFieldId} />
                        <ErrorMessage className={css.error} name="username" component="span" />
                    </div>

                    <div className={css.item}>
                        <label className={css.inputLabel} htmlFor={numberFieldId}>Number</label>
                        <Field className={css.inputItem} type="text" name="number" id={numberFieldId} />
                        <ErrorMessage className={css.error} name="number" component="span" />
                    </div>

                    <button className={css.btn} type="submit">Add contact</button>
                </Form>
            </Formik>
        </div>
    )
}