import style from './home.module.css'
import Aside from '../Aside/Aside'
import { useEffect} from 'react'
import { useDispatch} from 'react-redux'
import { getCountries } from '../../redux/actions/getCountries'
import { getActivities } from '../../redux/actions/getActivities'
import Cards from '../Cards/Cards'

function Home () {
    const dispatch = useDispatch()
    
    useEffect(()=> {
        dispatch(getCountries())
        dispatch(getActivities())
    }, [])

    return <>
        <div className={style.container}>
            <Aside/>
            <Cards/>
        </div>
    </>
}

export default Home