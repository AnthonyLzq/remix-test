import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { Hidden } from '@mui/material'

import { ContentCards, ContentMenuAreas } from '~/components'
import { getAllAreas } from '~/database'

type LoaderData = {
  areas: Awaited<ReturnType<typeof getAllAreas>>
}

export const loader = async () => {
  return json<LoaderData>({
    areas: await getAllAreas()
  })
}

const Areas = () => {
  const { areas } = useLoaderData() as SerializerNestedArray<LoaderData>

  return (
    <>
      <Hidden smDown>
        <ContentCards areas={areas} />
      </Hidden>
      <Hidden mdUp>
        <ContentMenuAreas areas={areas} />
      </Hidden>
    </>
  )
}

export default Areas
