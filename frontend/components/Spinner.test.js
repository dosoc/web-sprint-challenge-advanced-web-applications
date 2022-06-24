// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import { render, screen } from '@testing-library/react'
import Spinner from './Spinner'

test('sanity', () => {
  expect(true).toBe(true)
})

test('renders without error', ()=> {
  render(<Spinner on={true}/>)
})

test('correct text appears on the screen', ()=> {
  render(<Spinner on={true}/>)
  const text = screen.queryByText(/please wait/i);
  expect(text).toBeTruthy()
})