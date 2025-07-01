'use client'
import styled from 'styled-components'

const CardContainerWrapper = styled.div`
    display: grid;
    place-content: center;
    background-color: rgb(${({ theme }) => theme.colors.primary});
`

const ChildrenContainer = styled.div<{ $columns: number }>`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 32px;
    justify-content: center;
    padding: 16px;
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        max-width: ${({ theme }) => theme.windowWidth}px;
        grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
    }
`

const CardContainer = ({
    columns,
    children,
    ...props
}: {
    columns: number
    children: React.ReactNode
}) => {
    return (
        <CardContainerWrapper style={{ ...props }}>
            <ChildrenContainer $columns={columns}>{children}</ChildrenContainer>
        </CardContainerWrapper>
    )
}

export default CardContainer
