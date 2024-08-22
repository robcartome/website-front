import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href="/" className='flex items-center gap-2 cursor-pointer min-h-10 px-6'>
      <img src="/logo.svg" alt='logo' layout="responsive" width={30} height={30} priority></img>
      <h1 className='text-2xl font-bold text-cyan-600'>AireAyuda</h1>
    </Link>
  )
}
