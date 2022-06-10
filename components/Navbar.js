/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'

export default function NavbarTop() {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row md:flex-row items-center">
      
      <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <Link href='/'>
          <a className="mr-5 hover:text-gray-500">Home</a>
        </Link>
        <Link href='/about'>
          <a className="mr-5 hover:text-gray-500">About</a>
        </Link>
        <Link href='/store'>
          <a className="mr-5 hover:text-gray-500">Store</a>
        </Link>
      </nav>
      
      <Link href='/'>
        <a className="flex order-first lg:order-none lg:w-1/5 items-center lg:items-center lg:justify-center mb-4 md:mb-0">
          <img src='/logo.png' width={50} height={50} alt='Ohi' />
        </a>
      </Link>        
      <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <Link href='/login'>
          <a className="inline-flex items-center hover:bg-green-600 border-0 py-2 px-3 rounded text-base mt-4 md:mt-0">
            Sign up
          </a>
        </Link>
        <Link href='/login'>
          <a className="inline-flex items-center bg-green-400 hover:bg-green-600 border-0 py-2 px-3 rounded text-base mt-4 md:mt-0">
            Login
          </a>
        </Link>
          
        </div>
      </div>

  )
}

 