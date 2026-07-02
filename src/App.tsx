import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { router } from '@/app/router/routes'

export const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
