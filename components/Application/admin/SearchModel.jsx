import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const SearchModel = ({open,setOpen}) => {
  return (
    <Dialog open={open} onOpenChange={()=> setOpen(!open)}  >
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Quick Search</DialogTitle>
      <DialogDescription>
       Find and navigate to any admin section instantly. Type a keyword to get started
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default SearchModel
