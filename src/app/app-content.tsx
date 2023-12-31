import React, {useEffect} from 'react'
import {Container} from './app.styles'
import {useAuth} from '@/context'
import {useSafeAsync} from '@/hooks'
import {CONFIG} from '@/config'
import {useRouter} from 'next/navigation'
import {Loading} from '@/components'

interface AppContentProps {
  children: React.ReactNode
}

export const AppContent: React.FC<AppContentProps> = (props) => {
  const {children} = props
  const {refreshUserSession, state} = useAuth()
  const {run, isLoading, isSuccess} = useSafeAsync()
  const router = useRouter()

  const runRefreshUserSession = async () => {
    await run(refreshUserSession())
  }

  useEffect(() => {
    if (!state.isAuthenticating) {
      if (!state.isAuthenticated) {
        router.push(CONFIG.PAGE_ROUTES.LOGIN)
      } else {
        router.push(CONFIG.SITE_ROUTES.START)
      }
    }
  }, [state.isAuthenticated])

  useEffect(() => {
    runRefreshUserSession()
  }, [])

  if (state.isAuthenticating || isLoading) return <Loading />

  if (isSuccess) return <Container>{children}</Container>

  return null
}
