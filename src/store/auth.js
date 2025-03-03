import axios from "axios";

const state = {
  user: null, // Utilisateur connecté
<<<<<<< HEAD
  token: localStorage.getItem("token") || null, 
};

const getters = {
  isAuthenticated: (state) => !!state.token, 
  getUser: (state) => state.user, 
=======
  token: localStorage.getItem("token") || null, // Stocker le token JWT
};

const getters = {
  isAuthenticated: (state) => !!state.token, // Vérifie si l'user est connecté
  getUser: (state) => state.user, // Récupère les infos utilisateur
>>>>>>> feeedbd (Mise à jour du projet)
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_TOKEN(state, token) {
    state.token = token;
    localStorage.setItem("token", token); // Sauvegarde le token
  },
  LOGOUT(state) {
    state.user = null;
    state.token = null;
    localStorage.removeItem("token"); // Supprime le token
  },
};

<<<<<<< HEAD

const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", credentials);
=======
const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", credentials);
>>>>>>> feeedbd (Mise à jour du projet)
      commit("SET_USER", response.data.user);
      commit("SET_TOKEN", response.data.token);
    } catch (error) {
      console.error("Erreur de connexion ❌", error.response?.data);
    }
  },

  async register({ commit }, userData) {
    try {
<<<<<<< HEAD
      const response = await axios.post("http://localhost:3000/api/auth/inscription", userData);
=======
      const response = await axios.post("http://localhost:5000/api/auth/inscription", userData);
>>>>>>> feeedbd (Mise à jour du projet)
      commit("SET_USER", response.data.user);
      commit("SET_TOKEN", response.data.token);
    } catch (error) {
      console.error("Erreur d'inscription ❌", error.response?.data);
    }
<<<<<<< HEAD

=======
>>>>>>> feeedbd (Mise à jour du projet)
  },

  logout({ commit }) {
    commit("LOGOUT");
  },
<<<<<<< HEAD

  async resetPassword({ commit }, email) {
    try {
      await axios.post("http://localhost:3000/api/auth/reset-password", { email });
      return { success: true, message: "Email de réinitialisation envoyé ✅" };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || "Erreur lors de la réinitialisation ❌" };
    }
  }
};


=======
};

>>>>>>> feeedbd (Mise à jour du projet)
export default {
  namespaced: true, // Permet d'appeler les actions avec "auth/login"
  state,
  getters,
  mutations,
  actions,
};
<<<<<<< HEAD

=======
>>>>>>> feeedbd (Mise à jour du projet)
