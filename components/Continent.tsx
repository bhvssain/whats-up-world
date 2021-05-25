import React from "react"
import Head from "next/head"
import styled from "styled-components"

import { Country } from '../components/Country'

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`

export const Continent = ({ continent }) => {
    return (
        <>
            <Head>
                <title>What's up {continent.name}</title>
            </Head>
            <List>
                <Country countries={continent.countries} continentCode={continent.code} />
            </List>
        </>
    )
}
