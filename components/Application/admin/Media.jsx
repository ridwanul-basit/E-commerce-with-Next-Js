import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ADMIN_MEDIA_EDIT } from "@/routes/AdminPanelRoute";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { AiTwotoneDelete } from "react-icons/ai";
import { showToast } from "@/lib/showtoast";

const Media = ({
  media,
  handleDelete,
  deleteType,
  selectedMedia,
  setSelectedMedia,
}) => {
  const handleCheck = () => {
    let newSelectedMedia = []

    if (selectedMedia.includes(media._id)) {
      newSelectedMedia = selectedMedia.filter(id => id !== media._id)
    } else {
      newSelectedMedia = [...selectedMedia, media._id]
    }

    setSelectedMedia(newSelectedMedia)
  }
  return (
    <div>
      <div className="border - border-gray-200 dark:border-gray-800 relative group rounded overflow-hidden">
        <div className="absolute top-2 left-2 z-20">
          <Checkbox
            checked={selectedMedia.includes(media._id)}
            onCheckedChange={handleCheck}
            className="border-primary"
          />
        </div>
        <div className="absolute top-2 right-2 z-20">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black/50 cursor-pointer">
                <BsThreeDotsVertical color="#fff" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {deleteType === "SD" && 
                <>
                  <DropdownMenuItem asChild>
                    <Link href={ADMIN_MEDIA_EDIT(media._id)}>
                      <MdOutlineEdit />
                      Edit
                    </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem  onClick={()=>handlecopyLink(media.secure_url)}>
                        <FaLink />
                        Copy Link
                    </DropdownMenuItem>
                  
                </>
              }
             
             <DropdownMenuItem >
                      <Link href={ADMIN_MEDIA_EDIT(media._id)}>
                        <AiTwotoneDelete color="red" />
                        {deleteType === 'SD' ? 'Move Into Trash': 'Delete Permanently'}
                      </Link>
                    </DropdownMenuItem>


            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="w-full h-full absolute z-10 transition-all duration-150 ease-in group-hover:bg-black/30 "></div>
        <div>
          <Image
            src={media?.secure_url || "/placeholder.png"}
            alt={media?.alt || "Image"}
            height={300}
            width={300}
            className="object-contain w-full sm:h-[200px] h-[150px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Media;
