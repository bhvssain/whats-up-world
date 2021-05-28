import { useState, useEffect } from "react"
import styled from "styled-components"

import { InfoList, InfoItem } from "../pages/[continentCode]/[code]"

const Container = styled.div`
    margin: 0 0 50px;
`

export const CountryAdditionalInfo = ({ code }) => {
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [additionalInfo, setAdditionalInfo] = useState(undefined);

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setLoading(false);
                    setAdditionalInfo(result);
                },
                (error) => {
                    setLoading(false);
                    setError(error);
                }
            )
    }, []);

    if (!additionalInfo) return null;

    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>Error</h1>;

    const { area, population } = additionalInfo;

    return (
        <Container>
            <h2>Additional information</h2>
            <InfoList>
                <InfoItem>
                    Area in km<sup>2</sup>: {area}
                </InfoItem>
                <InfoItem>
                    Population: {population}
                </InfoItem>
            </InfoList>
        </Container>
    )
}
