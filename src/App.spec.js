/* global cy */
import * as React from 'react'
import { mount } from '@cypress/react'
import App from './App'
import * as anModule from './anModule'

it('renders total is 10', () => {
  mount(<App />)
  cy.contains(/total is 10/i)
})

it('renders total is mocked value', () => {
  cy.stub(anModule, 'calculate').returns('total is 25')
  mount(<App />)
  cy.contains(/total is 25/i)
})