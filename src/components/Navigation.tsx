import Link from 'next/link'
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTrademark,
  FaSearch,
} from 'react-icons/fa'
import 'twin.macro'

export default function Navigation({ style, className }) {
  return (
    <nav style={style} className={className}>
      <ul className="flex justify-self-center p-0 text-xl list-none">
        <li tw="ml-4" className="font-serif font-bold mr-4">
          <Link href="/me">
            <a className="hover:text-blue-500">
              <FaTrademark />
            </a>
          </Link>
        </li>
        {/*<li tw="ml-4" className="mr-4">*/}
        {/*  <Link href="/search">*/}
        {/*    <a className="hover:text-blue-500">*/}
        {/*      <FaSearch />*/}
        {/*    </a>*/}
        {/*  </Link>*/}
        {/*</li>*/}
        <li className="mr-4">
          <a
            href="https://github.com/tgmarinho"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            <FaGithub />
          </a>
        </li>
        <li className="mr-4">
          <a
            href="https://twitter.com/tgmarinho"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            <FaTwitter />
          </a>
        </li>
        <li className="mr-4">
          <a
            href="https://linkedin.com/in/tgmarinho"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="mr-4">
          <a
            href="https://youtube.com/tgmarinho"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            <FaYoutube />
          </a>
        </li>
      </ul>
    </nav>
  )
}
