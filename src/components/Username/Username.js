import React from 'react'
import { Field } from "redux-form";
import { RenderField } from "../RenderField/RenderField";

export function Username() {
  return <Field
    name="username"
    type="text"
    component={RenderField}
    label="Username"
  />;
}
