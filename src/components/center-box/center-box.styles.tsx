import styled from 'styled-components'
import {colors, spacing} from '@/styles'

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: rgb(250, 251, 252);
  background-image: url(https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.456/static/media/default_left.e74de3ec.svg),
    url(https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.456/static/media/default_right.6ece9751.svg);
  background-repeat: no-repeat, no-repeat;
  background-attachment: fixed, fixed;
  background-size: 368px, 368px;
  background-position: left bottom, right bottom;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  width: 400px;
  padding: 32px 40px;
  background: ${colors.neutrals000};
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  box-sizing: border-box;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid ${colors.greys200};
  padding: ${spacing.space2x} 0;
  margin-bottom: ${spacing.space4x};
`

export const FormContainer = styled.div`
  width: 100%;
`