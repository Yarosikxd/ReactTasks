import React, { useRef, useContext } from 'react'
import service from '../../service/GithubUsers';
import BattleContext from '../../contexts/BattleContext';

import { SET_USER_DATA_ACTION } from '../../actions/battle';

export default function UserCardForm({ user, index }) {
    const { dispatch } = useContext(BattleContext);


    const inputRef = useRef();
    const lableRef = useRef();


    const handleSubmit = async (e) => {
        e.preventDefault();

        lableRef.current.classList.contains(`form__label--error`) && lableRef.current.classList.remove(`form__label--error`);

        const username = inputRef.current.value;

        try {
            const responce = await service.getUser(username);
            dispatch({ type: SET_USER_DATA_ACTION, payload: {...user, data: responce} });

        } catch (err) {
            console.log(err);
            lableRef.current.classList.add(`form__label--error`);
        }
    }

    return (
        <form className='card__form' onSubmit={handleSubmit}>
            <label ref={lableRef} className='form__lable '>
                <p className="lable__title">Choose <b>Player {index}</b> username:</p>
                <input
                    ref={inputRef}
                    required type='text' className='label__input' placeholder={`Player ${index}`} defaultValue={user.username} />
                <p className="label__error">Username not exist </p>
            </label>
            <Button title={`Submit`}/>
        </form>
    )
}
