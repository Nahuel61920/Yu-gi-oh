import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    typesFilter,
    typesCard,
    racesMonsterCard,
    racesMonsterFilter,
    racesSpellCard,
    racesSpellFilter,
    racesTrapCard,
    racesTrapFilter,
    sortDef,
    sortAtk,
    sortLevel,
} from "../../redux/reducers/cardReducer";

import styles from '../../styles/Home.module.css';

function Filter({ setItemOffset, setFilter }: any) {
    const dispatch: any = useDispatch();
    const { types, raceMons, raceSpell, raceTrap } = useSelector(
        (state: any) => state.card
    );

    useEffect(() => {
        dispatch(typesCard());
        dispatch(racesMonsterCard());
        dispatch(racesSpellCard());
        dispatch(racesTrapCard());
    }, [dispatch]);

    function handleSubmitType(e: string) {
        let type = e.toString();
        dispatch(typesFilter(type));
        setItemOffset(0);
    }

    function handleSubmitRaceMonster(e: string) {
        let race = e.toString();
        dispatch(racesMonsterFilter(race));
        setItemOffset(0);
    }

    function handleSubmitRaceSpell(e: string) {
        let race = e.toString();
        dispatch(racesSpellFilter(race));
        setItemOffset(0);
    }

    function handleSubmitRaceTrap(e: string) {
        let race = e.toString();
        dispatch(racesTrapFilter(race));
        setItemOffset(0);
    }

    function handleSort(e: any) {
        e.preventDefault();

        if (e.target.value === "minDef") {
            dispatch(sortDef(e.target.value));
        } else if (e.target.value === "maxDef") {
            dispatch(sortDef(e.target.value));
        } else if (e.target.value === "minAtk") {
            dispatch(sortAtk(e.target.value));
        } else if (e.target.value === "maxAtk") {
            dispatch(sortAtk(e.target.value));
        } else if (e.target.value === "minLevel") {
            dispatch(sortLevel(e.target.value));
        } else if (e.target.value === "maxLevel") {
            dispatch(sortLevel(e.target.value));
        }

        setItemOffset(0);
    }

    return (
        <div className="filter-modal">
            <div className="filter-container">
                <div className="btn-close" >
                    <button onClick={() => setFilter(false)}>X</button>
                </div>
                <div className="filter">
                    <div className="filters">
                        <div>
                            <h3 className={styles.title}>Type</h3>
                            <div className="filter-type">
                                {types && (
                                    <select
                                        defaultValue="Types"
                                        onChange={(e) => handleSubmitType(e.target.value)}
                                        className="select-filter"
                                    >
                                        <option value="Types" disabled selected>
                                            Types
                                        </option>
                                        <option value="All">All</option>
                                        {types.map((type: any, key: number) => (
                                            <option key={key} value={type.name}>
                                                {type.name}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            </div>
                        </div>

                        <div>
                            <h3 className={styles.title}>Monster</h3>
                            <div className="filter-monster">
                                {raceMons && (
                                    <select
                                        defaultValue="Race-monster"
                                        onChange={(e) => handleSubmitRaceMonster(e.target.value)}
                                        className="select-filter"
                                    >
                                        <option value="Race-monster" disabled selected>
                                            Race Monster
                                        </option>
                                        <option value="All">All</option>
                                        {raceMons.map((race: any, key: number) => (
                                            <option key={key} value={race.name}>
                                                {race.name}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            </div>
                        </div>

                        <div>
                            <h3 className={styles.title}>Spell</h3>
                            <div className="filter-spell">
                                {raceSpell && (
                                    <select
                                        defaultValue="Race-spell"
                                        onChange={(e) => handleSubmitRaceSpell(e.target.value)}
                                        className="select-filter"
                                    >
                                        <option value="Race-spell" disabled selected>
                                            Race Spell
                                        </option>
                                        <option value="All">All</option>
                                        {raceSpell.map((race: any, key: number) => (
                                            <option key={key} value={race.name}>
                                                {race.name.split("Spell").join("")}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            </div>
                        </div>

                        <div>
                            <h3 className={styles.title}>Trap</h3>
                            <div className="filter-trap">
                                {raceTrap && (
                                    <select
                                        defaultValue="Race-trap"
                                        onChange={(e) => handleSubmitRaceTrap(e.target.value)}
                                        className="select-filter"
                                    >
                                        <option value="Race-trap" disabled selected>
                                            Race Trap
                                        </option>
                                        <option value="All">All</option>
                                        {raceTrap.map((race: any, key: number) => (
                                            <option key={key} value={race.name}>
                                                {race.name.split("Trap").join("")}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="sort">
                        <div className="sorts">
                            <h3 className={styles.title}>Defense</h3>
                            <div className="sort-btn">
                                <button value="minDef" onClick={(e) => handleSort(e)}>
                                    Min
                                </button>
                                <button value="maxDef" onClick={(e) => handleSort(e)}>
                                    Max
                                </button>
                            </div>
                        </div>


                        <div className="sorts">
                            <h3 className={styles.title}>Attack</h3>
                            <div className="sort-btn">
                                <button value="minAtk" onClick={(e) => handleSort(e)}>
                                    Min
                                </button>
                                <button value="maxAtk" onClick={(e) => handleSort(e)}>
                                    Max
                                </button>
                            </div>
                        </div>

                        <div className="sorts">
                            <h3 className={styles.title}>Level</h3>
                            <div className="sort-btn">
                                <button value="minLevel" onClick={(e) => handleSort(e)}>
                                    Min
                                </button>
                                <button value="maxLevel" onClick={(e) => handleSort(e)}>
                                    Max
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
