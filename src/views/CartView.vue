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
            <button @click="confirmRemove(index)">Remove</button>
          </div>
        </li>
      </ul>
      <div class="total-price">
        <h2>Total Price: ${{ discountedTotalPrice.toFixed(2) }}</h2>
      </div>
      <button class="checkout-button" @click="checkout">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'; // Import mapGetters and mapMutations
import Swal from 'sweetalert2'; // Import SweetAlert2

export default {
  computed: {
    ...mapGetters(['cartItems']), // ดึงรายการสินค้า
    discountedTotalPrice() {
      const totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
      return this.cartItems.length >= 2 ? totalPrice * 0.8 : totalPrice; // ลด 20% ถ้ามีหนังสือ 2 เล่มหรือมากกว่า
    },
  },
  methods: {
    ...mapMutations(['removeFromCart']), // ใช้ mapMutations เพื่อลบสินค้าจากตะกร้า
    
    // ฟังก์ชันสำหรับการแจ้งเตือนเมื่อชำระเงินเสร็จสิ้น
    checkout() {
      Swal.fire({
        title: 'ชำระเสร็จสิ้น!',
        text: 'ขอบคุณที่ช้อปปิ้งกับเรา!',
        icon: 'success',
        confirmButtonText: 'ตกลง'
      });
      // Implement additional checkout functionality here
    },

    // ฟังก์ชันสำหรับแสดงการแจ้งเตือนเมื่อทำการลบสินค้า
    confirmRemove(index) {
      Swal.fire({
        title: 'ลบสินค้าออกแล้ว',
        text: 'คุณได้ลบสินค้าจากตะกร้าแล้ว',
        icon: 'error', // เครื่องหมายกากบาท
        confirmButtonText: 'ตกลง'
      }).then(() => {
        this.removeFromCart(index); // ลบสินค้าจากตะกร้า
      });
    },
  },
};
</script>

<style scoped>
.cart-view {
  padding: 60px 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
}

h1 {
  color: #343a40;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5em;
}

.cart-items {
  list-style-type: none;
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
  background-color: #495057;
}

.total-price {
  text-align: center;
  margin: 20px 0;
  font-size: 1.5em;
}

.checkout-button {
  display: block;
  margin: 0 auto;
}
</style>
