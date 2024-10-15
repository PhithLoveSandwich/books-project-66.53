<template>
  <div class="about-view">
    <h1>About Us</h1>
    <p>Welcome to our bookstore! We are dedicated to providing a wide selection of books for all readers. Our mission is to help you find your next favorite book, whether it’s a textbook for your studies or a captivating novel for your leisure.</p>
    <p>At our bookstore, we believe in the power of stories to inspire, educate, and entertain. Our team of passionate book lovers carefully curates a diverse collection that spans various genres, ensuring that there is something for everyone.</p>
    <p>In addition to books, we host events such as author signings, book clubs, and workshops that foster a community of readers and writers. Join us in celebrating literature and the joy it brings!</p>
    <p>Thank you for visiting us, and happy reading! We hope to see you soon.</p>
    
    <div class="creator-message">
      <h2>Message from the Creator</h2>
      <p>This project is created as part of my presentation work. I am passionate about books and want to share my love for reading with others. I hope you find this bookstore a welcoming space for all your reading needs!</p>
    </div>

    <div class="creator-image">
      <img src="@/assets/img/avatar.jpg" alt="Creator" />
      <p>Here is a picture of me!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.about-view {
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
  text-align: center;
  margin-top: 30px;
}

p {
  color: #495057;
  font-size: 1.2em;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 15px;
}

.creator-image {
  text-align: center;
  margin-top: 30px; /* Space above the image */
}

.creator-image img {
  max-width: 100%; /* Make the image responsive */
  height: auto; /* Maintain aspect ratio */
  border-radius: 8px; /* Round corners of the image */
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
