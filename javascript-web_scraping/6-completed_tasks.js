#!/usr/bin/node

const request = require('request');

request(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const todos = JSON.parse(body);
  const completedTasks = {};

  todos.forEach(task => {
    if (task.completed) {
      if (completedTasks[task.userId] === undefined) {
        completedTasks[task.userId] = 1;
      } else {
        completedTasks[task.userId]++;
      }
    }
  });

  console.log(completedTasks);
});
