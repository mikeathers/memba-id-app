'use client'
import React from 'react'
import {Container, Content, FormContainer, TitleContainer} from './center-box.styles'
import {colorTokens} from '@/styles'
import {Text} from '../text'

interface CenterBoxProps {
  children: React.ReactNode
}
export const CenterBox: React.FC<CenterBoxProps> = (props) => {
  const {children} = props
  return (
    <Container>
      <Content>
        <TitleContainer>
          <Text type={'h1'} color={colorTokens.blues800}>
            Memba
          </Text>
        </TitleContainer>
        <FormContainer>{children}</FormContainer>
      </Content>
    </Container>
  )
}
