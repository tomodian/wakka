import { GetServerSideProps } from 'next'
import { User } from '@prisma/client'

import Detail from '../../components/users/Detail'
import user from '../../models/user'

type Props = {
  user: User
}

const Page = (props: Props) => {
  return <Detail user={props.user} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      user: await user.find(+context.params!.id!)
    }
  }
}

export default Page
