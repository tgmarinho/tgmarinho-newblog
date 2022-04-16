import React from 'react'
import QRCode from 'qrcode.react'
import config from 'config'
// import Image from 'next/image'

// Good
export const PixQrCode = () => {
  return <QRCode value={config.emv} />
}

// Bad
// export const PixImg = () => (
//   <Image
//     quality={100}
//     width={200}
//     height={200}
//     src="/pix/qrcode.png"
//     alt="QR Code Pix Thiago Marinho - tgmarinho.com"
//   />
// )
