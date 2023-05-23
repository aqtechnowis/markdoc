import {Callout} from '../../components';
import { NewCallOut } from '../../components/newCallout';

export const callout = {
  render: Callout,
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
};

export const newCallOut = {
  render: NewCallOut,
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
};
