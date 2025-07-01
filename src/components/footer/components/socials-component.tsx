'use client'
import { SocialIcon } from 'react-social-icons'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(2, max-content);
    justify-items: center;
    margin: 2rem;
`
const SocialsWrapper = styled.div<{ $number: number }>`
    display: grid;
    grid-template-columns: repeat(${({ $number }) => $number}, max-content);
    grid-gap: 8px;
`

const StyledImg = styled.img`
    height: 4rem;
    margin: 0.5rem;
`

const SocialsComponent = ({
    socialsurl,
    logo,
}: {
    socialsurl: string[]
    logo?: string
}) => {
    return (
        <Wrapper>
            {logo && <StyledImg src={logo} alt="logo" />}
            <SocialsWrapper $number={socialsurl.length}>
                {socialsurl.map((url, index) => (
                    <SocialIcon url={url} key={index} />
                ))}
            </SocialsWrapper>
        </Wrapper>
    )
}

export default SocialsComponent
