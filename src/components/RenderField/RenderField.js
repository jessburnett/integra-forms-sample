import React, { Fragment } from 'react';
import './RenderField.scss';

export const RenderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  // dynamically create a form row for rendered field
  <div className={label.toString().toLowerCase()}>
    <label>{label}</label>
    <Fragment>
      <input {...input} placeholder={label} type={type}/>
      {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
    </Fragment>
  </div>
);