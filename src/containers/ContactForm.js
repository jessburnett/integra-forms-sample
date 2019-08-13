import { reduxForm } from 'redux-form'

import { Form } from '../components/Form/Form';

const createReduxForm = reduxForm({ form: 'contact' });

export default createReduxForm(Form);
