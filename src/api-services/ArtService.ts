import { ArtsDataCollection } from "@/utils/data";
import CoreAPIService from "./CoreAPIService";
import { API_ENDPOINTS } from "@/utils/api-integration";
import { ExampleArtsResponse } from "./interfaces/arts";
import { SingleFormValues, postDataType } from "@/design-systems/Organisms/Templates/CreateNFTTemplate/interface";

class CollectionService {
  getArtsCollection() {
    return CoreAPIService.get<ExampleArtsResponse>(
      `${API_ENDPOINTS.PUBLIC.GET_ART_NFT}`
    );
  }

  postArtsCollection= async (payload: postDataType) =>{
    return CoreAPIService.post<any>(
      `${API_ENDPOINTS.PRIVATE.POST_ART_NFT}`,payload
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CollectionService();
