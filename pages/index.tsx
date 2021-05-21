import React, { Fragment, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

import { MAIN_QUERY } from "../queries/queries";
import { ContinentFilter } from '../components/ContinentFilter';
import { ContinentIntro } from '../components/ContinentIntro';
import { Continent } from "../components/Continent";

const Header = styled.header`
    width: 550px;
    margin: 0 auto;
    position: relative;
`;

const Container = styled(Header)`
    width: 550px;
    margin: 0 auto;
    position: relative;
`;

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
    const [continentSelected, setContinentSelected] = useState("EU");

    const { loading, error, data } = useQuery(MAIN_QUERY, {
        variables: { code: continentSelected },
    });

    const onContinentSelected = (e: { preventDefault: () => void; }, continentID: React.SetStateAction<string>) => {
        e.preventDefault();
        setContinentSelected(continentID);
    }

    if (loading) return <Container><h1>Loading</h1></Container>;
    if (error) return <Container><h1>Error</h1></Container>;

    if (!data) return null;

    const continent = data.continents[0];

    return (
        <Fragment>
            <Header>
                <ContinentFilter
                    onContinentSelected={onContinentSelected}
                    continentSelected={continentSelected}
                    data={continentData}
                />
            </Header>
            <Container>
                <main>
                    <ContinentIntro continent={continent} />
                    <Continent continent={continent} />
                </main>
            </Container>
        </Fragment>
    )
}

export default Index;