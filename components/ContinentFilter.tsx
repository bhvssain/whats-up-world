import styled from "styled-components"

import { ContinentFilterItem } from "./ContinentFilterItem"

const List = styled.ul`
    list-style-type: none;
    margin: 0 calc(50% - 50vw);
    padding: 0;
    display: flex;
    justify-content: center;
    overflow-x: auto;
    overflow-y: hidden;
`

export const ContinentFilter = ({ onContinentSelected, continentSelected, data }) => {
    if (!data) return null;

    return (
        <>
            <p>
                <strong>Select a continent</strong>
            </p>
            <List>
                <ContinentFilterItem
                    onContinentSelected={onContinentSelected}
                    continentSelected={continentSelected}
                    data={data}
                />
            </List>
        </>
    )
}
