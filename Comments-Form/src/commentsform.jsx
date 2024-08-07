import { useState } from "react";
import { useFormik } from "formik";
import './Commentsform.css';

export default function Commentsform({ addnewcomment }) {
    const validate = values => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Username cannot be empty';
        } 
        return errors;
    };

    const formik = useFormik({
        initialValues: {
          username: '',
          remarks: '',
          rating: 5,
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          addnewcomment(values);  // Call the addnewcomment function with form values
        },
    });

    return (
        <div className="comments-form-container">
            <h4>Give A Comment!</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    placeholder="username"
                    type="text"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    id="username"
                    name="username"
                />
                {formik.errors.username ? <div>{formik.errors.username}</div> : null}

                <label htmlFor="remarks">Remarks</label>
                <textarea
                    placeholder="Remarks"
                    value={formik.values.remarks}
                    onChange={formik.handleChange}
                    id="remarks"
                    name="remarks"
                ></textarea>

                <label htmlFor="rating">Rating</label>
                <input
                    placeholder="rating"
                    type="number"
                    value={formik.values.rating}
                    min={1}
                    max={5}
                    id="rating"
                    onChange={formik.handleChange}
                    name="rating"
                />

                <button type="submit">Add Comments</button>
            </form>
        </div>
    );
}
