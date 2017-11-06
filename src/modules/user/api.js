import axios from 'axios'

import {
  client,
  socket,
  usersService,
} from '../../feathers';


export async function login(loginPayload) {
  return await client.authenticate(loginPayload).catch(error => {
    return Object.assign(new Error(error.message), error);
  });

}
export async function logout(logoutPayload) {
  return await client.logout().catch(error => {
    return Object.assign(new Error(error.message), error);
  });
}