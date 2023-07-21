'use client'

import {CONFIG} from '@/config'
import {useAuth} from '@/context'
import {useRouter} from 'next/navigation'
import {useEffect} from 'react'

export default function Home() {
  const {state} = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!state.isAuthenticated) {
      router.push(CONFIG.PAGE_ROUTES.LOGIN)
    } else {
      router.push(CONFIG.SITE_ROUTES.START)
    }
  }, [state.isAuthenticated])

  return null
}
