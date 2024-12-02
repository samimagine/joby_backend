import { cards } from "../data/mockData";

export const cardResolver = {
  Query: {
    cards: () => cards,
    card: (_: any, { id }: { id: string }) => cards.find((card) => card.id === id),
  },
  Mutation: {
    addCard: (_: any, { input }: { input: any }) => {
      const newCard = {
        id: String(Date.now()),
        title: input.title,
        priority: input.priority,
        estimatedShippingDate: input.estimatedShippingDate,
        orderDetails: input.orderDetails,
        files: [],
      };

      cards.push(newCard);
      return newCard;
    },
    editCard: (_: any, { input }: { input: any }) => {
      const cardIndex = cards.findIndex((card) => card.id === input.id);
      if (cardIndex === -1) {
        throw new Error(`Card with ID ${input.id} not found`);
      }

      const updatedCard = {
        ...cards[cardIndex],
        ...input,
        orderDetails: {
          ...cards[cardIndex].orderDetails,
          ...input.orderDetails,
        },
      };

      cards[cardIndex] = updatedCard;
      return updatedCard;
    },
    deleteCard: (_: any, { id }: { id: string }) => {
      const cardIndex = cards.findIndex((card) => card.id === id);
      if (cardIndex === -1) {
        return { success: false };
      }
      cards.splice(cardIndex, 1);
      return { success: true };
    },
  },
};