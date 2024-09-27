import useGenres from "./useGenres";

const useGenre = (platformId?: number) => {
  const { data } = useGenres();
  return data?.results.find((platform) => platform.id === platformId);
};

export default useGenre;
