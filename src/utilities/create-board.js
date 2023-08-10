import five from 'johnny-five';

/// <reference path="johnny-five" />

/**
 * Returns a promise with a Johnny-Five board instance when ready.
 * @param {five.BoardOption} options
 * @returns {Promise<five.Board>}
 */
const createBoard = async (options) => {
  return new Promise((resolve, reject) => {
    const board = new five.Board(options);
    board.on('ready', () => resolve(board));
    board.on('error', (error) => reject(error));
  });
};

export default createBoard;
