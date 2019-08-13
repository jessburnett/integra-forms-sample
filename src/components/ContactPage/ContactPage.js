import React from 'react';
import ContactForm from '../../containers/ContactForm';

// often the file structure may have a folder labeled
// Pages on the same level of components
// putting it here as it is the only page, after all..
// it is a component
export class ContactPage extends React.Component {
  submit = values => {
    console.log(values)
  };

  render() {
    return <ContactForm onSubmit={this.submit}/>
  }
}
