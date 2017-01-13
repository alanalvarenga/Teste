import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import SearchResult from './components/SearchResult'

export default (
  <Route path='/' component={SearchResult}>
  <IndexRoute component={SearchResult} />
  </Route>
)
