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
        <div className={deta.container_deck}>
            <Head>
                <title>Yu-gi-oh</title>
                <meta name="description" content="Deck" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main className={styles.main}>
                <h2>
                    <span>デッキ</span>
                    <span>Deck</span>
                </h2>
                <div className={styles.grid}>
                    <Prev />
                    <div className={styles.gridCard}>
                        {
                            deck.length ? deck.map((card: any, index: Key) => {
                                return (
                                    <Card key={index} card={card} />
                                )
                            }) : (
                                <div>
                                    <div className={styles.noCard}>
                                        <h2>
                                            <span>ノーデッキ</span>
                                            <span>No Deck</span>
                                        </h2>
                                    </div>
                                    <h3 className={styles.title}>
                                        Please add cards to the deck
                                    </h3>
                                    <h3 className={styles.title}>
                                        Add the card to the deck by clicking on <Image src="/assets/up.png" width={30} height={30} />
                                    </h3>
                                    <h3 className={styles.title}>
                                        Remove the card from the deck by clicking on <Image src="/assets/down.png" width={30} height={30} />
                                    </h3>
                                </div>
                            )
                        }
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Detail;
