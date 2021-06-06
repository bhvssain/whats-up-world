import { gql } from "apollo-boost";

export const MAIN_QUERY = gql`
    query Continent($code: String!) {
        continents(filter: { code: { eq: $code } }) {
            code
            name
            countries {
                code
                name
                native
                phone
                currency
                capital
                emoji
            }
        }
    }
`

export const DETAIL_QUERY = gql`
    query Country($code: ID!) {
        country(code: $code) {
            code
            name
            native
            phone
            continent {
                code
                name
            }
            capital
            currency
            languages {
                name
                native
                rtl
            }
            emoji
            states {
                code
                name
            }
        }
    }
`
