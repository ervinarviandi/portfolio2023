import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

import React from "react";
// import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Articles from "../components/Articles";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Techstack from "../components/Techstack";
import LoaderScreen from "../components/LoaderScreen";

function index() {
  return (
    <>
      <LoaderScreen />
      <Navigation />
      <Hero />
      <Articles />
      <Portfolio />
      <Techstack />
      <Footer />
    </>
  );
}

export default index;
