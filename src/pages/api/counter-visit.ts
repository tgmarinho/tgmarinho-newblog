import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query.id

  if (!slug) return res.status(404).json('Page not found')

  return res.status(200).json({ total })
}
