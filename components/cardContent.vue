<template>  
  <v-card light>
    <v-card-title>Title: {{currentCard.title}}</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card-subtitle>Author: {{ currentCard.author }}</v-card-subtitle>
          </v-col>
          <v-col cols="12">
            <v-divider class="mx-3"></v-divider>
          </v-col>
          <v-col cols="12">
            <v-card-title>Script</v-card-title>
          </v-col>
          <v-col cols="12">
            <v-card-text class="pb-3">{{ currentCard.script }}</v-card-text>
          </v-col>
          <v-col cols="12">
            <v-divider class="mx-3"></v-divider>
          </v-col>
          <v-col cols="12">
            <v-card-title>Error message</v-card-title>
          </v-col>
          <v-col cols="12">
            <v-card-text class="pb-3">{{ currentCard.error }}</v-card-text>
          </v-col>
          <v-col cols="12">
            <v-card-title>Chat box</v-card-title>
          </v-col>
          <v-col cols="12">
            <v-card-text class="pb-3">{{ currentCard.comment }}</v-card-text>
          </v-col>
          <v-col cols="12">
            <v-textarea v-model="message" label="Message" outlined></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-row justify="center">
        <v-btn class="ma-2" rounded color="#088A85" dark @click="changeDialog">キャンセル</v-btn>
        <v-btn class="ma-2" rounded color="#088A85" dark @click="addCom(currentCard)">登録</v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  props: {
    currentCard: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    changeDialog() {
      this.$store.commit('card/changeDialog')
    },
    addCom() {
      this.$store.dispatch('card/addCom', {
        message: this.message
      })
      this.dialog = false
    }
  },
  created() {
    this.$store.dispatch('')
  },
  computed: {
    commentlist() {
      return this.$store.getters['card/pooledComments']
    }
  }
}
</script>