import React from "react"
import { useQuery } from "@apollo/react-hooks"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components"

import { DETAIL_QUERY } from "../../queries/queries"

import { Container } from "./"
import { CountryAdditionalInfo } from '../../components/CountryAdditionalInfo'

const BackToOverview = styled.div`
    margin: 20px 0;
`

const SmallText = styled.span`
    font-size: 14px;
    font-weight: normal;
    color: #717171;
`

export const InfoList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

export const InfoItem = styled.li`
    margin: 0 0 10px;
`

const FlagIcon = styled.img`
    margin: 20px 0 40px;
`

const MainInfo = styled.div`
    margin: 0 0 50px;
`

const EmptySpace = styled("span")<{height: number}>`
    height: ${props => `${props.height}px` || "10px"};
    display: block;
`

const ExternalLink = styled.a.attrs({
    target: "_blank",
    rel: "noopener noreferrer"
})``

const CountryDetail = () => {
    const router = useRouter();
    const { code } = router.query;

    const { loading, error, data } = useQuery(DETAIL_QUERY, {
        variables: { code },
    });

    if (loading) return <Container><h1>Loading</h1></Container>;
    if (error || !data || !data.country) return <Container><h1>Error</h1></Container>;

    const { name, native, continent, capital, languages, currency, phone, states } = data.country;

    const renderLanguagesText = () => {
        if (languages.length > 0) {
            const multipleLanguages = languages.length > 1;
            const renderLanguage = languages.map(lang => lang.name);
            const text = `The language${multipleLanguages ? "s" : ""} spoken in ${name} ${multipleLanguages ? "are" : "is"} ${renderLanguage}.`;

            return <InfoItem>{text}</InfoItem>;
        }
    }

    const renderStatesText = () => {
        if (states.length > 0) {
            const amount = states.length;
            const statesList = states.map(state => state.name);
            const text = `There are ${amount} states in ${name}: ${statesList}.`;

            return <InfoItem>{text}</InfoItem>;
        }
    }

    return (
        <>
            <Head>
                <title>What's up {name}</title>
            </Head>
            <Container>
                <BackToOverview>
                    <Link href={`/${continent.code}`}>&larr; back to overview</Link>
                </BackToOverview>

                <h1>
                    {name}
                    <br/>
                    <SmallText>[{code}] [{native}]</SmallText>
                </h1>

                <FlagIcon alt={name} src={`https://flagpedia.net/data/flags/icon/80x60/${code.toString().toLowerCase()}.png`}/>

                <MainInfo>
                    <InfoList>
                        <InfoItem>
                            <ExternalLink href={`https://en.wikipedia.org/wiki/${name}`}>
                                {name}
                            </ExternalLink>{' '}
                            is based in {continent.name}.
                        </InfoItem>
                        {capital && <InfoItem>Its capital is <ExternalLink href={`https://en.wikipedia.org/wiki/${capital}`}>{capital}</ExternalLink>.</InfoItem>}
                        {renderLanguagesText()}
                        {renderStatesText()}
                        {currency && <InfoItem>The currency used in {name} is {currency}.</InfoItem>}
                        Listen to the <ExternalLink href={`https://www.anthemworld.com/search.php?searWords=${name}`}>Anthem of {name}</ExternalLink>.
                    </InfoList>
                </MainInfo>

                <CountryAdditionalInfo code={code} />

                <p>
                    Here is another useless fact:
                </p>

                <InfoList>
                    <InfoItem>The phone calling code of {name} is {phone}!!</InfoItem>
                </InfoList>

                <p>
                    <EmptySpace height={50} />

                    Super cool huh?

                    <EmptySpace height={70} />

                    Yeah, thought so...
                </p>
            </Container>
        </>
    )
}

export default CountryDetail
