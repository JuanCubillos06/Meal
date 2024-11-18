import { Container, SkeletonText } from "@chakra-ui/react";

type Props = {};

function RecipeModalSketeleton({}: Props) {
  return (
    <Container>
      <SkeletonText
        spacing="4 "
        mt="4"
        mb="5"
        noOfLines={1}
        skeletonHeight={8}
      />
      <SkeletonText
        borderRadius={200}
        spacing="4 "
        noOfLines={1}
        skeletonHeight={280}
      />
      <SkeletonText mt="4" spacing="4 " noOfLines={5} />
    </Container>
  );
}

export default RecipeModalSketeleton;
