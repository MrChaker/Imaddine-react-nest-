import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/layouts/layout";
import { useState } from "react";
import { ThemeContext } from "../context/themeContext";
function MyApp({ Component, pageProps }: AppProps) {
    const [darkTheme, setDarkTheme] = useState(false);
    return (
        <>
            <Head>
                <title>عماد الدّين زناف</title>
            </Head>
            <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeContext.Provider>
        </>
    );
}

export default MyApp;
