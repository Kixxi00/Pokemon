import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { ToastContainer } from 'react-toastify'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Pokedex',
  description: 'Pokedex Projekt'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='min-h-screen w-screen overflow-x-hidden bg-background text-accent dark:text-primary flex flex-col items-center'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <main className='w-full h-full'>{children}</main>
          <ToastContainer
            position='bottom-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
