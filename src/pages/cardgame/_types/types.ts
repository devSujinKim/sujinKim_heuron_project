export interface Player {
  id: number;
  name: string;
  cards: number[];
  score: number;
}

export interface GameResult {
  players: Player[];
  winner: Player;
}

export type Step = 'playerCount' | 'playerNames' | 'cardCount' | 'result';
