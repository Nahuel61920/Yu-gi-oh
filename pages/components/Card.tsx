import styles from '../../styles/Home.module.css';
import { useDispatch, useSelector } from "react-redux";
import type { NextPage } from 'next';
import {
    selectCard,
} from "../../redux/reducers/cardReducer";

const Card: NextPage = ({ card }: any) => {
    const dispatch: any = useDispatch();

    const handlePreview = (e: any) => {
        e.preventDefault();
        dispatch(selectCard(card));
    }

    return (
        <div className={styles.card}>
            <img src={card.img} alt={card.name} onClick={handlePreview}/>
        </div>
    )
}

export default Card