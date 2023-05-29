// Create a new JS file called `localStorage.js`

import * as localStorage from 'localStorage';
import * as db from 'database';

function storeTask(title, description, dueDate) {
  const task = {
    title,
    description,
    dueDate
  };

  db.insertTask(task);
}