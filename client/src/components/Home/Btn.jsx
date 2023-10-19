import style from './home.module.css'
import { useNavigate } from 'react-router-dom'
import btnHome from '../../resources/img/home.png'

function Btn (){
    const navigate = useNavigate()

    function backHome (){
        navigate('/home')
    }

    return <>
        <button className={style.btnHome} onClick={backHome}>
            <img className={style.imgBtn} src={btnHome} alt="backHome/rechargeCards" />
        </button>
    </>
}

export default Btn