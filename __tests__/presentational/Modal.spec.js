import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Modal from '../../src/app/components/presentational/common/Modal';

beforeEach(() => {
  jest.resetModules();
});

describe('Modal Component', () => {
  it('should render modal default props and then close', () => {
    const props = {
      titleText: 'test modal',
      text: 'this is a modal for testing',
      closeHandler: jest.fn(),
      display: true,
      submitHandler: () => true,
    };
    const { getByText } = render(<Modal {...props} />);
    expect(getByText(/test modal/i)).toBeTruthy();
    fireEvent.click(getByText(/×/i));
    expect(props.closeHandler).toHaveBeenCalledTimes(1);
  });
});
