import { Button, HStack, Image, List, ListItem, Skeleton, Text } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import GenreSkeleton from './GenreSkeleton'

interface Props{
  onSelectGenre: (genre: Genre) => void,
  selectedGenre1: Genre | null
}

const GenreList = ({selectedGenre1, onSelectGenre}: Props) => {
    const {data, isLoading, error} = useGenres()
    const skeletons = [1, 2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    if (error) return null
  return (  
    <List>
        {isLoading && skeletons.map(skeleton => <GenreSkeleton key={skeleton}></GenreSkeleton>)}
        {data.map(genre => 
        <ListItem key={genre.id} paddingY="5px" >
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
            <Button fontWeight={ selectedGenre1?.id === genre.id ?  'bold' : 'normal' } variant="link" fontSize="lg" onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList