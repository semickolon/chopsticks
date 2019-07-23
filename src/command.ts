export type GameCommandTypes = 'none' | 'surrender';

export interface GameCommand {
  type: GameCommandTypes;
  [k: string]: keyof any;
}

export default {
  none(): GameCommand {
    return {
      type: 'none'
    };
  },
  surrender(): GameCommand {
    return {
      type: 'surrender',
    };
  }
};
