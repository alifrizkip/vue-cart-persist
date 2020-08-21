<template>
  <v-container>
    <p class="display-3 font-weight-light	text-center pa-4">SHOPPING CART</p>
    <v-row>
      <v-col :cols="12" md="12" sm="12" >
        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-center">ITEM</th>
              <th class="text-center">PRICE</th>
              <th class="text-center">QUANTITY</th>
              <th class="text-center">TOTAL</th>
              <th class="text-center"></th>
            </tr>
            </thead>
            <tbody>
            <tr
              v-for="(product, idx) in carts"
              :key="idx"
            >
              <td>
                <v-list-item
                key="1"
                @click="true"
              >
                <v-list-item-avatar>
                  <v-img :src="product.src"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title >{{ product.name }}</v-list-item-title>
                  <v-list-item-subtitle>Lorem ipsum dolor sit amet...</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item></td>
              <td>Rp{{ formatPrice(product.price) }}</td>
              <td>
                <v-btn background-color="primary" small fab class="ma-2" color="primary">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <v-text-field
                  class="pt-10"
                  label="Outlined"
                  style="width:80px;display:inline-block"
                  single-line
                  outlined
                  v-model="product.amount"
                  min="1"
                  type="number"
                ></v-text-field>
                <v-btn background-color="primary" small fab class="ma-2" color="primary">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </td>
              <td>Rp{{ formatPrice(product.price * product.amount) }}</td>
              <td>
                <v-btn background-color="primary" small fab class="ma-2" color="primary">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      carts: [
        { id: 1, name: 'Apple', price: 5000, src: require('../assets/fruits/apple.jpg'), amount: 3 },
        { id: 2, name: 'Banana', price: 7000, src: require('../assets/fruits/banana.jpg'), amount: 7 },
        { id: 3, name: 'Cherry', price: 9000, src: require('../assets/fruits/cherry.jpg'), amount: 2 },
      ]
    }),
  }
</script>
