type Move = 'rock' | 'paper' | 'scissors';
type Outcome = 'win' | 'lose' | 'draw';

const moves = ['rock', 'paper', 'scissors'] as const;

const opponentMove = () => moves[Math.floor(Math.random() * moves.length)];

export const play = (move: Move, opponent = opponentMove()): Outcome => {
  if (move === opponent) return 'draw';
  if (move === 'rock' && opponent === 'scissors') return 'win';
  if (move === 'paper' && opponent === 'rock') return 'win';
  if (move === 'scissors' && opponent === 'paper') return 'win';
  return 'lose';
};
