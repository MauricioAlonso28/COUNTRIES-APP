import style from './filter.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { filterByActivity, filterByContinent, order } from '../../redux/actions/filters'

function Filter (){
    const { activities } = useSelector((state) => state)
    const dispatch = useDispatch()

    function handleOrder (e){
        dispatch(order(e.target.value))
    }

    function handleFilterByContinent (e){
        dispatch(filterByContinent(e.target.value))
    }

    function handleFilterByActivity (e){
        dispatch(filterByActivity(e.target.value))
    }

    return <>
        <div className={style.container}>
            {/* Order */}
            <label className={style.label} for="OrderBy">Order by:</label>
            <select className={style.select} name="OrderBy">
                <option value="Default">Default</option>
                <optgroup label='Order By Name'>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </optgroup>
                <optgroup label='Order By Population'>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </optgroup>
            </select>
            {/* FilterByContinent*/}
            <label className={style.label} for="FilterByContinent">Filter by continent:</label>
            <select className={style.select} name="FilterByContinent">
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Asia">Asia</option>
                <option value="South America">South America</option>
                <option value="North America">North America</option>
                <option value="Antarctica">Antarctica</option>
            </select>
            {/* FilterByName */}
            <label className={style.label} for="FilterByName">Filter by name:</label>
            <select className={style.select} name="FilterByName">
                <option value="All">All</option>
                {
                    activities.length > 0 
                    ? activities.map((activity)=> {
                        return (
                            <option key={activity._id} value={activity.name}>{activity.name}</option>
                        )
                    }) : null
                }
            </select>
        </div>
    </>
}

export default Filter