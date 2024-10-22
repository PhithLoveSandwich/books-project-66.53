<template>
    <div class="register-container">
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
  
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
  
        <button type="submit" class="btn">Register</button>
      </form>
      <router-link to="/login" class="login-link">Already have an account? Log in here</router-link>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2'; // นำเข้า SweetAlert2
  
  export default {
    name: "RegisterView",
    data() {
      return {
        name: '',
        email: '',
        password: '',
      };
    },
    methods: {
      handleRegister() {
        // Logic for handling registration goes here
        console.log('Registering with', this.name, this.email, this.password);
        
        // แสดงกล่องข้อความเมื่อการลงทะเบียนเสร็จสิ้น
        Swal.fire({
          title: 'ลงทะเบียนเสร็จสิ้น!',
          text: 'ยินดีต้อนรับ!',
          icon: 'success',
          confirmButtonText: 'ตกลง'
        });
        
        // คุณสามารถรวมกับแบ็คเอนด์ของคุณสำหรับการลงทะเบียน
      },
    },
  };
  </script>
  
  <style scoped>
  .register-container {
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
  
  input[type="text"],
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
  
  .login-link {
    display: block;
    text-align: center;
    margin-top: 15px;
    color: var(--first-color);
    text-decoration: none;
  }
  
  .login-link:hover {
    color: var(--first-color-hover);
  }
  </style>
  