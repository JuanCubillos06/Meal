import {
  Image,
  Text,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Heading,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { MealDetails } from "../types";

type Props = {
  data: MealDetails;
};
const joinIngredients = (data: MealDetails) => {
  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingridient = data[`strIngredient${i}`];
    const measure = data[`strMeasure${i}`];
    if (ingridient !== "") {
      ingredients.push(`${ingridient} - ${measure}`);
    }
  }
  return ingredients;
};
function RecipeModalContent({ data }: Props) {
  const ingredientes = joinIngredients(data);
  console.log(ingredientes);
  return (
    <>
      <ModalHeader>{data.strMeal}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image
          width="100%"
          src={data.strMealThumb}
          alt={data.strMeal}
          borderRadius="lg"
        />
        <Heading mt="4" mb="4" size="md">
          Ingredientes
        </Heading>

        <OrderedList>
          {ingredientes.map((ingrediente) => (
            <ListItem key={ingrediente}>{ingrediente}</ListItem>
          ))}
        </OrderedList>
        <Text whiteSpace="pre-line" mt="4">
          {data.strInstructions}
        </Text>
      </ModalBody>
    </>
  );
}

export default RecipeModalContent;
