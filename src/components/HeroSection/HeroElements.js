import styled from 'styled-components'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

export const HeroContainer = styled.div`
 background-color: #0d0d0d;
  height: 100vh;
  display: flex;
  align-items: center;
`

export const Icons = styled(FaInstagram)`
color: white;
cursor: pointer;

&:hover {
    background: linear-gradient(
    45deg,
    #405de6,
    #5851db,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
`

export const HomeText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

export const HomeName = styled.div`
  display: flex;
  font-size: 20px;
  z-index: 1;
`

export const PrimaryText = styled.div`
  color: #fff;
  margin-right: 0.3rem;
  font-weight: normal;
`

export const HighlightedText = styled.div`
  color: #c3073f;
`

export const HomeRole = styled.div`
  color: #fff;
  margin: 14px 0 24px;
  z-index: 1;
`

export const RoleTagline = styled.div`
  font-size: 12px;
  margin: 5px 0 0;
`

export const HomeOptions = styled.div`
  display: flex;
`



