import React from 'react'
import Link from 'next/link'
import { FaGithub, FaTwitter, FaTrademark } from 'react-icons/fa'
import 'twin.macro'

export default function Navigation({ style, className }) {
  return (
    <nav style={style} className={className}>
      <ul className="flex items-center p-0 text-xl list-none">
        <li className="font-serif font-bold">
          <Link href="/">
            <a className="hover:text-green-600"><FaTrademark /></a>
          </Link>
        </li>
        <li tw="ml-auto" className="mr-4">
          <a
            href="https://github.com/tgmarinho/tgmarinho-newblog"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-600"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/tgmarinho"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-600"
          >
            <FaTwitter />
          </a>
        </li>
        {/* <li>
          <a
            href="https://linkedin.com/in/tgmarinho"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-600"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://youtube.com/tgmarinho"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-600"
          >
            <FaYoutube />
          </a>
        </li> */}
      </ul>
    </nav>
  )
}
