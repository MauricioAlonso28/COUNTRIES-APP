import { NavLink } from 'react-router-dom'
import style from './cards.module.css'

function Card (props){
    
    return <>
        <div className={style.containerAttributes}>
            <NavLink className={style.navlink} to={`/detail/${props.id}`}>
                <h2 className={style.name}>{props.name}</h2>
            </NavLink>
            <img className={style.img} src={props.image} alt={props.name} />
        </div>
    </>
}

export default Card