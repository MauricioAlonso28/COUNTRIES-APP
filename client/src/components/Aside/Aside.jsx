import { NavLink } from 'react-router-dom'
import style from './aside.module.css'
import Navbar from '../Navbar/Navbar'
import Filter from '../Filters/Filter'

function Aside (){
    return <>
        <aside className={style.aside}>
            <div className={style.navbarFilter}>
                <Navbar/>
                <Filter/>
            </div>
            <div className={style.containerBtn}>
                <div className={`${style.btn} ${style.btn2}`} id="button-2">
                    <div className={style.slideBtn}></div>
                    <NavLink className={style.a} to={'/form'}>
                        ADD A NEW ACTIVTY
                    </NavLink>
                </div>
            </div>
        </aside>
    </>
}

export default Aside