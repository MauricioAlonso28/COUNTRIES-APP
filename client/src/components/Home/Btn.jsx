import style from './home.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCountries } from '../../redux/actions/getCountries'
import btnHome from '../../resources/img/home.png'

function Btn (){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function backHome (){
        navigate('/home')
        dispatch(getCountries())
    }

    return <>
        <button className={style.btnHome} onClick={backHome}>
            <img className={style.imgBtn} src={btnHome} alt="backHome/rechargeCards" />
        </button>
    </>
}

export default Btn