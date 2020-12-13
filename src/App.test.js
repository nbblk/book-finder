import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


test('renders text', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Enter a title/))
  expect(screen.getByRole('button')).toHaveTextContent('Find');
});

test('not renders a list', () => {
  render(<App />);
  expect(screen.getByRole("list")).toBeEmptyDOMElement();
});

test('renders a loader after clicking a button', async () => {
  render(<App />);
  await userEvent.type(screen.getByRole('textbox'), 'javascript');
  await userEvent.click(screen.getByRole('button'));
  expect(screen.getByTestId('loader')).toBeInTheDocument();
});

test('renders a list when matches', async () => {
  render(<App />);
  await userEvent.type(screen.getByRole('textbox'), 'javascript');
  await userEvent.click(screen.getByRole('button'));
  expect(screen.getByRole('list')).toBeInTheDocument();
});
