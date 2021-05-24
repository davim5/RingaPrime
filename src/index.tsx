import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs';
import Matrix from './images/movie_posters/matrix.jpg'

createServer({
  models:{
    movie: Model,
  },
  seeds(server) {
    server.db.loadData({
      movies:[
        {
          id:1,
          title:"Matrix",
          synopsis:"Em um futuro próximo, Thomas Anderson (Keanu Reeves), um jovem programador de computador que mora em um cubículo escuro, é atormentado por estranhos pesadelos nos quais encontra-se conectado por cabos e contra sua vontade, em um imenso sistema de computadores do futuro...",
          genre:"action",
          duration: "1h50",
          year: '1998',
          age: '16',
          poster: Matrix
        },
        {
          id:2,
          title:"Matrix",
          synopsis:"Em um futuro próximo, Thomas Anderson (Keanu Reeves), um jovem programador de computador que mora em um cubículo escuro, é atormentado por estranhos pesadelos nos quais encontra-se conectado por cabos e contra sua vontade, em um imenso sistema de computadores do futuro...",
          genre:"action",
          duration: "1h50",
          year: '1998',
          age: '16',
          poster: Matrix
        },
        {
          id:3,
          title:"Matrix",
          synopsis:"Em um futuro próximo, Thomas Anderson (Keanu Reeves), um jovem programador de computador que mora em um cubículo escuro, é atormentado por estranhos pesadelos nos quais encontra-se conectado por cabos e contra sua vontade, em um imenso sistema de computadores do futuro...",
          genre:"action",
          duration: "1h50",
          year: '1998',
          age: '16',
          poster: Matrix
        },
      ],
    })
  },
  routes(){
    this.namespace = 'api';
    this.get('/movies', () => {
      return this.schema.all('movie');
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
