import style from './landing.module.css'
import { NavLink } from 'react-router-dom'

function Landing (){
    return <>
        <div className={style.container}>
            <NavLink className={style.btn} to={'/home'}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Click!
            </NavLink>
        </div>
    </>
}

export default Landing