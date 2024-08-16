import { ArtsDataCollection } from "@/utils/data";
import CoreAPIService from "./CoreAPIService";
import { API_ENDPOINTS } from "@/utils/api-integration";
import { ExampleArtsResponse } from "./interfaces/arts";

class CollectionService {
  getArtsCollection() {
    return CoreAPIService.get<ExampleArtsResponse>(
      `${API_ENDPOINTS.PUBLIC.GET_ART_NFT}`
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CollectionService();
