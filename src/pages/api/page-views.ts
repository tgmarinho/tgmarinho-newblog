import { NextApiRequest, NextApiResponse } from 'next'
import faunadb from 'faunadb'

const COUNTER_VISIT_INDEX = 'page-view-idx'
const COUNTER_VISIT_COLLECTION = 'page-views'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const db = faunadb.query
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY,
  })

  const { slug } = req.query

  if (!slug) {
    return res.status(400).json({
      message: 'Article slug not provided',
    })
  }

  const doesDocExist = await client.query(
    db.Exists(db.Match(db.Index(COUNTER_VISIT_INDEX), slug))
  )

  if (!doesDocExist) {
    await client.query(
      db.Create(db.Collection(COUNTER_VISIT_COLLECTION), {
        data: {
          slug,
          counter: 1,
        },
      })
    )
  }

  const doc = await client.query(
    db.Get(db.Match(db.Index(COUNTER_VISIT_INDEX), slug))
  )

  if (req.method === 'PUT') {
    const result = await client.query(
      db.Update(doc.ref, {
        data: { ...doc.data, counter: doc.data.counter + 1 },
      })
    )

    return res
      .status(200)
      .json({ slug: result.data.slug, counter: result.data.counter })
  }

  if (req.method === 'GET') {
    // const doc = await client.query(
    //   db.Get(db.Collection(COUNTER_VISIT_COLLECTION, String(slug)))
    // )

    // const doc = await client.query(
    //   db.Get(db.Ref(db.Collection(COUNTER_VISIT_COLLECTION), { slug }))
    // )

    const result = await client.query(
      db.Get(db.Match(db.Index(COUNTER_VISIT_INDEX), slug))
    )

    console.log('deu certo')
    console.log(result.data.counter)

    return res.status(200).json({ counter: result.data.counter })
  }
}
