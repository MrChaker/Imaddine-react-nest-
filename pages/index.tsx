import type { NextPage } from "next";
import Books from "../components/HomePage/Books";
import Hero from "../components/HomePage/Hero";

const Home: NextPage = () => {
    return (
        <>
            <Hero />
            <Books />
        </>
    );
};

export default Home;
