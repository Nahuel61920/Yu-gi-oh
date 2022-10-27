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

const Prev: NextPage = () => {
    const dispatch: any = useDispatch();
    const { preview, deck } = useSelector(
        (state: any) => state.card
    );

    console.log(deck);

    const active = deck.find((item: any) => item.id === preview.id);

    const handleAddDeck = (data: any) => {
        dispatch(addDecks(data));
    };

    const handleRemoveDeck = (data: any) => {
        dispatch(removeDecks(data.id));
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
                        <Link href={`/detail`} as={`/${preview.id}`}>
                            <button className={prev.btn} onClick={() => dispatch(fetchDetail(preview.id))}>See more</button>
                        </Link>
                        {
                            !active ? (
                                <button className={prev.btn} onClick={() => handleAddDeck(preview)}>Add to deck</button>
                            ) : (
                                <div className={prev.containerBtn}>
                                    <button className={prev.btn} onClick={() => handleAddDeck(preview)}>Add to deck</button>
                                    <button className={prev.btn} onClick={() => handleRemoveDeck(preview)}>Remove from deck</button>
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