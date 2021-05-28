import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import { useRouter } from "next/router"
import styled from "styled-components"

import { MAIN_QUERY } from "../../queries/queries"
import { ContinentFilter } from "../../components/ContinentFilter"
import { ContinentIntro } from "../../components/ContinentIntro"
import { Continent } from "../../components/Continent"

export const Container = styled.div`
    width: 550px;
    margin: 0 auto;
    position: relative;
`

const continentData = [
    {
        "name": "Africa",
        "code": "AF",
    },
    {
        "name": "Antarctica",
        "code": "AN",
    },
    {
        "name": "Asia",
        "code": "AS",
    },
    {
        "name": "Europe",
        "code": "EU",
    },
    {
        "name": "North America",
        "code": "NA",
    },
    {
        "name": "Oceania",
        "code": "OC",
    },
    {
        "name": "South America",
        "code": "SA",
    },
];

const Index = () => {
    const router = useRouter();
    const { continentCode } = router.query;

    const [continentSelected, setContinentSelected] = useState(continentCode);

    const { loading, error, data } = useQuery(MAIN_QUERY, {
        variables: { code: continentSelected },
    });

    const onContinentSelected = (continentID) => {
        setContinentSelected(continentID);
    }

    if (loading) return <Container><h1>Loading</h1></Container>;
    if (error) return <Container><h1>Error</h1></Container>;

    if (!data) return null;

    const continent = data.continents[0];

    return (
        <Container>
            <header>
                <ContinentFilter
                    onContinentSelected={onContinentSelected}
                    continentSelected={continentSelected}
                    data={continentData}
                />
            </header>
            <main>
                <ContinentIntro continent={continent} />
                <Continent continent={continent} />
            </main>
        </Container>
    )
}

export default Index
