import style from './form.module.css'
import { useEffect, useState } from 'react'
import { validation } from './validation.js'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../redux/actions/getCountries'
import { postActivity } from '../../redux/actions/postActivity'
import meLeft from '../../resources/img/me-left.png'
import meRight from '../../resources/img/me-right.png'

function Form (){
    const [showForm, setShowForm] = useState(false)
    const [showImgs, setShowImgs] = useState(false)

    const dispatch = useDispatch()
    const { countries } = useSelector((state) => state)

    const [addedCountries, setAddedCountries] = useState([])
    const [errors, setErrors] = useState({})
    const [activity, setActivity] = useState({
        name: "",
        difficulty: 1,
        duration: "",
        season: "",
        countries: []
    })

    function handleChange (e){
        const {name, value} = e.target;

        if (name === 'country') {
            if (!addedCountries.includes(value) && !(errors.countries === "Exceeds the maximum allowed selected countries per activity")) {
                addedCountries.push(value)
            }
            setActivity({
                ...activity,
                countries: [...addedCountries]
            })
            setErrors(validation({
                ...activity,
                countries: [...addedCountries]
            }))
        }else {
            setActivity({
                ...activity,
                [name]: value
            })
            setErrors(validation({
                ...activity,
                [name]: value
            }))
        }
    }

    function deletedCountry (id){
        const countriesFormatted = addedCountries.filter((country) => country !== id)

        setAddedCountries(countriesFormatted)
        setActivity({
            ...activity,
            countries: [...countriesFormatted]
        })
    }

    function handleSubmit (e){
        e.preventDefault()
        dispatch(postActivity(activity))
        dispatch(getCountries())
        setActivity({
            name: "",
            difficulty: 1,
            duration: "",
            season: "",
            countries: []
        })
        setAddedCountries([])
    }
    
    useEffect(() => {
        dispatch(getCountries())
        setTimeout(() => {
            setShowForm(true)
        }, 1600);
        setTimeout(() => {
            setShowImgs(true)
        }, 1000);
    }, [])

    return <>
        <div className={style.container}>
            <form className={showForm ? style.form1 : style.form2} onSubmit={handleSubmit}>
                <div className={style.containerTitle}>
                    <h2 className={style.title}>Add a New Activity</h2>
                </div>
                <div className={style.containerRequirements}>
                    <div className={`${style.divContainer}`}>
                        <div className={style.containerInputLabelName}>
                            <label>Name: </label>
                            <input
                                type='text'
                                name='name'
                                value={activity.name}
                                onChange={handleChange}
                                placeholder='Example: Skiing in the snow'
                            />
                            <p className={style.error}>
                                {errors.name ? errors.name : null}
                            </p>
                        </div>
                        <div className={style.containerInputLabelName}>
                            <label>Difficulty: </label>
                            <input 
                                type="text" 
                                name='difficulty'
                                value={activity.difficulty}
                                onChange={handleChange}
                                placeholder='Example: 1'
                            />
                            <p className={style.error}>
                                {errors.difficulty ? errors.difficulty : null}
                            </p>
                        </div>
                    </div>
                    <div className={`${style.divContainer}`}>
                        <div className={style.containerInputLabelName}>
                            <label>Duration: </label>
                            <input 
                                type="text"
                                name='duration'
                                value={activity.duration}
                                onChange={handleChange}
                                placeholder='Example: 2 hours' 
                            />
                            <p className={style.error}>
                                {errors.duration ? errors.duration : null}
                            </p>
                        </div>
                        <div className={style.containerInputLabelName}>
                            <label>Season: </label>
                            <input 
                                type="text"
                                name='season'
                                value={activity.season}
                                onChange={handleChange}
                                placeholder='Example: Spring' 
                            />
                            <p className={style.error}>
                                {errors.season ? errors.season : null}
                            </p>
                        </div>
                    </div>
                    <div className={`${style.divContainerSelector}`}>
                        <label>Countries: </label>
                        <select className={style.selector} name='country' onChange={handleChange}>
                            {
                                countries && countries.length > 0 
                                ? countries.map((country) => {
                                    return <>
                                        <option
                                            key={country.id}
                                            value={country.id}
                                        >
                                            {country.name}
                                        </option>
                                    </>
                                }) : null
                            }
                        </select>
                        <p className={style.error}>
                                {errors.countries ? errors.countries : null}
                        </p>
                        <div className={style.addedCountries}>
                            {
                                addedCountries.length > 0 
                                ? addedCountries.map((country) => {
                                    return (
                                        <div className={style.checkedOpt}>
                                            <small>{country}</small>
                                            <button
                                                type='button' 
                                                className={style.optionBtn} 
                                                onClick={() => deletedCountry(country)}
                                            >
                                                x
                                            </button>
                                        </div>
                                    )
                                }) : null
                            }
                        </div>
                    </div>
                </div>
                <div className={style.containerBtn}>
                    <button className={style.btn} type='submit'
                        disabled={Object.keys(errors).length > 0 ||
                            !activity.name ||
                            !activity.difficulty ||
                            !activity.duration ||
                            !activity.season ||
                            activity.countries.length > 10 ||
                            activity.countries.length === 0
                        ? true : false}
                    >
                        Submit
                    </button>
                </div>
            </form>
            <div className={style.containerImgs}>
                <img className={showImgs ? style.leftImg1 : style.leftImg2} src={meLeft} alt="me-left" />
                <img className={showImgs ? style.rightImg1 : style.rightImg2} src={meRight} alt="me-right" />
            </div>
        </div>
    </>
}

export default Form