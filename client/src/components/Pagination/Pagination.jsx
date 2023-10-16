import style from './pagination.module.css'

function Pagination (props) {
    const { totalCards, currentPage, pageSize } = props
    const totalPages = Math.ceil(totalCards/pageSize)
    const pages = []

    for (let i = 1; i <= totalPages ; i++) {
        pages.push(i)
    }

    function handlePage (e){
        props.onPageChange(Number(e.target.id))
    }
    
    return <>
        <div className={style.container}>
            <ul className={style.pages}>
                {
                    pages.length > 1 ? pages.map((page) => {
                        return  (
                            <button 
                                key={page} 
                                id={page} 
                                onClick={handlePage} 
                                disabled={
                                    currentPage === page ? true : false
                                }
                                className={style.btn}
                            >
                                {page}
                            </button>
                        )
                    }) : null
                }
            </ul>
        </div>
    </>
}

export default Pagination