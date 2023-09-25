import { types } from 'mobx-state-tree';

const Address = types.model({
    street: types.string,
    suite: types.string,
    city: types.string,
    zipcode: types.string,
    geo: types.model({
        lat: types.string,
        lng: types.string,
    }),
});

export const User = types.model({
    id: types.number,
    name: types.string,
    username: types.string,
    email: types.string,
    address: Address,
});
