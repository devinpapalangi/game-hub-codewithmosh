import useTrailers from "../hooks/useTrailers";

interface Props {
  slug?: string;
}
const GameTrailers = ({ slug }: Props) => {
  const { data: gameTrailers, isLoading, error } = useTrailers(slug!);

  if (error) throw error;
  if (isLoading) return null;

  const firstTrailer = gameTrailers?.results[0];

  if (!firstTrailer) return null;
  return (
    <video
      autoPlay
      loop
      src={firstTrailer?.data.max}
      poster={firstTrailer?.preview}
      controls
    ></video>
  );
};

export default GameTrailers;
