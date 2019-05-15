import { createMatchSelector } from 'connected-react-router';
import config from '../container/config';
const [AVATAR] = 'avatar';
const [getColor] = [
  //projectQuerySelector
  state => {
    const { colors } = state.modules[AVATAR].entities;

    return colors;
  },
];

export default {
  getNewColour,
};
