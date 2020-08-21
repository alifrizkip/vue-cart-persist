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
              <tr v-show="carts.length < 1">
                <td colspan="5">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="text-center">No products in shopping cart!</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </td>
              </tr>
              <tr v-show="carts.length >= 1">
                <td colspan="3" class="text-right">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="text-right">Total Products Price :</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </td>
                <td colspan="2">Rp{{ formatPrice(carts.reduce((sum, product) => sum + (product.price * product.amount), 0)) }}</td>
              </tr>
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
                  <v-btn background-color="primary" small fab class="ma-2" color="primary" @click="decrementCartItem(idx)">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <v-text-field
                    :disabled="true"
                    class="pt-10"
                    label="Outlined"
                    style="width:80px;display:inline-block;color:black;"
                    single-line
                    outlined
                    v-model="product.amount"
                    min="1"
                    type="number"
                  ></v-text-field>
                  <v-btn background-color="primary" small fab class="ma-2" color="primary" @click="incrementCartItem(idx)">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </td>
                <td>Rp{{ formatPrice(product.price * product.amount) }}</td>
                <td>
                  <v-btn background-color="primary" small fab class="ma-2" color="primary" @click="deleteCartItem(idx)">
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
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('cart', {
      carts: (state) => state.carts,
    }),
  },

  methods: {
    ...mapActions('cart', [
      'incrementCartItem',
      'decrementCartItem',
      'deleteCartItem',
    ])
  }
}
</script>
