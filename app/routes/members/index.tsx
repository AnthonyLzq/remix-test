import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'

import { getAllMembers } from '~/database'

type LoaderData = {
  members: Awaited<ReturnType<typeof getAllMembers>>
}

export const loader = async () => {
  return json<LoaderData>({
    members: await getAllMembers()
  })
}

const Members = () => {
  const { members } = useLoaderData() as SerializerNestedArray<LoaderData>

  return (
    <ol>
      {members.map(member => (
        <li key={member.id}>
          <h1>{member.displayName ?? member.name}</h1>
        </li>
      ))}
    </ol>
  )
}

export default Members
