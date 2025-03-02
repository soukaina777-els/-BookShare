import { createStore } from 'vuex';

import auth from "./auth";// Authentification
import books from "./books"; // Bibliothèque

const store = createStore({
  modules: {
    auth,
    books,
  }
});

export default store;