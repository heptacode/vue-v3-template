import { createStore, StoreOptions } from 'vuex';

interface RootState {}

const store: StoreOptions<RootState> = {
  state: {},
  mutations: {},
  actions: {},
  modules: {},
};

export default createStore(store);
