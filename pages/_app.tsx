import React, { Fragment } from "react";
import App from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import withApollo from "../hooks/withApollo";

export interface ITheme {
    light: string;
}

export interface IThemeWrapper {
    theme: ITheme;
}

export const theme: ITheme = {
    light: "#fefefe",
}

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
    body {
        background-color: ${props => props.theme.light}; 
        margin: 0 auto;
        font-family: Arial, sans-serif;
        font-size: 14px;
    }
`

interface IProps {
    apollo: ApolloClient<NormalizedCacheObject>;
}

class WhatsUpWorld extends App<IProps> {
    render() {
        const { Component, pageProps, apollo } = this.props;

        return (
            <Fragment>
                <Head>
                    <title>Yo, what's up with the world</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <ApolloProvider client={apollo}>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </ApolloProvider>
            </Fragment>
        )
    }
}

export default withApollo(WhatsUpWorld)
