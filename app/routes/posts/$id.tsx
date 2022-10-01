import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

type LoaderData = {
  id: string
}

export const loader: LoaderFunction = async ({ params }) => {
  return json({ id: params.id })
}

const Post = () => {
  const { id } = useLoaderData() as LoaderData

  return <div>Welcome to my first post: {id}</div>
}

export default Post
