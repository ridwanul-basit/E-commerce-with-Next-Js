import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React from 'react'

const MediaModal = ({open,setOpen,selecetMedia,setSelectMedia,isMultiple}) => {

    const handleClear = ({

    })
    const handleClose = ({

    })
    const handleSelect = ({

    })
  return (
    <Dialog 
    open={open}
    onOpenChange ={()=>setOpen(!open)}
    >
      <DialogContent onInteractOutside = {(e)=> e.preventDefault()} className='sm:max-w-[80%] h-screen p-0 py-10 bg-transparent border-0 shadow-none'>
   <DialogDescription className='hidden' ></DialogDescription>
     <div className='h-[90vh] bg-white p-3 rounded shadow'>

        <DialogHeader className='h-8 borber-b'>
            <DialogTitle>Media Selection</DialogTitle>
        </DialogHeader>

        <div className=''>

        </div>

        <div className='h-10 pt-3 border-t flex justify-between'>
            <div>
                <Button type='button' variant='destructive' onclick= {handleClear}>
                    Clear All
                </Button>
            </div>
            <div className='flex gap-5 '>
                <Button type='button' variant='secondary' onclick= {handleClose}>
                    Close
                </Button>
                <Button type='button'  onclick= {handleSelect}>
                    Select
                </Button>
            </div>
        </div>

     </div>
      </DialogContent>
    </Dialog>
  )
}

export default MediaModal
