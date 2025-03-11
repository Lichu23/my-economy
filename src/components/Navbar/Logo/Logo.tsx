import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <Image width={70} height={50} alt='Logo' src="/logo.png"/>
  )
}
