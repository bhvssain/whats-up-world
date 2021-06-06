import Link from "next/link"
import styled from "styled-components"

import { renderContinentMapImage } from "../../helpers"

const ListItem = styled.li`
    text-align: center;
    margin-right: 10px;
    margin-bottom: 10px;

    &:last-of-type {
        margin-right: 0;
    }
`

const StyledLink = styled("a")<{isActive: boolean}>`
    font-size: 14px;
    color: ${props => props.isActive ? "blue" : "black"};
    display: inline-block;
    border: 4px solid ${props => props.isActive ? "blue" : "#f4f4f4"};
    border-radius: 5px;
    padding: 10px 5px;
    text-decoration: none;
    transition: all 325ms;

    &:hover {
        border-color: blue;
        color: blue;
    }

    img {
        display: block;
        margin-bottom: 15px;
    }
`;

export const FilterItem = ({ onContinentSelected, continentSelected, data }) => {
    if (!data) return null;

    return data.map(({ code, name }) => {
        return (
            <ListItem key={code}>
                <Link passHref href={code}>
                    <StyledLink isActive={code === continentSelected} onClick={() => onContinentSelected(code)}>
                        <img alt={`Map of ${name}`} src={renderContinentMapImage(code)} width="100px" />
                        {name}
                    </StyledLink>
                </Link>
            </ListItem>
        )
    })
}
