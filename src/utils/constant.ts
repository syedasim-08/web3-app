export const parseBoolean = (value?: string) => {
    return value && value.toLowerCase() === 'true'
  }
export const IS_PRODUCTION = parseBoolean(process.env.NEXT_PUBLIC_IS_PRODUCTION)

export const BASE_API_ENDPOINT = process.env.NEXT_PUBLIC_BASE_URL

export enum SOLAV_NETWORKS {
  ETHEREUM = '1',
  POLYGON = '2',
}

