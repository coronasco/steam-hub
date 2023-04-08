import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { HStack, List, ListItem, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImmageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack marginY={2} borderRadius="5px">
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImmageUrl(genre.image_background)}
              objectFit="cover"
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
