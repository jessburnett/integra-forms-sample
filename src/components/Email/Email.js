import React from 'react'
import { Field } from "redux-form";
import { RenderField } from "../RenderField/RenderField";

export function Email() {
  return <Field
    name="email"
    type="email"
    component={RenderField}
    label="Email"
  />;
}
