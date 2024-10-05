import React, {useContext} from 'react'
import './Style.css'
import {RESET_USER_ACTION} from '../../actions/battle'
import BattleContext from '../../contexts/BattleContext'

export default function UserCardData({ user }) {
    const {dispatch} = useContext(BattleContext);

    const resetUser = () => dispatch({type: RESET_USER_ACTION, payload: user })


    return (
        <div className="card__data">
            <img className='data__img' src={user.data.avatar_url} alt={user.data.login} />
            <p className="data__titile">{user.data.login}</p>
            <Buttom title={`Reset`} handleClick={resetUser}/>
        </div>
    )
}
