import { useState } from 'react';
import styles from '../../styles/Home.module.css';
import prev from '../../styles/prev.module.css';
import {
    fetchDetail,
    addDecks,
    removeDecks,
} from "../../redux/reducers/cardReducer";
import { useDispatch, useSelector } from "react-redux";
import type { NextPage } from 'next';
import Link from 'next/link';

import Image from "next/image";

const Prev: NextPage = () => {
    const dispatch: any = useDispatch();
    const { preview, deck } = useSelector(
        (state: any) => state.card
    );

    console.log(deck);

    const active = deck.find((item: any) => item.id === preview.id);
    

    const [msg, setMsg] = useState("");

    setTimeout(() => {
        setMsg("");
    }, 4000);

    const handleAddDeck = (data: any) => {
        if (deck.length < 30) {
            // agregar un maximo de 3 cartas por id a deck
            const count = deck.filter((item: any) => item.id === data.id);

            if (count.length < 3) {
                dispatch(addDecks(data));
                setMsg("Added to Deck");
            } else {
                setMsg("You can only add 3 cards");
            }
        } else {
            setMsg("Deck is full");
        }
    };

    const handleRemoveDeck = (data: any) => {
        dispatch(removeDecks(data.id));
        setMsg("Removed from deck");
    };


    
    return (
        <div className={styles.gridPrev}>
            <div>
            {
                preview.name ? (
                    <div className={styles.prevContainer}>
                        <img src={preview.img} alt={preview.name} className={preview.name? prev.show : prev.hide}/>
                        <h4 className={styles.title}>
                            Name: {preview.name}
                        </h4>
                        {
                            preview.attribute ? (
                                <div className={prev.containerAttribute}>
                                    <div className={"prev " + preview.attribute}></div>
                                    <div>
                                        <h4 className={styles.title}>
                                            {preview.attribute.toLowerCase()} - {preview.race}
                                        </h4>
                                    </div>
                                </div>
                            ) : (
                                <div className={prev.containerAttribute}>
                                    <div className={"prev " + preview.type.split(" ").join("-")}></div>
                                    <h4 className={styles.title}>
                                        {
                                            preview.type === "Spell Card" ? (
                                                preview.race.split("Spell").join("")
                                            ) : (
                                                preview.race.split("Trap").join("")
                                            )
                                        }
                                    </h4>
                                </div>
                            )
                        }
                        <h4 className={styles.title}>
                            [ {preview.type.split(" ").join(" / ")} ]
                        </h4>
                        
                        {
                            msg ? (
                                <div className={prev.msg}>
                                    <p>{msg}</p>
                                </div>
                            ) : (
                                null
                            )
                        }
                        
                        <Link href={`/detail`} as={`/${preview.id}`}>
                            <button className={prev.btn} onClick={() => dispatch(fetchDetail(preview.id))}>See more</button>
                        </Link>
                        {
                            !active ? (
                                <div className={prev.containerBtn}>
                                    <Image src="/assets/up.png" width={30} height={30} onClick={() => handleAddDeck(preview)}/>
                                </div>
                            ) : (
                                <div className={prev.containerBtn}>
                                    <Image src="/assets/up.png" width={30} height={30} onClick={() => handleAddDeck(preview)}/>
                                    <Image src="/assets/down.png" width={30} height={30} onClick={() => handleRemoveDeck(preview)}/>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <div className={styles.prevContainer}>
                        <img src="https://www.elbosqueprohibido.com/wp-content/uploads/2020/04/Fundas-Tugioh-Reverso.jpg" alt="loading" />
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Prev