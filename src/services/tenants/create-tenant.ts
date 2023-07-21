import axios, {AxiosResponse} from 'axios'
import {CONFIG} from '@/config'

const httpClient = axios.create()

export const createTenantAccount = async (
  props: NewUserDetails,
): Promise<AxiosResponse<RegisterTenantResponse | BadResponse>> => {
  const URL = `${CONFIG.API_ROUTES.USERS_API}${CONFIG.ENDPOINTS.CREATE_TENANT}`

  return await httpClient.request<RegisterTenantResponse | BadResponse>({
    url: URL,
    method: 'POST',
    data: props,
  })
}
