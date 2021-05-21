import styled from "styled-components";

import { IContinent } from '../interfaces/Interfaces';
import { ContinentFilterItem } from "./ContinentFilterItem";

interface IProps {
    onContinentSelected: () => void,
    continentSelected: string,
    data: IContinent,
}

const Container = styled.div`
    margin: 20px 0 40px;
`;

const List = styled.ul`
    list-style-type: none;
    margin: 0 calc(50% - 50vw);
    padding: 0;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
`;

export const ContinentFilter = ({ onContinentSelected, continentSelected, data }) => {
    if (!data) return null;

    return (
        <Container>
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
        </Container>
    )
}
