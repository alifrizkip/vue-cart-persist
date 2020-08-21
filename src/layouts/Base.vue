<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        to="/"
        text
        class="mr-5"
      >
        <v-icon>mdi-fruit-cherries</v-icon>
        <span class="mr-2">Products</span>
      </v-btn>

      <v-btn
        to="/cart"
        text
        class="mr-5"
      >
        <v-icon>mdi-cart</v-icon>
        <span class="mr-2">Cart</span>
      </v-btn>

      <v-btn
        class="mr-5"
        color="success"
        v-if="isLoggedIn === false"
        @click="login"
      >
        <v-icon>mdi-login</v-icon>
        <span class="mr-2">Login</span>
      </v-btn>

      <v-btn
        class="mr-5"
        color="error"
        v-else
        @click="logout"
      >
        <v-icon>mdi-power-standby</v-icon>
        <span class="mr-2">Logout</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-alert type="success" v-if="isLoggedIn">
          You're already logged in.
        </v-alert>
        <v-alert type="error" v-else>
          You're not logged in.
        </v-alert>
      </v-container>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('auth', {
      isLoggedIn: (state) => state.isLoggedIn,
    }),
  },

  methods: {
    ...mapActions('auth', [
      'login',
      'logout',
    ]),
  }
}
</script>