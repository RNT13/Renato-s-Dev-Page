import { lighten } from 'polished'
import { styled } from 'styled-components'
import { Colors } from '../../styles/globalStyle'

export const FooterContainer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${lighten(0.2, Colors.bgColor)};
`
