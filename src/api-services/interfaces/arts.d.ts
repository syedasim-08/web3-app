
export interface ArtsNftData {
    id: number;
    name: string;
    minting: string;
    price: number;
    imgUrl : string
  }
  
 export interface ExampleArtsResponse {
    data: ArtsNftData[];
  }