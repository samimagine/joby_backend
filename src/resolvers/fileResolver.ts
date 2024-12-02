import { cards } from "../data/mockData";

export const fileResolver = {
  Query: {
    files: (_: any, { cardId }: { cardId: string }) =>
      cards.find((card) => card.id === cardId)?.files || [],
  },
};