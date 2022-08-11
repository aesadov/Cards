import React from 'react';
import style from './LearnPage.module.css'
import {Wrapper} from "../../UniversalComponents/Wrapper";


const LearnPage = () => {
    return (
        <Wrapper>

            <div className={style.container}>
                <h1 className={style.learn}>Learn "Pack Name"</h1>
                <h4 className={style.question}>Question: "How "This" works in JavaScript?"</h4>
                <h4 className={style.answer}>Answer: "This is how "This" works in JavaScript"</h4>
                <h4 className={style.rate}>Rate yourself:</h4>


                <ul className={style.list}>
                    <li><input type="radio"/><span>  Did not know</span></li>
                    <li><input type="radio"/><span>  Forgot</span></li>
                    <li><input type="radio"/><span>  A lot of thought</span></li>
                    <li><input type="radio"/><span>  Confused</span></li>
                    <li><input type="radio"/><span>  Knew the answer</span></li>
                </ul>

                <div className={style.buttons}>
                    <button className={style.button}>
                        Cancel
                    </button>
                    <button className={style.button}>
                        Next
                    </button>
                </div>
            </div>

        </Wrapper>
    );
};

export default LearnPage;