import '@/styles/globals.css'
import { FC, PropsWithChildren } from 'react'
import Footer from '@/app/components/layout/Footer'
import fontClass from '@/styles/font'

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" className={fontClass}>
    <body className="font-primary">
      {children}
      <Footer />
    </body>
  </html>
)

export default RootLayout
