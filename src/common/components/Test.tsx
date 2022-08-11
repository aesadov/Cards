import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';
import {CardType} from "../../features/cards/cardsAPI";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {updateGradeLearnCards} from "../../features/learn/learn-reducer";


const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];

const getCard = (data: CardType[]) => {
    const sum = data.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = data.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)
    console.log('res: ', res)

    return data[res.id + 1];
}


export const Test = () => {

    const cards = useAppSelector((store) => store.learn.cards);

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [card, setCard] = useState<CardType>(getCard(cards));

    const dispatch = useAppDispatch();

    const onNext = () => {
        setIsChecked(false);
        setCard(getCard(cards))
        dispatch(updateGradeLearnCards({grade: 5, card_id: card._id}))
    }

    if (cards.length === 0) return <Navigate to={'/packs'}/>

    return (
        <div>
            LearnPage
            {!isChecked && <>
                  <div>{card.question}</div>
                    <div>
                    <button onClick={() => setIsChecked(true)}>check</button>
                    </div>

            </>}

            {isChecked && (
                <>
                    <div>{card.answer}</div>

                    {grades.map((g, i) => (
                        <button key={'grade-' + i} onClick={() => {
                        }}>{g}</button>
                    ))}

                    <div>
                        <button onClick={onNext}>next</button>
                    </div>
                </>
            )}
        </div>
    );
};
