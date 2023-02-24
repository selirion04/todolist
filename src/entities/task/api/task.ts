import { Task } from '../../../shared/api';

const REQUEST_TIMEOUT = 1000;

let cards = [
  {
    id: 0,
    title: 'Test Task 0',
  },
  {
    id: 1,
    title: 'Test Task 1',
  },
];

export const getTaskList = () => new Promise<Task[]>(resolve => {
  setTimeout(() => resolve(cards), REQUEST_TIMEOUT);
});

export const addCard = (title: string) => new Promise<Task>(resolve => {
  setTimeout(() => {
    const newCard = { id: cards.length, title };
    cards = [ ...cards, newCard ];

    resolve(newCard);
  }, REQUEST_TIMEOUT)
})
