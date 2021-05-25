import Link from "next/link"
import styled from "styled-components"

const ListItem = styled.li`
    background-color: #fefefe;
    margin: 0 0 5px;
    padding: 5px;

    &:nth-child(even) {
        background-color: #eefdff;
    }
`

const Title = styled.h3`
    font-size: 18px;
    margin: 10px 0;
`

const SmallText = styled.span`
    font-size: 13px;
    font-weight: normal;
`

export const Country = ({ countries, continentCode }) => {
    if (!countries) return null;

    return countries.map(({ code, name, emoji, native }, index) => {
        return (
            <ListItem key={code}>
                <Title>
                    <SmallText>{index + 1}.</SmallText>{' '}
                    <Link href={`${continentCode}/${code}`}>{name}</Link>{' '}
                    <SmallText>[{emoji}] [{native}]</SmallText>
                </Title>
            </ListItem>
        )
    })
}
