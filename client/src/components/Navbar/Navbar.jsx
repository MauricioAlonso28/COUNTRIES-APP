import style from './navbar.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions/getCountries';

function Navbar (){
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    const handleChange = (e) => setName(e.target.value);

    const handleClick = () => {
        dispatch(getCountries(name))
        setName("")
    }
    
    return <>
        <div className={style.container}>
            <input value={name} onChange={handleChange} className={style.input} type='search' placeholder="Search by Name..." />
            <button onClick={handleClick} className={style.btn}>Search</button>
        </div>
    </>
}

export default Navbar