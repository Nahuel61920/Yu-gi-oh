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
                        <img src={details.img} alt={details.name} />

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
                                details.def || details.atk ? (
                                    <div className={deta.containerAttribute}>
                                        <div>
                                            <span className={deta.attributes}>
                                                ATK: {details.atk}
                                            </span>
                                            {" / "}
                                            <span className={deta.attributes}>
                                                DEF: {details.def}
                                            </span>
                                        </div>
                                        <div className={deta.level}>
                                            <span className={deta.attributes}>
                                                Level: {star}
                                            </span>
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default Detail;
