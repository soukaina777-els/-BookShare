<template>

  <div>
    <Navbar />
    <router-view />
  </div>

</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import authService from "@/services/authService"
</script>
