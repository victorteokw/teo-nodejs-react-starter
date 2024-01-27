import { styled } from '@linaria/react'
import { contentFontStack } from '../styles/theme'

const AppRoot = styled.div`
:global() {
    body {
        margin: 0;
        background-color: #FFFFFF;
        font-family: ${contentFontStack};
    }
}
`

export default AppRoot
