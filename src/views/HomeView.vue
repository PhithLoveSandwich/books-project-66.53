<template>
  <div class="home-view">
    <h1>Book List</h1>
    <div class="ad-banner">
      <h3>Special Promotion! Get 20% off when you buy 2 or more books!</h3>
    </div>
    <div class="greeting-message">
      <p>Welcome to our bookstore! We are thrilled to have you here. Explore our wide range of books and find your next favorite!</p>
    </div>

    <div class="category" v-for="(category, index) in bookCategories" :key="index">
      <h2>{{ category.name }}</h2>
      <div class="books">
        <div class="book-scroll">
          <div v-for="(book, bookIndex) in category.books" :key="bookIndex" class="book-card">
            <img :src="book.image" alt="Book Image" class="book-image" />
            <div class="book-info">
              <h3 class="book-title">{{ book.title }}</h3>
              <p class="book-author">{{ book.author }}</p>
              <p class="book-price">Price: {{ book.price }} THB</p>
              <p class="book-rating">⭐ {{ book.rating }}/5.0</p>
            </div>
            <div class="book-buttons">
              <button @click="orderBook(book)">Order</button>
              <button @click="viewDetails(book)">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      bookCategories: [
        {
          name: 'Textbooks',
          books: [
            { title: 'Introduction to Thai Language', author: 'Somsak Chaiyan', image: require('@/assets/img/image1.jpg'), price: 250, rating: 4.5 },
            { title: 'Basic Mathematics', author: 'Orawan Boontavee', image: require('@/assets/img/image2.jpg'), price: 300, rating: 4.0 },
            { title: 'Science 101', author: 'Siriporn Sriwong', image: require('@/assets/img/image3.jpg'), price: 280, rating: 4.2 },
            { title: 'History of Thailand', author: 'Pakorn Apirak', image: require('@/assets/img/image4.jpg'), price: 320, rating: 4.8 },
            { title: 'English for Communication', author: 'Miss Sukanya', image: require('@/assets/img/image5.jpg'), price: 270, rating: 4.6 },
            { title: 'Basic Chemistry', author: 'Surachai Kamron', image: require('@/assets/img/image6.jpg'), price: 290, rating: 4.1 },
            { title: 'Biology: An Introduction', author: 'Udomchai Supachai', image: require('@/assets/img/image7.jpg'), price: 310, rating: 4.4 },
            { title: 'Basic Physics', author: 'Piengphol Chumnang', image: require('@/assets/img/image8.jpg'), price: 330, rating: 4.7 },
          ],
        },
        {
          name: 'Fiction',
          books: [
            { title: 'Love Lies', author: 'Jirapa Ploenchai', image: require('@/assets/img/image9.jpg'), price: 350, rating: 4.5 },
            { title: 'Memories that Fade', author: 'Anchisa Dhamma', image: require('@/assets/img/image10.jpg'), price: 360, rating: 4.3 },
            { title: 'Flame of the Heart', author: 'Prathumchat Lai Thai', image: require('@/assets/img/image11.jpg'), price: 340, rating: 4.9 },
            { title: 'The Floating Tower', author: 'Wichai Chatree', image: require('@/assets/img/image12.jpg'), price: 370, rating: 4.2 },
            { title: 'Love in Spring', author: 'Nidnoi Chuchip', image: require('@/assets/img/image13.jpg'), price: 380, rating: 4.6 },
            { title: 'Like a Dream', author: 'Jintana Jamjaroen', image: require('@/assets/img/image14.jpg'), price: 400, rating: 4.0 },
            { title: 'Love That Cannot Be Forgotten', author: 'Nuntiya Nontchai', image: require('@/assets/img/image15.jpg'), price: 420, rating: 4.8 },
            { title: 'Parallel Love', author: 'Boonyarat Wongthong', image: require('@/assets/img/image16.jpg'), price: 440, rating: 4.7 },
          ],
        },
        {
          name: 'Supplementary Books',
          books: [
            { title: 'Exam Success Tips', author: 'Dr. Sukhum Sanan', image: require('@/assets/img/image17.jpg'), price: 250, rating: 4.5 },
            { title: 'Legal Exam Guide', author: 'Srilanga Thongsuk', image: require('@/assets/img/image18.jpg'), price: 300, rating: 4.3 },
            { title: 'Introduction to Computers', author: 'Peeraphat Boonrod', image: require('@/assets/img/image19.jpg'), price: 280, rating: 4.2 },
            { title: 'Finance and Banking', author: 'Apichart Phinij', image: require('@/assets/img/image20.jpg'), price: 320, rating: 4.6 },
            { title: 'Business English', author: 'Latdawan Panthana', image: require('@/assets/img/image21.jpg'), price: 270, rating: 4.4 },
            { title: 'Digital Marketing', author: 'Yutthana Deeja', image: require('@/assets/img/image22.jpg'), price: 290, rating: 4.1 },
            { title: 'Presentation Skills', author: 'Phumjai Suksawasdee', image: require('@/assets/img/image23.jpg'), price: 310, rating: 4.0 },
            { title: 'Teamwork Skills', author: 'Apichai Janya', image: require('@/assets/img/image24.jpg'), price: 330, rating: 4.3 },
          ],
        },
        // ... (other categories)
      ],
    };
  },
  methods: {
    ...mapMutations(['addToCart']),
    orderBook(book) {
      this.addToCart(book);
      alert(`Added ${book.title} to cart!`);
    },
    viewDetails(book) {
      alert(`Viewing details for ${book.title}`);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.home-view {
  padding: 20px;
  background-color: #f8f9fa;
  font-family: 'Roboto', sans-serif; /* Use Google Font */
}

h1 {
  text-align: center;
  color: #343a40;
  margin-bottom: 20px;
  font-size: 2.5em;
}

.ad-banner {
  background-color: #ffcc00;
  padding: 15px;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2em;
  color: #000;
}

.category {
  margin-bottom: 40px;
}

h2 {
  color: #495057;
  font-size: 1.8em;
  margin-bottom: 10px;
}

.books {
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 10px;
}

.book-scroll {
  display: inline-flex;
}

.book-card {
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  overflow: hidden;
  width: 220px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
}

.book-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.book-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.book-info {
  padding: 10px;
  text-align: center;
  background-color: #f1f3f5;
}

.book-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 5px 0;
  color: #212529;
}

.book-author {
  font-size: 1em;
  color: #868e96;
  margin-bottom: 10px;
}

.book-price {
  font-size: 1.1em;
  color: #28a745;
  margin-bottom: 10px;
}

.book-rating {
  font-size: 1.1em;
  color: #f39c12;
}

.book-buttons {
  display: flex;
  justify-content: space-between; /* Adjusted for spacing between buttons */
  padding: 10px;
  background-color: #f8f9fa;
}

button {
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9em;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out; /* Add transform for scaling effect */
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05); /* Scale effect on hover */
}
</style>
