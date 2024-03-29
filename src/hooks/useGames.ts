import { useInfiniteQuery } from '@tanstack/react-query'
import ms from "ms"
import APIClient, { FetchResponse } from '../services/api-client'
import { Platform } from './usePlatforms'
import useGameQueryStore from '../store'
import { ReactNode } from 'react'

const apiClient = new APIClient<Game>("/games")

export interface Game{
  description_raw: string,
  // description_raw: ReactNode
  id: number, 
  name: string,
  slug: string, 
  background_image: string,
  parent_platforms: {platform: Platform}[],
  metacritic: number, 
  rating_top: number
}

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery)

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1}) => 
      apiClient.getAll({
        params:{
          genres: gameQuery.genreId, 
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
        },
      }),
        
    // keepPreviousData: true,
    
    getNextPageParam: (lastPage, allPages) => {
      return lastPage .next ?  allPages.length + 1 : undefined;
    },
    
    staleTime: ms('24h')  //24hours
  })
}
  

export default useGames