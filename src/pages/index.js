import React from "react";
import Meta from "../components/meta";
import Global from "../components/global";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Portfolio from "../components/portfolio";
import Contacts from "../components/contacts";

const Home = () => {
    return (
        <>
            <Meta/>
            <Global>
                <Header/>
                <main>
                    <Hero/>
                    <About/>
                    <Skills/>
                    <Experience/>
                    <Portfolio/>
                    <Contacts/>
                </main>
                <Footer/>
            </Global>
        </>
    )
}

export default Home;
