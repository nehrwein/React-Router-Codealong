import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AlbumList } from 'pages/AlbumList'
import AlbumDetail from 'pages/AlbumDetail'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <AlbumList />
        </Route>
        <Route path="/albums/:idAlbum" exact>
          <AlbumDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
