import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  fetchCard,
} from "../redux/reducers/cardReducer";

const Home: NextPage = () => {

  const dispatch = useDispatch();
  const { cards } = useSelector(
    (state) => state.card
  );

  useEffect(() => {
    dispatch(fetchCard());
  }, [dispatch]);

  return (
    <>
      <h1>Home</h1>

      {
        cards ? cards.map((card: any) => (
          <div key={card.id}>
            <img src={card.img} alt={card.name} />
          </div>
        )) 
        : <div>loading...</div>
      }
    </>
  )
}

export default Home
