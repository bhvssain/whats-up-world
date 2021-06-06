import styled from "styled-components"

import { FilterItem } from "./Item"

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
`

export const Filter = ({ onContinentSelected, continentSelected, data }) => {
    if (!data) return null;

    return (
        <List>
            <FilterItem
                onContinentSelected={onContinentSelected}
                continentSelected={continentSelected}
                data={data}
            />
        </List>
    )
}
