import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";



function FormTest() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const onSubmit = (value) => {
        console.log(value);

        navigate("/accounts");

        toast.success("Add successful!")
    }

    const testObject = {
        username: Yup.string().required("This field must not be blank.")
            .matches(/^[A-Z]/, "The first symbol is uppercase")
            .matches(/[a-z]{7,100}/, "This field have to get more than 8 symbol"),
        password: Yup.string().required("This field must not be blank.")
            .matches(/[A-Za-z]{8,100}/, ">8")
    }

    return (
        <Formik initialValues={form} onSubmit={onSubmit} validationSchema={Yup.object(testObject)}>
            <Form>
                <label htmlFor="username">UserName</label>
                <Field id="username" type="text" name="username"></Field>
                <ErrorMessage name="username" component="span" className="test"></ErrorMessage><br /><br />

                <label htmlFor="username">Password</label>
                <Field type="text" name="password"></Field>
                <ErrorMessage name="password" component="span" className="test"></ErrorMessage><br /><br />

                <button type="submit">Submit</button>
            </Form>
        </Formik >
    )
}

export default FormTest;