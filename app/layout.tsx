import Link from 'next/link'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className='text-center bg-slate-800 p-8 my-6 rounded-md'>
        <Link href="/">
          <h1 className='text-2xl text-white font-bold'>Adem's Blog</h1>
        </Link>
        <p className='text-slate-300'>✌️ Welcome to my blog. 🖥️</p>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div className='border-t border-slate-400 text-slate-400 mt-12 py-6 text-center'>
        <h3>Developed by Adem</h3>
      </div>
    </footer>
  )


  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <div className='mx-auto max-w-2xl px-6'>
          {header}
          {children}
          {footer}
        </div>

      </body>
    </html>
  )
}
