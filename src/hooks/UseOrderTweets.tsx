/**
 * Sort array based on an key
 *
 * @param data array to order
 * @param key key to order the array
 * @returns {array} sorted array
 */
export function useOrderTweets<T>(data: T[], key: string): Array<T> {
  const result: T[] = [...data]
  return result.sort((a: any, b: any) => a[key].localeCompare(b[key]))
}
