export const API_ENDPOINTS = {
  AUTH: {},
  PRIVATE: {
    POST_ART_NFT: "arts",
    POST_FILES: "file-upload",
  },
  PUBLIC: {
    GET_ART_NFT: "arts",
  },
} as const;

export const QUERIES_KEY = {
  AUTH: {},
  PRIVATE: {},
  PUBLIC: {
    GET_ART_NFT: "arts",
  },
} as const;
