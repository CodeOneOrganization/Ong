import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LocomotiveScrollProvider from "./contexts/LocomotiveScrollProvider/LocomotiveScrollProvider"

import SceneCanvasProvider from './contexts/SceneCanvasProvider/SceneCanvasProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocomotiveScrollProvider>
      <SceneCanvasProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}></Route>
          </Routes>
        </BrowserRouter>
      </SceneCanvasProvider>
    </LocomotiveScrollProvider>
    {/* <App /> */}
  </React.StrictMode >,
)
