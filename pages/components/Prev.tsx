import styles from '../../styles/Home.module.css';
import prev from '../../styles/prev.module.css';
import { useDispatch, useSelector } from "react-redux";
import type { NextPage } from 'next'

const Prev: NextPage = () => {

    const { preview } = useSelector(
        (state: any) => state.card
    );
    return (
        <div className={styles.gridPrev}>
            <div>
            {
                preview.name ? (
                    <div className={styles.prevContainer}>
                        <img src={preview.img} alt={preview.name} />
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
                                    <span className={prev.attributes}>{preview.race}</span>
                                </div>
                            )
                        }
                        <h3>[ {preview.type.split(" ").join(" / ")} ]</h3>
                        <button className={prev.btn}>Add to Deck</button>
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