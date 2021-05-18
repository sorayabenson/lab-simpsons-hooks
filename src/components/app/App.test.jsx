import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import userEvent from '@testing-library/user-event';

const server = setupServer(
  rest.get(
    'https://thesimpsonsquoteapi.glitch.me/quotes',
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            character: 'Milhouse Van Houten',
            quote: 'But my mom says I`m cool',
            image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002'
          }
        ]),
      )
    },)
);

describe('App component', () => {
  beforeAll(() => {server.listen()});
  afterAll(() => {server.close()});

  it('renders App', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: 'fetch' });
    screen.getByText('press the button');
    screen.getByText('*do it*');
    screen.getByRole('figure', { name: 'simpsons quote' });

    userEvent.click(button);

    return waitFor(() => {
      screen.getByAltText('Milhouse Van Houten');
      screen.getByText('But my mom says I`m cool');
    });
    
  });
});
