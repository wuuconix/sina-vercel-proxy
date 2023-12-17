import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filename = req.query.filename
  console.log(filename)
  const imageBuffer = Buffer.from(await (await fetch(`https://tvax3.sinaimg.cn/large/${filename}`)).arrayBuffer())
  res.setHeader("Content-Type", "image/jpeg")
  res.status(200).send(imageBuffer)
}