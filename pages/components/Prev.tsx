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
            dispatch(addDecks(data));
            setMsg("Card added to deck");
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
                        <h3>Name: {preview.name}</h3>
                        {
                            preview.attribute ? (
                                <div className={prev.containerAttribute}>
                                    <div className={"prev " + preview.attribute}></div>
                                    <div>
                                        <span className={prev.attributes}>{preview.attribute.toLowerCase()} - </span><span className={prev.attributes}>{preview.race}</span>
                                    </div>
                                </div>
                            ) : (
                                <div className={prev.containerAttribute}>
                                    <div className={"prev " + preview.type.split(" ").join("-")}></div>
                                    <span className={prev.attributes}>
                                        {
                                            preview.type === "Spell Card" ? (
                                                preview.race.split("Spell").join("")
                                            ) : (
                                                preview.race.split("Trap").join("")
                                            )
                                        }
                                    </span>
                                </div>
                            )
                        }
                        <h3>[ {preview.type.split(" ").join(" / ")} ]</h3>
                        
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