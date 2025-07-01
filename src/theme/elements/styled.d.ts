import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string
            secondary: string
            hoverBackground: string
            button: string
            buttonText: string
            buttonHover: string
            buttonHoverText: string
            text: string
            secondaryText: string
        }
        windowWidth: number
        breakpoints: { desktop: number; tablet: number; mobile: number }
    }
}
