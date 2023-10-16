import style from './cards.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../redux/actions/setCurrentPage'
import Card from './Card'
import Pagination from '../Pagination/Pagination'

function Cards (){
    const dispatch = useDispatch()
    const { countries, currentPage } = useSelector((state) => state)

    const cardsPerPage = 10;
    const totalCards = countries.length

    const firstIndex = cardsPerPage * (currentPage - 1)
    const lastIndex = firstIndex + cardsPerPage

    let currentPageData = countries.slice(firstIndex, lastIndex)

    function onPageChange (pageNum){
        dispatch(setCurrentPage(pageNum))
    }

    return <>
        <div className={style.container}>
            <div className={style.cards}>
                {
                    currentPageData.length > 0 ? currentPageData.map((country) => {
                        return (
                            <Card
                                key={country.id}
                                id={country.id}
                                name={country.name}
                                continent={country.continent}
                                image={country.flag}
                            />
                        )
                    }) : null
                }
            </div>
            <Pagination
                totalCards={totalCards}
                currentPage={currentPage}
                pageSize={cardsPerPage}
                onPageChange={onPageChange}
            />
        </div>
    </>
}

export default Cards