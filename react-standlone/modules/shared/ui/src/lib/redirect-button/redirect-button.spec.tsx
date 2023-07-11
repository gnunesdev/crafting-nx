import { render } from '@testing-library/react';

import RedirectButton from './redirect-button';

describe('RedirectButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RedirectButton />);
    expect(baseElement).toBeTruthy();
  });
});
