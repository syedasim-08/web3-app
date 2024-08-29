
export interface ArtsNftData {
    _id: string;
    name: string;
    minting: string;
    price: number;
    imgUrl : string
  }
  
 export interface ExampleArtsResponse {
    data: ArtsNftData[];
  }