import withApollo from "next-with-apollo"
import ApolloClient, { InMemoryCache } from "apollo-boost"

export default withApollo(({ initialState }) => {
    return new ApolloClient({
        uri: "https://countries.trevorblades.com/",
        cache: new InMemoryCache().restore(initialState || {})
    })
});
