 "use client"
import { Button } from '@/components/ui/button';
import { showToast } from '@/lib/showtoast';
import { CldUploadWidget } from 'next-cloudinary';
import { FiPlus } from "react-icons/fi";

const UploadMedia = ({isMultiple}) => {

    const handleOnError = (error) => {
        showToast('error',error.statusText)

    }
    const handleOnQueueEnd = async (results) =>{
        conwsole.log(results)

    }
  return (
    <CldUploadWidget 
    signatureEndpoint="/api/cloudinary-signature"
    uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPDATE_PRESET}
    onError={handleOnError}
    onQueuesEnd={handleOnQueueEnd}
    config={
        {
            cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
            apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY, 
        }
    }
    options={{
        sources: ['local', 'url', 'unsplash','google_drive'],
        multiple: isMultiple,
        
    }}
    >
  {({ open }) => {
    return (
      <Button onClick={() => open()}>
        <FiPlus/>
        Upload Media
      </Button>
    );
  }}
</CldUploadWidget>
  )
}

export default UploadMedia
