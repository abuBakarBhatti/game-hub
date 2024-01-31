import { Button, HStack, Heading, Image, List, ListItem } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import useGameQueryStore from '../store'
import GenreSkeleton from './GenreSkeleton'

const GenreList = () => {
    const {data, isLoading, error} = useGenres()
    const skeletons = [1, 2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
    const setSelectedGenreId =  useGameQueryStore(s => s.setGenreId)

    if (error) return null 
  return (  
    <>
    <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
    <List>
        {isLoading && skeletons.map(skeleton => <GenreSkeleton key={skeleton}></GenreSkeleton>)}
        {data?.results.map(genre => 
        <ListItem key={genre.id} paddingY="5px" >
          <HStack>
            <Image boxSize="32px" objectFit="cover" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
            <Button whiteSpace="normal" textAlign="left" fontWeight={ selectedGenreId === genre.id ?  'bold' : 'normal' } variant="link" fontSize="lg" onClick={() => setSelectedGenreId(genre.id)}>{genre.name}</Button>
          </HStack>
        </ListItem>)}
    </List>
    </>
  ) 
}

export default GenreList