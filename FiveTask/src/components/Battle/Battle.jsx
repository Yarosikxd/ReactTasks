import React, { useReducer } from 'react'
import './Style.css'

import UserCards from '../UserCards/UserCards'

import BattleContext from '../../contexts/BattleContext'

export default function Battle() {
    const initArgs = {
        users: [
            {
                id: 1,
                userName: 'visionmedia'
            },
            {
                id: 2,
                userName: 'c9s'
            },
            {
                id: 3,
            }
        ]
    }

    const reducer = (state, { type, payload }) => {
        switch (type) {
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initArgs);

    return (
        <BattleContext.Provider value={{...state}}>
            <div className='battle'>
                <h1>Let's Get Ready to Rumble</h1>

                <UserCards />
            </div>
        </BattleContext.Provider>
    )
}
