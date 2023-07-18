import './globals.css'

import {Poppins} from 'next/font/google'
import {App} from '@/app/app'
import StyledComponentsRegistry from '@/app/registry'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata = {
  title: 'Memba | Memberships done right.',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: JSX.Element}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <App>{children}</App>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}