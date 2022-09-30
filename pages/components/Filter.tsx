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
    sortLevel
} from "../../redux/reducers/cardReducer";


function Filter() {

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
    }

    function handleSubmitRaceMonster(e: string) {
        let race = e.toString();
        dispatch(racesMonsterFilter(race));
    }

    function handleSubmitRaceSpell(e: string) {
        let race = e.toString();
        dispatch(racesSpellFilter(race));
    }

    function handleSubmitRaceTrap(e: string) {
        let race = e.toString();
        dispatch(racesTrapFilter(race));
    }

    function handleSortDef(e: any) {
        e.preventDefault();
        dispatch(sortDef(e.target.value));
    }
    
    function handleSortAtk(e: any) {
        e.preventDefault();
        dispatch(sortAtk(e.target.value));
    }

    function handleSortLevel(e: any) {
        e.preventDefault();
        dispatch(sortLevel(e.target.value));
    }

    return (
        <div>
            <select
                defaultValue="Types"
                onChange={(e) => handleSubmitType(e.target.value)}
            >
                <option value="Types" disabled selected>
                    Types
                </option>
                <option value="All">
                    All
                </option>
                {types.map((type: any, key: number) => (
                    <option key={key} value={type.name}>
                        {type.name}
                    </option>
                ))}
            </select>

            <select
                defaultValue="Race-monster"
                onChange={(e) => handleSubmitRaceMonster(e.target.value)}
            >
                <option value="Race-monster" disabled selected>
                    Race Monster
                </option>
                <option value="All">
                    All
                </option>
                {raceMons.map((race: any, key: number) => (
                    <option key={key} value={race.name}>
                        {race.name}
                    </option>
                ))}
            </select>

            <select
                defaultValue="Race-spell"
                onChange={(e) => handleSubmitRaceSpell(e.target.value)}
            >
                <option value="Race-spell" disabled selected>
                    Race Spell
                </option>
                <option value="All">
                    All
                </option>
                {raceSpell.map((race: any, key: number) => (
                    <option key={key} value={race.name}>
                        {race.name.split("Spell").join("")}
                    </option>
                ))}
            </select>
            <select
                defaultValue="Race-trap"
                onChange={(e) => handleSubmitRaceTrap(e.target.value)}
            >
                <option value="Race-trap" disabled selected>
                    Race Trap
                </option>
                <option value="All">
                    All
                </option>
                {raceTrap.map((race: any, key: number) => (
                    <option key={key} value={race.name}>
                        {race.name.split("Trap").join("")}
                    </option>
                ))}
            </select>

            <select defaultValue="Def" onChange={(e) => handleSortDef(e)}>
                <option value="Def" disabled selected>
                    Def
                </option>
                <option value="min">Min</option>
                <option value="max">Max</option>
            </select>

            <select defaultValue="Atk" onChange={(e) => handleSortAtk(e)}>
                <option value="Atk" disabled selected>
                    Atk
                </option>
                <option value="min">Min</option>
                <option value="max">Max</option>
            </select>
            <select defaultValue="Level" onChange={(e) => handleSortLevel(e)}>
                <option value="Level" disabled selected>
                    Level
                </option>
                <option value="min">Min</option>
                <option value="max">Max</option>
            </select>
        </div>
    )
}

export default Filter