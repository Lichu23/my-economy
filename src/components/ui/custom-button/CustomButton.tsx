import React from 'react'
import { Button } from '../button'
import Link from 'next/link'

type Props = {
    href: string,
    title:string,
    className?:string
}

export default function CustomButton({href, title, className} : Props) {
  return (
    <Button className={className} asChild>
        <Link  href={href}>
        {title}
        </Link>
    </Button>
  )
}
