  
<template>
  <div class="container">
    <div class="mt-8 flex flex-row-reverse">
      <div v-if="$store.state.noAccount">
        <button @click="signIn"
                class="bg-teal lg:text-2xl hover:bg-teal-dark text-white font-bold py-2 px-4 rounded">
          google でログイン
        </button>
      </div>
      <ul v-if="$store.state.userName" class="list-reset flex items-center">
        <li>
          <button @click="signOut"
                  class="bg-transparent lg:text-2xl hover:bg-teal text-teal-dark font-semibold hover:text-white mr-6 py-2 px-4 border border-teal hover:border-transparent rounded">
            ログアウト
          </button>
        </li>
        <li>
          <img :src="$store.state.userPhoto"
               class="block h-16 sm:h-24 rounded-full mx-auto">
          <p class="lg:text-2xl m-auto mt-2">{{ $store.state.userName }}</p>
        </li>
      </ul>
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
