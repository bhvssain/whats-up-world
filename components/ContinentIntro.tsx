import { Fragment } from "react";
import styled from "styled-components";

import { IContinent } from "../interfaces/Interfaces";

const Title = styled.h2`
    font-size: 20px;
    margin: 20px 0;
`;

export const ContinentIntro = ({ continent }) => {
    if (!continent) return null;

    const amount = continent.countries.length;
    const { name } = continent;

    return (
        <Fragment>
            <Title>Info about {name}</Title>
            <p>There are {amount} countries in {name}.</p>
        </Fragment>
    )
}
