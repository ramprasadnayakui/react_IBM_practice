import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

export default function Rformik() {
  return (
    <div>
      <h4>React Formik</h4>
      <blockquote>
        Formik is a small library that helps you with the 3 most annoying parts
        in handling forms:
        <ol>
          <li>Getting values in and out of form state.</li>
          <li>Validation and error messages</li>
          <li>Handling form submission.</li>
        </ol>
      </blockquote>
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={(values) => alert(values)}
      >
        <Form>
          <Field name="name" type="text" placeholder="Enter name" />
          <Field name="email" type="email" placeholder="Enter mail id" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
