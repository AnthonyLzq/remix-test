import { useLoaderData } from '@remix-run/react'
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
