import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
  export function TablePagination({currentPage}:{currentPage: string}) {
    const page = parseInt(currentPage)
    const prevPage = page - 1
    const nextPage = page + 1

    return (
      <Pagination>
        <PaginationContent>
          {
            page > 1 &&
            <>
            <PaginationItem>
              <PaginationPrevious href={`/home?page=${prevPage}`} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`/home?page=${prevPage}`}>{prevPage}</PaginationLink>
            </PaginationItem>
            </>
          }
          <PaginationItem>
            <PaginationLink href={`/home?page=${page}`} isActive>
              {currentPage}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={`/home?page=${nextPage}`}>{nextPage}</PaginationLink>
          </PaginationItem>
          {
            page === 1 
            && <PaginationItem>
             <PaginationLink href={`/home?page=${nextPage+1}`}>{nextPage+1}</PaginationLink>
           </PaginationItem>
          }
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={`/home?page=${nextPage}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  