<template>
  <v-app>
    <div class="logo">
      <nuxt-link to="/">
        <img src="~/assets/logo.png" alt="Logo" />        
      </nuxt-link>
      <h4><span>エラー内容から</span><span>プログラミングを学習</span></h4>
      <!-- <div v-if="isWaiting" class="log_wait">
        <p>読み込み中</p>
      </div>
      
      <div class="isLogin_wrap" v-else>
        <div v-if="!isLogin" class="btn_login">
          <v-btn class="google_login" outlined @click="googleLogin">Googleでログイン</v-btn>
        </div>
        
        <div v-else class="log_wrap">
          <v-btn class="google_logout" outlined @click="logOut">ログアウト</v-btn>
        </div>
      </div> -->
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
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  data() {
    return {
      title: 'CardList',
    };
  },
  // asyncData() {
  //   return {
  //     isWaiting: true,
  //     isLogin: false,
  //     user: []
  //   };
  // },
  // mounted: function() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     this.isWaiting = false;
  //     if (user) {
  //       this.isLogin = true;
  //       this.user = user;
  //     } else {
  //       this.isLogin = false;
  //       this.user = [];
  //     }
  //   });
  // },
  // methods: {
  //   googleLogin() {
  //     const provider = new firebase.auth.GoogleAuthProvider();
  //     firebase.auth().signInWithRedirect(provider);
  //   },
  //   logOut() {
  //     firebase.auth().signOut();
  //   }
  // }
}
</script>