import style from './detail.module.css'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getCountryById } from '../../redux/actions/getCountryById'
import img from '../../resources/img/takeFlag.png'
import img2 from '../../resources/img/parchment.png'

function Detail (){
    const { id } = useParams()
    const { countryDetail } = useSelector((state) => state)
    const [showFlag, setShowFlag] = useState(false)
    const dispatch = useDispatch()

    const StyledDiv = styled.div`
        background: url(${countryDetail.flag});
        background-repeat: no-repeat; 
        background-size: cover; 
        background-position: center;
        position: fixed;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `

    useEffect(() => {
        dispatch(getCountryById(id))
        setTimeout(() => {
            setShowFlag(true)
        }, 1000);
    }, [])

    return <>
        <StyledDiv>
            <div className={style.container}>
                <div className={style.containerFlag}>
                    <img className={showFlag ? style.flagImg1 : style.flagImg2} src={countryDetail.flag} alt={countryDetail.name} />
                    <img className={showFlag ? style.bitmoji1 : style.bitmoji2} src={img} alt="bitmoji" />
                </div>
                <div className={style.containerInfo}>
                    <img className={style.parchment} src={img2} alt="parchment" />
                    <div className={style.parchmentInfo}>
                        <h2 className={style.name}>
                            {countryDetail.name}
                            <br />
                            ({countryDetail.id})
                        </h2>
                        <div className={style.secondaryInfo}>
                            <h3>Continent: &nbsp;{countryDetail.continent}</h3>
                            <h3>Capital: &nbsp;{countryDetail.capital}</h3>
                            <h3>Subregion: &nbsp;{countryDetail.subregion}</h3>
                            <h3>Area: &nbsp;{countryDetail.area}</h3>
                            <h3>Population: &nbsp;{countryDetail.population}</h3>
                        </div>
                        <div className={style.containerActivities}>
                            {
                                countryDetail.Activities && countryDetail.Activities.length > 0 ? <h3 >Activities</h3> : null
                            }    
                            {
                                countryDetail.Activities && countryDetail.Activities.length > 0  && countryDetail.Activities.length < 4?
                                    countryDetail.Activities.map((activity) => {
                                        return (
                                            <div key={activity.id} className={style.containerActivity}>
                                                <span>Name: &nbsp;<strong>{activity.name}</strong></span>
                                                <span>Difficulty: &nbsp;<strong>{activity.difficulty}</strong></span>
                                                <span>Duration: &nbsp;<strong>{activity.duration}</strong></span>
                                                <span>Season: &nbsp;<strong>{activity.season}</strong></span>
                                            </div>
                                        )
                                    }) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </StyledDiv>
    </>
}

export default Detail