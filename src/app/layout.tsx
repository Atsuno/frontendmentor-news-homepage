import '@/styles/globals.css'
import { FC, PropsWithChildren } from 'react'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import fontClass from '@/styles/font'

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" className={fontClass}>
    <body className="flex flex-col items-center font-primary">
      <Header />
      {children}
      <Footer />
    </body>
  </html>
)

export default RootLayout
