import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import { GlobalStyle } from "../styles/globalStyles";
import { mainTheme } from "../styles/themes";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <GlobalStyle />
        <ThemeProvider theme={mainTheme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </UserProvider>
    </>
  );
}
