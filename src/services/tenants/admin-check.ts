import {CONFIG} from '@/config'
import axios from 'axios'

interface AdminCheckProps {
  emailAddress: string
}

const httpClient = axios.create()

export const adminCheck = async (props: AdminCheckProps) => {
  const {emailAddress} = props
  const URL = `${CONFIG.API_ROUTES.USERS_API}${CONFIG.ENDPOINTS.ADMIN_CHECK}/${emailAddress}`

  try {
    const response = await httpClient.request({
      url: URL,
      method: 'GET',
      data: props,
    })

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return true
  } catch (error) {
    throw new Error('Incorrect username or password')
  }
}
