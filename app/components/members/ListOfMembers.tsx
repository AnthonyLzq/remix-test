import type { FC } from 'react'
import type { Theme } from '@mui/material'
import { Grid } from '@mui/material'

import { MemberCard } from './MemberCard'
import { makeStyles } from '~/utils'
import type { Member, Status } from '@prisma/client'

const useStyles = makeStyles()((theme: Theme) => ({
  wrapper: {
    backgroundColor: '#D9D9D9',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '50px'
  },
  content: {
    width: '1100px',
    [theme.breakpoints.down('lg')]: {
      width: '800px'
    },
    [theme.breakpoints.down('md')]: {
      width: '640px'
    },
    [theme.breakpoints.down('smd')]: {
      width: '90%'
    }
  },
  title: {
    position: 'relative',
    zIndex: 100,
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    fontSize: '60px',
    color: '#222222',
    padding: '100px 0 30px 0',
    borderBottom: '5px solid #222222',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10vw'
    }
  }
}))

type MemberWithStatus = SerializerArray<(Member & { Status: Status })[]>

type ListOfMembersProps = {
  members?: MemberWithStatus
}

const ListOfMembers: FC<ListOfMembersProps> = props => {
  const { members } = props
  const regularMembers: MemberWithStatus = []
  const boardOfDirectors = (members || []).filter(member => {
    member.Status.name === 'Regular' && regularMembers.push(member)

    return member.Status.name === 'Junta Directiva'
  })
  const { classes } = useStyles()

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.title}>Junta Directiva</div>
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          justifyContent='center'
        >
          {boardOfDirectors.map(
            ({ id, name, displayName, photo, git, linkedin }) => (
              <Grid key={id} item xl={4} lg={4} md={6} sm={6} xs={12}>
                <MemberCard
                  name={displayName || name}
                  photo={photo}
                  git={git ?? ''}
                  linkedin={linkedin}
                />
              </Grid>
            )
          )}
        </Grid>
        <div className={classes.title}>Miembros</div>
        <Grid container spacing={2} justifyContent='center'>
          {regularMembers.map(
            ({ id, name, displayName, photo, git, linkedin }) => (
              <Grid key={id} item xl={4} lg={4} md={6} sm={6} xs={12}>
                <MemberCard
                  name={displayName || name}
                  photo={photo}
                  git={git ?? ''}
                  linkedin={linkedin}
                />
              </Grid>
            )
          )}
        </Grid>
      </div>
    </div>
  )
}

export { ListOfMembers }
