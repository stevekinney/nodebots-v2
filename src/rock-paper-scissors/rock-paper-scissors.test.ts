import { expect, it } from 'vitest';
import { play } from './rock-paper-scissors';

it('should win when playing rock against scissors', () => {
  expect(play('rock', 'scissors')).toBe('win');
});

it('should lose when playing rock against paper', () => {
  expect(play('rock', 'paper')).toBe('lose');
});

it('should draw when playing rock against rock', () => {
  expect(play('rock', 'rock')).toBe('draw');
});

it('should win when playing paper against rock', () => {
  expect(play('paper', 'rock')).toBe('win');
});

it('should lose when playing paper against scissors', () => {
  expect(play('paper', 'scissors')).toBe('lose');
});

it('should draw when playing paper against paper', () => {
  expect(play('paper', 'paper')).toBe('draw');
});

it('should win when playing scissors against paper', () => {
  expect(play('scissors', 'paper')).toBe('win');
});

it('should lose when playing scissors against rock', () => {
  expect(play('scissors', 'rock')).toBe('lose');
});

it('should draw when playing scissors against scissors', () => {
  expect(play('scissors', 'scissors')).toBe('draw');
});
