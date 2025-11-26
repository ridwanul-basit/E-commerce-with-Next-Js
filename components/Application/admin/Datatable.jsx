import { IconButton, Tooltip } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MRT_ShowHideColumnsButton, MRT_ToggleDensePaddingButton, MRT_ToggleFullScreenButton, MRT_ToggleGlobalFilterButton, useMaterialReactTable } from "material-react-table";
import Link from "next/link";
import React, { useState } from "react";
import RecyclingIcon from '@mui/icons-material/Recycling';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
const Datatable = ({
  queryKey,
  url,
  columnsConfig,
  initialPlagSize = 10,
  exportEndPoint,
  deleteEndPoint,
  deleteType,
  trashView,
  createAction,
}) => {
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState([""]);
  const [sorting, setSorting] = useState([""]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: initialPlagSize,
  });
  const [rowSelection, setRowSelection] = useState();
  // Data fetching
   
    const handleDelete = ({
    
  })
  const {
    data: { data = [], meta } = {},
    isError,
    isRefetching,
    isLoading,
  } = useQuery({
    queryKey: [queryKey, { columnFilters, globalFilter, sorting, pagination }],
    queryFn: async () => {
      const url = new URL(fetchUrl, process.env.NEXT_PUBLIC_BASE_URL);
      url.searchParams.set(
        "start",
        `${pagination.pageIndex * pagination.pageSize}`
      );
      url.searchParams.set("size", `${pagination.pageSize}`);
      url.searchParams.set("filters", JSON.stringify(columnFilters ?? []));
      url.searchParams.set("globalFilter", globalFilter ?? "");
      url.searchParams.set("sorting", JSON.stringify(sorting ?? []));

      const { data: response } = await axios.get(url.href);
      return response;
    },
    placeholderData: keepPreviousData, //don't go to 0 rows when refetching or paginating to next page
  });



  //   init table

  const table = useMaterialReactTable({
    columns: columnsConfig,
    data,
    enableRowSelection: true,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    enableColumnOrdering: true,
    enableStickyHeader: true,
    enableStickyFooter: true,
    initialState: { showColumnFilters: true },
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
    muiToolbarAlertBannerProps: isError
      ? {
          color: "error",
          children: "Error loading data",
        }
      : undefined,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    rowCount: data?.mata?.total.totalRowcount ?? 0,
    onRowSelectionChange: setRowSelection,
    state: {
      columnFilters,
      globalFilter,
      isLoading,
      pagination,
      showAlertBanner: isError,
      showProgressBars: isRefetching,
      sorting,
      rowSelection
    },
    getRowId: (originalRow) => originalRow._id,

    renderToolbarInternalActions: ({table})=> (
        <>
        <MRT_ToggleGlobalFilterButton table={table} />
        <MRT_ShowHideColumnsButton table={table} />
        <MRT_ToggleFullScreenButton table={table} />
        <MRT_ToggleDensePaddingButton table={table} />
        {deleteType !== 'PD' && 
          <Tooltip title='Recycle Bin' >
            <Link href={trashView}>
            <IconButton>
                <RecyclingIcon/> 
            </IconButton>
            </Link>
          </Tooltip>
        }
        {deleteType === 'SD' && 
        <Tooltip title='Delete All' >
            <IconButton disabled={!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
            onClick={()=>handleDelete()}
            >
                <DeleteIcon/> 
            </IconButton>
          </Tooltip>
        }
        {deleteType === 'PD' && 
        <Tooltip title='Restore Data' >
            <IconButton disabled={!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
            onClick={()=>handleDelete()}
            >
                <RestoreFromTrashIcon/> 
            </IconButton>
          </Tooltip>
        }
        </>
    )
  });

  return <div></div>;
};

export default Datatable;
