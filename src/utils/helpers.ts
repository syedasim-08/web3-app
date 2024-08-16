import { AnyObject } from "@/interfaces"

export const getQueries = (obj: AnyObject): string => {
    return Object.keys(obj ?? {})
      .map(item => `${item}=${obj[item]}`)
      .join('&')
  }
  