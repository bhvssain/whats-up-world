import React from "react";
import styled from "styled-components";

import { IContinent } from "../interfaces/Interfaces";
import { Country } from './Country';


const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`

export const Continent = ({ continent }) => {
    if (!continent) return null;

    return (
        <List>
            <Country countries={continent.countries} />
        </List>
    )
}
