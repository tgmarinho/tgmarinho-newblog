import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import 'twin.macro'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import config from 'config'
import { PixQrCode } from './pix/PixQrCode'

type PixProps = {
  className?: string
  title?: string
  description?: string
}

export default function Pix({ className, title, description }: PixProps) {
  const [isCopiedQrCode, setIsCopiedQrCode] = React.useState(false)
  const [isCopiedKey, setIsCopiedKey] = React.useState(false)

  const handleClick = async (e) => {
    if (e.target.name === 'codeQrCode') {
      setIsCopiedQrCode(true)
      setTimeout(() => {
        setIsCopiedQrCode(false)
      }, 2000)
    } else {
      setIsCopiedKey(true)
      setTimeout(() => {
        setIsCopiedKey(false)
      }, 2000)
    }
  }

  return (
    <div
      className={clsx(
        'flex flex-col p-6 md:p-8 space-y-4 bg-gray-100 border-2 rounded-lg shadow-lg',
        className
      )}
    >
      <h1 className="text-2xl font-semibold">{title ? title : 'Pix-me'}</h1>
      <p>
        {description
          ? description
          : 'If you like my content, consider sending me a Pix!'}
      </p>
      <div className="flex flex-row justify-center">
        <PixQrCode />
      </div>
      <div className="flex md:flex-row md:justify-center gap-2 sm:flex-col items-center">
        <CopyToClipboard text={config.emv}>
          <motion.button
            name="codeQrCode"
            onClick={handleClick}
            className="w-1/2 h-10 text-sm font-semibold text-white bg-green-600 shadow-lg rounded-xl"
            whileTap={{ scale: 0.95 }}
          >
            {!isCopiedQrCode ? 'Copy QR Code' : 'Copied, Thanks! 🥂'}
          </motion.button>
        </CopyToClipboard>

        <CopyToClipboard text={config.chaveAleatoria}>
          <motion.button
            name="chaveAleatoria"
            onClick={handleClick}
            className="w-1/2 h-10 text-sm font-semibold text-white bg-violet-600 shadow-lg rounded-xl"
            whileTap={{ scale: 0.95 }}
          >
            {!isCopiedKey ? `Copy Chave Aleatória` : 'Copied, Thanks! 🍾'}
          </motion.button>
        </CopyToClipboard>
      </div>
    </div>
  )
}
