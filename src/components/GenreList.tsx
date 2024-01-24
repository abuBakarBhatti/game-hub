import { Button, HStack, Heading, Image, List, ListItem, Skeleton, Text } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import GenreSkeleton from './GenreSkeleton'

interface Props{
  onSelectGenre: (genre: Genre) => void,
  selectedGenreId?: number;
}

const GenreList = ({selectedGenreId, onSelectGenre}: Props) => {
    const {data, isLoading, error} = useGenres()
    const skeletons = [1, 2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

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
            <Button whiteSpace="normal" textAlign="left" fontWeight={ selectedGenreId === genre.id ?  'bold' : 'normal' } variant="link" fontSize="lg" onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>)}
    </List>
    </>
  ) 
}

export default GenreList