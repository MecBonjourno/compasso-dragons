import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import CreateDragon from '../pages/CreateDragon'


it(`should increment by button click`, () => {
  const getByTestId = render(<CreateDragon />)
})

export {}