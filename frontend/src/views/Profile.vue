<template>
  <div v-if="user">
    <h2>Bienvenue, {{ user.nom }}</h2>
    <p>Email: {{ user.email }}</p>
    <button @click="logout">Déconnexion</button>
  </div>
  <p v-else>Chargement...</p>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["getUser"]),
    user() {
      return this.getUser;
    },
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    logout() {
      this.logout();
      this.$router.push("/login");
    },
  },
};
</script>

 
<style>


</style> 