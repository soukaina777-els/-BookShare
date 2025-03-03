<template>
<<<<<<< HEAD

  <div>
    <Navbar />
    <router-view />
  </div>

</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
</script>
=======
  <div>
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/library">Bibliothèque</router-link>
      <router-link to="/profile">Profil</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: #f8f8f8; /* Ajout d'un fond pour plus de lisibilité */
}

.router-link-active {
  font-weight: bold; /* Marquer la route active */
}

nav a {
  position: relative;
  color: black;
  cursor: pointer;
  font-size: 20px;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.25s;
}

nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: black;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

nav a:hover {
  color: white;
  background-color: black;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

nav a:hover::after {
  transform: scaleX(1);
}
</style>
>>>>>>> feeedbd (Mise à jour du projet)
