import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { CartProvider } from './context/CartContext';
import "../styles/globals.css";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beauty & Skincare',
  description: 'Professional beauty and skincare services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 flex flex-col min-h-screen`}>
        <CartProvider>
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}