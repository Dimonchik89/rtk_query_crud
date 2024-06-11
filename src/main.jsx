import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PostPage from './pages/PostPage.jsx'
import UpdatePost from './pages/UpdatePost.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='posts/:id' element={<PostPage/>}/>
          <Route path='posts/update/:id' element={<UpdatePost/>}/>
        </Routes>
      </BrowserRouter>
      
    </Provider>
  </React.StrictMode>,
)
