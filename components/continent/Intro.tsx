import { Fragment } from "react"
import styled from "styled-components"

const Title = styled.h2`
    font-size: 20px;
    margin: 20px 0;
`

export const ContinentIntro = ({ continent }) => {
    if (!continent) return null;

    const { name, countries } = continent;
    const amount = countries.length;

    return (
        <Fragment>
            <Title>Info about {name}</Title>
            <p>There are {amount} countries in {name}.</p>
        </Fragment>
    )
}
