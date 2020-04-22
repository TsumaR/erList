  
<template>
  <div class="container">
    <div class="mt-8 flex flex-row-reverse">
      <div v-if="$store.state.noAccount">
        <v-btn color="primary" dark @click="signIn">
          google でログイン
        </v-btn>
      </div>
    </div>
    <card-intro v-if="$store.state.noAccount"></card-intro>
    <page-frame v-if="$store.state.userName"></page-frame>
  </div>
</template>

<script>
import CardIntro from '~/components/CardIntro.vue'
import PageFrame from '~/components/frame.vue'


export default {
  components: {
    CardIntro,
    PageFrame
  },
  mounted () {
    this.$store.dispatch('googleAuthStateChanged')
  },
  methods: {
    signIn () {
      this.$store.dispatch('googleSignIn')
    },
    signOut () {
      this.$store.dispatch('googleSignOut')
    }
  }
}
</script>
