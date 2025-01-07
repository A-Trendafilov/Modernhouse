import { Box } from "@mui/material";

import { cardData } from "../data/cardData.jsx";
import CardComponent from "./common/CardComponent.jsx";
const SectionWithCards = () => {
  return (
    <Box
      sx={{
        display: "flex", // Use flexbox to arrange the cards
        flexDirection: "row", // Arrange cards horizontally
        flexWrap: "wrap", // Allow wrapping to new rows
        justifyContent: "center", // Center the cards horizontally
        gap: 10, // Add spacing between the cards
        paddingTop: 5
      }}
    >
      {cardData.map((card, index) => (
        <CardComponent
          key={index}
          Icon={card.Icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </Box>
  );
};

export default SectionWithCards;
