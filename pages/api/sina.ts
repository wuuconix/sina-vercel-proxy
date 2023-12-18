import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { path, filename } = req.query
  console.log(path)
  console.log(filename)
  const imageBuffer = Buffer.from(await (await fetch(`https://tvax3.sinaimg.cn/${path}/${filename}`)).arrayBuffer())
  res.setHeader("Content-Type", "image/jpeg")
  res.status(200).send(imageBuffer)
}

/* 取消图片大小限制 */
export const config = {
  api: {
    responseLimit: false,
  }
}