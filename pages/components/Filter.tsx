import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    typesFilter,
    typesCard,
    racesMonsterCard,
    racesMonsterFilter,
} from "../../redux/reducers/cardReducer";


function Filter() {

    const dispatch: any = useDispatch();
    const { types, raceMons } = useSelector(
        (state: any) => state.card
    );

    useEffect(() => {
        dispatch(typesCard());
        dispatch(racesMonsterCard());
    }, [dispatch]);

    function handleSubmitType(e: string) {
        let type = e.toString();
        dispatch(typesFilter(type));
    }

    function handleSubmitRaceMonster(e: string) {
        let race = e.toString();
        dispatch(racesMonsterFilter(race));
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
                defaultValue="Types"
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

        </div>
    )
}

export default Filter