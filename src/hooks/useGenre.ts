import genres from "../data/genres";
import useGenres from "./useGenres";

const UseGenre = (id?: number) => {
    const {data: genres} = useGenres()
    return genres?.results.find((g) => g.id === id);
}
export default UseGenre