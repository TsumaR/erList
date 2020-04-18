<template>
  <v-app>
    <div class="logo">
      <nuxt-link to="/">
        <img src="~/assets/logo.png" alt="Logo" />        
      </nuxt-link>
      <h4><span>エラー内容から</span><span>プログラミングを学習</span></h4>
    </div>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      app
    >
      <span>TsumaR &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>
.theme--light.v-application {
  background: #fff;
}


.logo {
  background-color: #fff;
  border-bottom: solid 8px #ffbe33;
  text-align: center;
  padding: 20px;
  img {
    width: 20%;
    height: 20%;
    min-width: 100px;
  }
  h4 {
    color: rgba(0, 0, 0, 0.989);
    margin: 8px 0 0;
    span {
      display: inline-block;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      title: 'CardList'
    }
  }
}
</script>