<template>
  <div class="cart-view">
    <h1>Your Shopping Cart</h1>
    <div v-if="cartItems.length === 0" class="empty-cart">
      <p>Your cart is empty. Start adding some books!</p>
    </div>
    <div v-else>
      <ul class="cart-items">
        <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
          <div class="item-details">
            <h2>{{ item.title }}</h2>
            <p>Price: ${{ item.price.toFixed(2) }}</p>
            <button @click="removeFromCart(index)">Remove</button>
          </div>
        </li>
      </ul>
      <div class="total-price">
        <h2>Total Price: ${{ totalPrice.toFixed(2) }}</h2>
      </div>
      <button class="checkout-button" @click="checkout">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'; // Import mapGetters and mapMutations

export default {
  computed: {
    ...mapGetters(['cartItems', 'totalPrice']), // ดึงรายการสินค้าและราคารวมจาก store
  },
  methods: {
    ...mapMutations(['removeFromCart']), // ใช้ mapMutations เพื่อลบสินค้าจากตะกร้า
    checkout() {
      alert('Proceeding to checkout...');
      // Implement checkout functionality here
    },
  },
};
</script>


<style scoped>
.cart-view {
  padding: 60px 20px; /* Increased padding for spacing */
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

.cart-items {
  list-style-type: none; /* Remove default list style */
  padding: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}

.item-details {
  flex-grow: 1;
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

.total-price {
  text-align: center;
  margin: 20px 0;
  font-size: 1.5em; /* Larger font size for total price */
}

.checkout-button {
  display: block;
  margin: 0 auto; /* Center the checkout button */
}
</style>
