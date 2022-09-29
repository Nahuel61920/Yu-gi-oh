import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  fetchCard,
} from "../redux/reducers/cardReducer";
import Card from "./components/Card";
import Prev from "./components/Prev";
import Nav from "./components/Nav";

const Home: NextPage = () => {

  const dispatch: any = useDispatch();
  const { cards } = useSelector(
    (state: any) => state.card
  );

  useEffect(() => {
    dispatch(fetchCard());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Yu-gi-oh</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Yu-gi-oh App
        </h1>
        {
          cards.length ? (
            <div className={styles.grid}>

              <Prev />
              <div className={styles.gridCard}>
                {cards.map((card: any) => (
                  <Card key={card.id} card={card} />
                ))
                }
              </div>
            </div>
          ) : (
            <img src="https://i.giphy.com/media/TaqwJP3Pyu0Ja/giphy.webp" alt="loading" />
          )
        }
      </main>
    </div>
  )
}

export default Home