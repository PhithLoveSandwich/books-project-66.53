// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    cartItems: [], // เก็บรายการสินค้าในตะกร้า
  },
  mutations: {
    addToCart(state, book) {
      state.cartItems.push(book); // เพิ่มสินค้าลงในตะกร้า
    },
    removeFromCart(state, index) {
      state.cartItems.splice(index, 1); // ลบสินค้าจากตะกร้า
    },
  },
  getters: {
    cartItems: (state) => state.cartItems, // ดึงรายการในตะกร้า
    totalPrice: (state) =>
      state.cartItems.reduce((sum, item) => sum + item.price, 0), // รวมราคาสินค้าในตะกร้า
  },
});
