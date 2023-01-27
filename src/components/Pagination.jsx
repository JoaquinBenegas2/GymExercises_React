import React from 'react'

import "./Pagination.css"

const Pagination = ({ page, setPage, max }) => {
  
  const nextPage = ()=> {
    setPage(page + 1)
    setTimeout(() => {
      window.scrollTo({ top: 1680, behavior: 'smooth' })
    }, 1);
  }

  const previousPage = ()=> {
    setPage(page - 1)
    setTimeout(() => {
      window.scrollTo({ top: 1680, behavior: 'smooth' })
    }, 1); 
  }

  return (
    <div className='pagination'>
        <button disabled={page === 0 || page < 0} onClick={previousPage}> <i className="fa-solid fa-chevron-left"></i> </button>
        <p className='current-page'>{page+1}</p>
        <p>... {Math.ceil(max)}</p>
        <button disabled={page === Math.floor(max) || page > Math.floor(max)} onClick={nextPage}> <i className="fa-solid fa-chevron-right"></i> </button>
    </div>
  )
}

export default Pagination