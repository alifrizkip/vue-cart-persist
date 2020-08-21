<template>
  <v-container>
    <v-row dense>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="3"
      >
        <v-card>
          <v-img
            :src="product.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
          </v-img>
          <v-card-title>
            {{ product.name }}
          </v-card-title>

          <v-card-subtitle>
            Rp{{ formatPrice(product.price) }}
          </v-card-subtitle>

          <v-card-subtitle>Lorem ipsum dolor sit amet...</v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="primary" @click="addToCart({ ...product, amount: 1 })">
              <v-icon color="white">mdi-cart-plus</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    products: [
      { id: 1, name: 'Apple', price: 5000, src: require('../assets/fruits/apple.jpg') },
      { id: 2, name: 'Banana', price: 7000, src: require('../assets/fruits/banana.jpg') },
      { id: 3, name: 'Cherry', price: 9000, src: require('../assets/fruits/cherry.jpg') },
      { id: 4, name: 'Grape', price: 11000, src: require('../assets/fruits/grape.jpg') },
      { id: 5, name: 'Kiwi', price: 13000, src: require('../assets/fruits/kiwi.jpg') },
      { id: 6, name: 'Mango', price: 15000, src: require('../assets/fruits/mango.jpg') },
      { id: 7, name: 'Orange', price: 19000, src: require('../assets/fruits/orange.jpg') },
      { id: 8, name: 'Papaya', price: 26000, src: require('../assets/fruits/papaya.jpg') },
      { id: 9, name: 'Pineapple', price: 37000, src: require('../assets/fruits/pineapple.jpg') },
      { id: 10, name: 'Strawberry', price: 48000, src: require('../assets/fruits/strawberry.jpg') },
      { id: 11, name: 'Watermelon', price: 50000, src: require('../assets/fruits/watermelon.jpg') },
    ]
  }),

  methods: {
    ...mapActions('cart', ['addToCart']),
  }
}
</script>
