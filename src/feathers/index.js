import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import auth from 'feathers-authentication-client';
import io from 'socket.io-client';
import socketio from 'feathers-socketio/client';

var options = {
  header: 'Authorization',
  path: '/authentication',
  jwtStrategy: 'jwt',
  entity: 'user',
  service: 'users',
  cookie: 'feathers-jwt',
  storageKey: 'feathers-jwt',
  storage: localStorage
}

export let socket = io();
export let client = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(auth(options));


export let usersService = client.service('users');
export let messageService = client.service('messages');

messageService.on('created', (message) => {
  console.log("A Message Was Created:", message);
})