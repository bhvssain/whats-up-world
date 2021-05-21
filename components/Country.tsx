import styled from "styled-components";

import { ICountry } from '../interfaces/Interfaces';

const ListItem = styled.li`
    background-color: #fefefe;
    margin: 0 0 30px;
    padding: 10px;

    &:nth-child(even) {
        background-color: #fffcf6;
    }
`

const Title = styled.h3`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 0 0 5px;
    margin: 0 0 10px;
    font-size: 18px;
`

const Link = styled.a.attrs(({ href }) => ({
    rel: "noopener noreferrer",
    target: "_blank",
    href: `https://en.wikipedia.org/wiki/${href}`,
}))`
    color: blue;
    text-decoration: none;
`;

const NativeCountryText = styled.span`
    font-size: 12px;
`;

const InfoRow = styled.div`
    margin: 0 0 8px;
`;

export const Country = ({ countries }): ICountry => {
    if (!countries) return null;

    return countries.map(({ name, emoji, native, capital, phone, currency }) => {
        return (
            <ListItem key={name}>
                <Title>
                    {emoji} <Link href={name}>{name}</Link> <NativeCountryText>[{native}]</NativeCountryText>
                </Title>
                <InfoRow>Capital: {capital}</InfoRow>
                <InfoRow>Phone: {phone}</InfoRow>
                <InfoRow>Currency: {currency}</InfoRow>
            </ListItem>
        )
    })
}
