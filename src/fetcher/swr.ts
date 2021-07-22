import useSWR from 'swr'

export function useFetch(url: string, revalidateOnFocus: boolean = false) {
  console.log('swr')
  console.log(url)
  const { data, error, mutate } = useSWR(
    url,
    async (url) => {
      console.log(url)
      const response = await fetch(url)
      const data = await response.json()

      return data
    },
    { revalidateOnFocus: revalidateOnFocus }
  )

  return { data, error, mutate }
}
