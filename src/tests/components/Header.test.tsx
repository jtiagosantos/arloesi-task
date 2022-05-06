import { Header } from '@/components/Header/Header';
import { render } from '@testing-library/react';

describe('Header component tests', () => {
  it('should be able to return correctly', () => {
    const { getByRole } = render(<Header />);

    const logo = getByRole('img', { name: /logo with title arloesi task/i });

    expect(logo).toBeInTheDocument();
  })
})