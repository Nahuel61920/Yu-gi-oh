import { Key, useEffect, useState } from "react";
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Prev from "./components/Prev";


import Image from "next/image";

import Head from "next/head";

import deta from "../styles/Detail.module.css";

const Detail: NextPage = () => {
    const { deck } = useSelector((state: any) => state.card);

    return (
        <div className={deta.container}>
            <Head>
                <title>Yu-gi-oh</title>
                <meta name="description" content="Deck" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main className={styles.main}>
                <h2 className={styles.title}>Deck</h2>
                <div className={styles.grid}>
                    <Prev />
                    <div className={styles.gridCard}>
                        {deck.map((card: { id: Key | null | undefined }) => (
                            <Card key={card.id} card={card} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Detail;
