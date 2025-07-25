import { generateReactHelpers } from "@uploadthing/react/hooks";
 
import type { OurFileRouter } from "@/app/api/uploadImage/core";
 
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();