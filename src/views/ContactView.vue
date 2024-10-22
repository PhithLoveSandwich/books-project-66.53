<template>
  <div class="contact-view">
    <h1>Contact Us</h1>
    <p>If you have any questions or need further information, please feel free to reach out to us!</p>

    <div class="contact-info">
      <h2>Get in Touch</h2>
      <p>Email: <a href="mailto:info@bookstore.com">info@bookstore.com</a></p>
      <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
      <p>Address: 123 Book St, Literature City, ST 12345</p>
    </div>

    <form @submit.prevent="submitForm" class="contact-form">
      <h2>Contact Form</h2>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>

    <div class="map-container">
      <h2>Our Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.0079910374825!2d100.02287022485761!3d13.838558586562414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2e5267c8ff173%3A0xad38808cf8120641!2z4Liq4Liy4LiC4Liy4Lin4Li04LiK4Liy4Lin4Li04Lio4Lin4LiB4Lij4Lij4Lih4LiL4Lit4Lif4LiV4LmM4LmB4Lin4Lij4LmMIOC4oeC4q-C4suC4p-C4tOC4l-C4ouC4suC4peC4seC4ouC4o-C4suC4iuC4oOC4seC4j-C4meC4hOC4o-C4m-C4kOC4oQ!5e0!3m2!1sth!2sth!4v1728960213906!5m2!1sth!2sth"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // For now, just log the form data to the console
      console.log("Form submitted:", this.formData);
      alert("Thank you for your message! We'll get back to you soon.");
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    }
  }
};
</script>

<style scoped>
.contact-view {
  padding: 60px 20px; /* Increased padding-top for more space from Navbar */
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px; /* Limit max width for better readability */
  margin: auto; /* Center the content */
}

h1 {
  color: #343a40;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5em; /* Larger font size for the heading */
}

h2 {
  color: #495057;
  margin-top: 30px;
}

p {
  color: #495057;
  font-size: 1.2em;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 15px;
}

.contact-info {
  margin-bottom: 30px; /* Space between contact info and form */
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  width: 100%; /* Full width */
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #343a40;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #495057; /* Darker on hover */
}

.map-container {
  margin-top: 30px; /* Space above the map */
  text-align: center; /* Center the map */
}

/* Add a media query for responsiveness */
@media (max-width: 600px) {
  h1 {
    font-size: 2em; /* Smaller font size for mobile */
  }

  h2 {
    font-size: 1.5em; /* Smaller font size for mobile */
  }

  p {
    font-size: 1em; /* Smaller font size for mobile */
  }
}
</style>
