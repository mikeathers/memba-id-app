/* eslint-disable */
import {isAxiosErrorWithMessage} from '../type-guarding'

export const getErrorMessage = (data: any): string => {
  if (typeof data === 'string') return data
  else if (isAxiosErrorWithMessage(data)) {
    return data.message
  } else return ''
}
