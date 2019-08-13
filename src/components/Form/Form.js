import React from 'react';
import './Form.scss';
import { Username } from '../../components/Username/Username';
import { Phone } from '../../components/Phone/Phone';
import { Email } from '../../components/Email/Email';

export const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <Username/>
        <Phone/>
        <Email/>
      </div>
      <div className="flex-container button-row">
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
};
