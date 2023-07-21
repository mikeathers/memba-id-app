'use client'
import styled from 'styled-components'

import {colors} from '@/styles'

export const Layout = styled.div`
  position: relative;
  background-color: ${colors.neutrals200};
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
