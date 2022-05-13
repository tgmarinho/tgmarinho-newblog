import React from 'react'
import Head from 'next/head'
import urljoin from 'url-join'

export interface SEOProps {
  title?: string
  path?: string
  image?: string
  description?: string
}

const config = {
  siteTitle: `Thiago Marinho | Blog about code and live.`,
  siteDescription: `Read the best blog post ever!`,
  siteUrl: `https://tgmarinho.com`,
}

const SEO: React.FC<SEOProps> = ({ title, path, image, description }) => {
  const { siteTitle, siteDescription, siteUrl } = config

  const headTitle = title || siteTitle
  const auxDescription = description || siteDescription
  const url = urljoin(siteUrl, path || ``)

  const thumb = urljoin(siteUrl, image || `/og-image/tgmarinho_homepage.png`)

  return (
    <Head>
      {/* Base */}
      <meta charSet="UTF-8" />
      <title>{headTitle}</title>
      <meta name="description" content={auxDescription} />
      <meta name="image" content={thumb} />

      {/* Font */}
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#F0F2F4" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <link rel="icon" href="/tgmarinho.jpg" />
      <link
        rel="canonical"
        href={url}
        data-baseprotocol="https:"
        data-basehost="tgmarinho.com"
      />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link rel="manifest" href="/manifest.webmanifest" />

      {/* Pinterest */}
      {/* <meta name="p:domain_verify" content="c9fbfe63cbb851b07f811d420419fe94" /> */}

      {/* Microsoft */}
      <meta name="msapplication-TileColor" content="#F0F2F4" />
      {/* <meta name="msvalidate.01" content="28BC5C0006F3D3C447367698643C3C9B" /> */}

      {/* Google */}
      {/* <meta
        name="google-site-verification"
        content="DNHU_FmWzR6Hrb3nSCqhhwlXAoQUNQ4KldwZWsZR990"
      /> */}
      <meta name="google" content="translate" />

      {/* Open Graph */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={headTitle} />
      <meta property="og:description" content={auxDescription} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={headTitle} />
      <meta property="og:image" content={thumb} />
      <meta property="og:image" itemProp="image" content={thumb} />
      <meta property="og:image:secure_url" content={thumb} />
      <meta property="og:image:alt" content="Thiago Marinho" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={headTitle} />
      <meta name="twitter:site" content="@tgmarinho" />
      <meta name="twitter:creator" content="@tgmarinho" />
      <meta name="twitter:image" content={thumb} />
      <meta name="twitter:image:src" content={thumb} />
      <meta name="twitter:image:alt" content="Boost yourself" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />

      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#F0F2F4" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#F0F2F4" />
    </Head>
  )
}

export default SEO
