import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { HStack, List, ListItem, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImmageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={2}>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImmageUrl(genre.image_background)}
              objectFit="cover"
            />
            <Button
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
