import React from 'react'
import 'babel-polyfill'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)