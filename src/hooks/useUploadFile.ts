import { useMutation } from "@tanstack/react-query";

import CollectionService from "@/api-services/ArtService";
import { postDataType } from "@/design-systems/Organisms/Templates/CreateNFTTemplate/interface";
import FileUploadService from "@/api-services/FileUploadService";

export const useUploadFile = ()=>{

    const {
        isPending: isSubmitFileLoading,
        data: uploadFiles,
        mutateAsync: uploadFileAsync,
      } = useMutation({
        mutationFn: (payload: FormData) =>
          FileUploadService.uploadFile(payload),
      });
    
      return {
        isSubmitFileLoading,
        uploadFiles,
        uploadFileAsync,
      };


}

 