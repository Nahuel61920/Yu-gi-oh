import type { NextPage } from "next";
import { useSelector } from "react-redux";
import Head from "next/head";

import deta from "../styles/Detail.module.css";

const Detail: NextPage = () => {
    const { details } = useSelector((state: any) => state.card);
    return (
        <div className={deta.container}>
            <Head>
                <title>Yu-gi-oh</title>
                <meta name="description" content="Detail card" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h2>{details.name}</h2>
            <div className={deta.card}>
                <img src={details.img} alt={details.name} />

                <div>
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
                </div>
            </div>
        </div>
    );
};

export default Detail;
