import React from 'react';
import { Field } from "redux-form";
import { RenderField } from "../RenderField/RenderField";

export function Phone() {
  return <Field
    name="phone"
    type="phone"
    component={RenderField}
    label="Phone number"
  />;
}
