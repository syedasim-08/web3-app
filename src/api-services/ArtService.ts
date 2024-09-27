import { ArtsDataCollection } from "@/utils/data";
import CoreAPIService from "./CoreAPIService";
import { API_ENDPOINTS } from "@/utils/api-integration";
import { ExampleArtsResponse } from "./interfaces/arts";
import { postDataType } from "@/design-systems/Organisms/Templates/CreateNFTTemplate/interface";


class CollectionService {
 async getArtsCollection() {
    return CoreAPIService.get<ExampleArtsResponse>(
      `${API_ENDPOINTS.PUBLIC.GET_ART_NFT}`
    );
  }

  getArtsCollectionByID =async (payload:string)=>{ 
return CoreAPIService.get<ExampleArtsResponse>(`${API_ENDPOINTS.PUBLIC.GET_ART_NFT}/${payload}`)
  }

  postArtsCollection= async (payload: postDataType) =>{
    return CoreAPIService.post<ExampleArtsResponse>(
      `${API_ENDPOINTS.PRIVATE.POST_ART_NFT}`,payload
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CollectionService();
