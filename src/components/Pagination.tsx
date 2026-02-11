import React from 'react'
import PageLink from './PageLink'
import './Pagination.css'
import exp from 'constants';

export type Props = {
    currentPage: number,
    lastPage: number,
    setCurrentPage: (page: number) => void
};

export default function Pagination({ currentPage, lastPage, setCurrentPage }: Props & { lastPage: number }) {
    const pageNums = [1, 2];
  return (
    <nav className="pagination" aria-label="Pagination">
        <PageLink href="#" disabled={currentPage === 1} onClick={() => setCurrentPage && setCurrentPage(currentPage - 1)}>Previous</PageLink>

        {pageNums.map((pageNum, idx) => (
            <PageLink key={idx} href="#" active={pageNum === currentPage} onClick={() => setCurrentPage(pageNum)}>
                {pageNum}
            </PageLink>
        ))}

        <PageLink href="#" disabled={currentPage === lastPage} onClick={() => setCurrentPage && setCurrentPage(currentPage + 1)}>Next</PageLink>
    </nav>
  )
}
