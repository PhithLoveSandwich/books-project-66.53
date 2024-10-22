<template>
  <nav class="navbar">
    <div class="nav-logo">
      <h1 class="nav-name">Thanawat Bookstore</h1>
    </div>
    <ul class="nav-menu">
      <li class="nav_list"><router-link to="/" class="nav-link">Home</router-link></li>
      <li class="nav_list"><router-link to="/about" class="nav-link">About</router-link></li>
      <li class="nav_list">
        <router-link to="/cart" class="nav-link">
          Cart <span v-if="cartItems.length">({{ cartItems.length }})</span>
        </router-link>
      </li>
      <li class="nav_list"><router-link to="/contact" class="nav-link">Contact</router-link></li>
    </ul>
    <!-- แก้ไขปุ่ม Log In ให้ใช้ router-link -->
    <router-link to="/login" class="btn">Log In</router-link>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "AppNavbar", // เปลี่ยนชื่อ component ที่นี่
  computed: {
    ...mapGetters(['cartItems']),
  },
};
</script>
