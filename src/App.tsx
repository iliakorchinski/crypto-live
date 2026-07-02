import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { I18nProvider } from '@/app/providers/I18nProvider'
import { router } from '@/app/router/routes'

export const App = () => {
  return (
    <I18nProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </I18nProvider>
  )
}
