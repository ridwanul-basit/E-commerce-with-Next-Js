import { useQuery } from '@tanstack/react-query'
import React from 'react'

const Datatable = ({
    queryKey, fetchurl, columnsConfig, initialPlagSize =10, exportEndPoint, deleteEndPoint,deleteType, trashView,createAction
}) => {
    const [columnFilters,setColumnFilters] = useState([])
    const [globalFilter,setGlobalFilter] = useState([''])
    const [sorting,setSorting] = useState([''])
    const [pagination,setPagination] = useState({
        pageIndex:0,
        pageSize: initialPlagSize
    })

    // Data fetching

    const {
        data: {data = [], meta } = {},
        isError,
        isRefetching,
        isLoading
    } = useQuery()

    
  return (
    
    <div>
      
    </div>
  )
}

export default Datatable

