import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'

import { getAllAreas } from '~/database'

type LoaderData = {
  areas: Awaited<ReturnType<typeof getAllAreas>>
}

export const loader = async () => {
  return json<LoaderData>({
    areas: await getAllAreas()
  })
}

const Members = () => {
  const { areas } = useLoaderData() as SerializerNestedArray<LoaderData>

  return (
    <ol>
      {areas.map(area => (
        <li key={area.id}>
          <h1>{area.name}</h1>
          <p>{area.abstract}</p>
        </li>
      ))}
    </ol>
  )
}

export default Members
