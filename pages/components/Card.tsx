import styles from '../../styles/Home.module.css';
import { useDispatch } from "react-redux";
import type { NextPage } from 'next';
import {
    selectCard,
    cleanState
} from "../../redux/reducers/cardReducer";

const Card: NextPage = ({ card }: any) => {
    const dispatch: any = useDispatch();

    const handlePreview = (e: any) => {
        e.preventDefault();
        dispatch(cleanState());
        setTimeout(() => {
            dispatch(selectCard(card));
        }, 100);
    }

    return (
        <div className={styles.card}>
            <img src={card.img_small} alt={card.name} onClick={handlePreview}/>
        </div>
    )
}

export default Card