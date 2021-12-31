import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

createServer({
  models: {
    todo: Model,
  },

  // seeds(server) {
  //   server.db.loadData({
  //     todos: [
  //       {
  //         id: 1,
  //         title: "Estudar React",
  //         description: "Estudar a trilha de React da Rocketseat",
  //         isDone: false,
  //         created_at: new Date("2021-12-30 09:00:00")
  //       },
  //       {
  //         id: 2,
  //         title: "Estudar Node",
  //         description: "Estudar a trilha de Node da Rocketseat",
  //         isDone: false,
  //         created_at: new Date("2021-12-31 09:00:00")
  //       }
  //     ]
  //   })
  // },

  routes() {
    this.namespace = "api"

    this.get("/todos", (schema) => {
      return schema.db.todos;
    });

    this.post("/todos", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("todo", data);
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
