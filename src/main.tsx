import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen.ts'

const router = createRouter({routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/*ルーティングに Tanstack Router を使用*/}
    <RouterProvider router={router} />
  </StrictMode>,
)
