import type { NextPage } from "next";
import { useSelector } from "react-redux";
import Head from "next/head";

import deta from "../styles/Detail.module.css";

const Detail: NextPage = () => {
    const { details } = useSelector((state: any) => state.card);

    var star: any = [];

    if (details.level) {
        for (let i = 0; i < details.level; i++) {
            star = [...star, <span key={i} className={deta.star}>&#9733;</span>];
        }
    } else {
        null
    }

    console.log(star);
    return (
        <div className={deta.container}>
            <Head>
                <title>Yu-gi-oh</title>
                <meta name="description" content="Detail card" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {
                details.name ? (
                    <div className={deta.card}>
                        <div className={deta.card__img}>
                        <img src={details.img} alt={details.name} />
                        </div>

                        <div className={deta.cardInfo}>
                            <h2>{details.name}</h2>
                            {details.attribute ? (
                                <div className={deta.containerAttribute}>
                                    <div className={"prev " + details.attribute}></div>
                                    <div>
                                        <span className={deta.attributes}>
                                            {details.attribute.toLowerCase()} -{" "}
                                        </span>
                                        <span className={deta.attributes}>{details.race}</span>
                                    </div>
                                </div>
                            ) : (
                                <div className={deta.containerAttribute}>
                                    <div
                                        className={"prev " + details.type.split(" ").join("-")}
                                    ></div>
                                    <span className={deta.attributes}>
                                        {details.type === "Spell Card"
                                            ? details.race.split("Spell").join("")
                                            : details.race.split("Trap").join("")}
                                    </span>
                                </div>
                            )}
                            <h3>[ {details.type.split(" ").join(" / ")} ]</h3>
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
                                            <span className={deta.stats}>
                                                Level: {star}
                                            </span>
                                        </div>
                                    </div>
                                ) : null
                            }
                            <div className={deta.containerSet}>
                                {
                                    details.card_sets ? (
                                        details.card_sets.map((set: any, index: number) => (
                                            <div key={index} className={deta.set}>
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
                ) : null
            }
        </div>
    );
};

export default Detail;
