import { ArtsDataCollection } from "@/utils/data";
import CoreAPIService from "./CoreAPIService";
import { API_ENDPOINTS } from "@/utils/api-integration";
import { ExampleArtsResponse } from "./interfaces/arts";
import { SingleFormValues, postDataType } from "@/design-systems/Organisms/Templates/CreateNFTTemplate/interface";

class FileUploadService {
 

  uploadFile= async (payload: FormData) =>{
    return CoreAPIService.post<any>(
      `${API_ENDPOINTS.PRIVATE.POST_FILES}`,payload
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FileUploadService();
