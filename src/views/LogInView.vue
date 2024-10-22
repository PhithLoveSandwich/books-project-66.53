<template>
    <div class="login-container">
      <h2>Log In</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
  
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
  
        <button type="submit" class="btn">Log In</button>
      </form>
      <router-link to="/register" class="register-link">Don't have an account? Register here</router-link>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2'; // นำเข้า SweetAlert2
  
  export default {
    name: "LogInView",
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        console.log('Logging in with', this.email, this.password);
  
        Swal.fire({
          title: 'ล็อคอินเสร็จสิ้น!',
          text: 'ยินดีต้อนรับ!',
          icon: 'success',
          confirmButtonText: 'ตกลง'
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 100px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .btn {
    width: 100%;
    padding: 10px;
    background-color: var(--first-color);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: var(--first-color-hover);
  }
  
  .register-link {
    display: block;
    text-align: center;
    margin-top: 15px;
    color: var(--first-color);
    text-decoration: none;
  }
  
  .register-link:hover {
    color: var(--first-color-hover);
  }
  </style>
  