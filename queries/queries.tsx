import { gql } from "apollo-boost";

export const MAIN_QUERY = gql`
query Continent($code: String!) {
    continents(filter: { code: { eq: $code }}) {
        code
        name
        countries {
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
