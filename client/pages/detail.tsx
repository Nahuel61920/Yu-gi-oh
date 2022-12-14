import type { NextPage } from "next";
import {useSelector } from "react-redux";

import Image from "next/image";

import Head from "next/head";

import deta from "../styles/Detail.module.css";
import styles from "../styles/Home.module.css";

const Detail: NextPage = () => {
    const { details } = useSelector((state: any) => state.card);

    console.log(details);

    var star: any = [];

    if (details.level) {
        for (let i = 0; i < details.level; i++) {
            star = [...star, <Image key={i} src="/assets/star.png" width={30} height={30} />];
        }
    } else {
        null
    }

    return (
        <div className={deta.container}>
            <Head>
                <title>Yu-gi-oh</title>
                <meta name="description" content="Detail card" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {
                details.name ? (
                    <>
                    <div className={deta.card}>
                        <div className={deta.card_container}>
                            <div className={deta.card__img}>
                                <img src={details.img} alt={details.name} />
                            </div>

                            <div className={deta.cardInfo}>
                                <h2 className={styles.titleDetail}>{details.name}</h2>
                                {details.attribute ? (
                                    <div className={deta.containerAttribute}>
                                        <div className={"prev " + details.attribute}></div>
                                        <div>
                                            <h3 className={styles.title}>
                                                {details.attribute.toLowerCase()} -{" "}{details.race}
                                            </h3>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={deta.containerAttribute}>
                                        <div
                                            className={"prev " + details.type.split(" ").join("-")}
                                        ></div>
                                        <h3 className={styles.title}>
                                            {details.type === "Spell Card"
                                                ? details.race.split("Spell").join("")
                                                : details.race.split("Trap").join("")}
                                        </h3>
                                    </div>
                                )}
                                <h3 className={styles.title}>[ {details.type.split(" ").join(" / ")} ]</h3>
                                <p>{details.description}</p>
                                {
                                    details.level ? (
                                        <div className={deta.containerStat}>
                                            <div>
                                                <span className={deta.stats}>
                                                    ATK: {details.atk}
                                                </span>
                                                {" / "}
                                                <span className={deta.stats}>
                                                    DEF: {details.def}
                                                </span>
                                            </div>
                                            <div className={deta.level}>
                                                {star}
                                            </div>
                                        </div>
                                    ) : null
                                }
                            </div>
                        </div>

                        
                        <div className={styles.mainDetail}>
                            <h2>
                                <span>??????</span>
                                <span>Set</span>
                            </h2>
                            <div className={deta.set_img}>
                            {
                                details.card_sets ? (
                                    details.card_sets.map((set: any, index: number) => (
                                        <div key={index} className={"set"}>
                                            <Image 
                                                src={"/assets/set/" + set.set_name.split(" ").join("-").split(":").join("").split("'").join("").split("(").join("").split(")").join("").split("!").join("").toLowerCase() + ".webp"}
                                                alt="filter"
                                                width={210}
                                                height={400}
                                            />
                                            <p className={deta.stats}>
                                                {set.set_name}
                                            </p>
                                            <p className={deta.stats}>
                                                {set.set_rarity}
                                            </p>
                                            <p className={deta.stats}>
                                                ${set.set_price}
                                            </p>
                                        </div>
                                    ))
                                ) : null
                            }
                            </div>
                        </div>
                    </div>
                    </>
                ) : null
            }
        </div>
    );
};

export default Detail;
