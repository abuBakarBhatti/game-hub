import { HStack, ListItem, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres';


const GenreSkeleton = () => {
    const {data} = useGenres()
    return (
      <HStack>
        <SkeletonCircle size='35px' />
        <SkeletonText mt='1' spacing='2' skeletonHeight='2' >Genre</SkeletonText>
      </HStack>
    );
  }
  
  export default GenreSkeleton