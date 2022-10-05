import { useLoaderData } from '@remix-run/react'
import type { MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'

import { getAllMembers } from '~/database'
import { makeStyles } from '~/utils'
import { ListOfMembers } from '~/components/members'

type LoaderData = {
  members: Awaited<ReturnType<typeof getAllMembers>>
}

const useStyles = makeStyles()(() => ({
  membersContent: {
    display: 'block',
    height: '100%'
  }
}))

export const meta: MetaFunction = () => ({
  title: 'ACECOM - Miembros',
  description: 'Miembros de las diferentes áreas de ACECOM'
})

export const loader = async () => {
  return json<LoaderData>({
    members: await getAllMembers()
  })
}

const Members = () => {
  const { classes } = useStyles()
  const { members } = useLoaderData() as SerializerNestedArray<LoaderData>

  return (
    <div className={classes.membersContent}>
      <ListOfMembers members={members} />
    </div>
  )
}

export default Members
