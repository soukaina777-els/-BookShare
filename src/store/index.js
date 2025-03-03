import { createStore } from 'vuex';

<<<<<<< HEAD
import auth from "./auth";// Authentification
import books from "./books"; // Bibliothèque

const store = createStore({
  modules: {
    auth,
    books,
  }
});

export default store;
=======
import auth from "./auth"; // Importer le module auth

const store = createStore({
  modules: {
    auth, // Ajouter auth.js comme module Vuex
  },
  state() {
    return {
      user: { name: "Utilisateur", books: [] }
    };
  },
  mutations: {
    addBook(state, book) {
      state.user.books.push(book);
    }
  },
  actions: {
    addBook(context, book) {
      context.commit('addBook', book);
    }
  }
});

export default store;
>>>>>>> feeedbd (Mise à jour du projet)
