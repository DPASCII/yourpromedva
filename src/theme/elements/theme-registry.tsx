'use client'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import defaultTheme from './theme'

const GlobalCSS = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui, sans-serif;
  }

h1, h2, h3, h4, h5, h6, p, li, ul {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height:1;
}
  a {
    text-decoration: none;
    color: inherit;
  }`

export default function ThemeRegistry({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalCSS />
            {children}
        </ThemeProvider>
    )
}
