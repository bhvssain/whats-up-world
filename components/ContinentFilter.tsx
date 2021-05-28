import styled from "styled-components"

import { ContinentFilterItem } from "./ContinentFilterItem"

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
`

export const ContinentFilter = ({ onContinentSelected, continentSelected, data }) => {
    if (!data) return null;

    return (
        <List>
            <ContinentFilterItem
                onContinentSelected={onContinentSelected}
                continentSelected={continentSelected}
                data={data}
            />
        </List>
    )
}
