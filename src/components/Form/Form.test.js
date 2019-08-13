import React from 'react'
import { cleanup, render } from 'react-testing-library'

import { Form } from './Form';
import * as Username from '../Username/Username';
import * as  Phone from '../Phone/Phone';

describe('Component => RenderField', () => {
  beforeEach(() => {
    jest.spyOn(Username, 'Username').mockImplementation(() => (<span>Username</span>));
    jest.spyOn(Phone, 'Phone').mockImplementation(() => (<span>Phone</span>));
  })
  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
  });
  it('should match snapshot', () => {
    const props = {
      handleSubmit: jest.fn(),
      pristine: true,
      reset: jest.fn(),
      submitting: false
    };

    const { container } = render(<Form {...props}/>);

    expect(container.firstChild).toMatchSnapshot();
  })
});


