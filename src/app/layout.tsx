import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '../lib/registry'
import { ThemeRegistry } from '../theme'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SocialsComponent from '@/components/footer/components/socials-component'

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Your ProMed VA',
    description: 'Your ProMed VA',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} antialiased`}>
                <StyledComponentsRegistry>
                    <ThemeRegistry>
                        <Header
                            logo="/assets/Logo.png"
                            height={80}
                            pages={[{ item: 'Home', link: '/' }]}
                        />
                        {children}
                        <Footer
                            socialsComponent={
                                <SocialsComponent
                                    logo="/assets/altLogo.png"
                                    socialsurl={[
                                        'https://www.instagram.com/yourpromedva',
                                    ]}
                                />
                            }
                            contents={[
                                {
                                    title: 'You can contact me below:',
                                    itemlist: [
                                        {
                                            item: 'Phone:',
                                            subitem: '+63927 179 0701',
                                            link: 'tel:+639271790701',
                                        },
                                        {
                                            item: 'Email:',
                                            subitem: 'yourpromedva@gmail.com',
                                            link: 'mailto:yourpromedva@gmail.com',
                                        },
                                    ],
                                },
                            ]}
                            smallLogo="/assets/altSmallLogo.png"
                            companyName="YourProMedVA"
                        />
                    </ThemeRegistry>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
