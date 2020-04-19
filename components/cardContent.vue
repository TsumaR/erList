<template>
  <v-card @click.stop="dialog = true">
   <v-card-title>
     <v-checkbox
       :checked="card.status"
       color="primary"
       class="ma-0"
       :label="card.title"
       @change="toggle(card)"
     ></v-checkbox>
   </v-card-title>
   <v-card-text class="pb-0">{{ card.author }}</v-card-text>
   <v-card-actions class="pt-0">
     <v-col cols="2" md="2">
       <v-btn icon color="grey" text dark @click="remove(card.id)">
         <v-icon>mdi-close-circle-outline</v-icon>
       </v-btn>
     </v-col>
   </v-card-actions>
  </v-card>
  <v-dialog v-model="dialog" scrollable>
    <v-card light>
      <v-card-title>Title: {{card.title}}</v-card-title>
      <v-card-subtitle>Author: {{ card.author }}</v-card-subtitle>
      <v-divider class="mx-3"></v-divider>
      <v-card-subtitle>Script</v-card-subtitle>
      <v-card-text class="pb-0">{{ card.script }}</v-card-text>
      <v-divider class="mx-3"></v-divider>
      <v-card-subtitle>Error message</v-card-subtitle>
      <v-card-text class="pb-0">{{ card.error }}</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    cardlist: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    remove(id) {
      this.$store.dispatch('card/remove', id)
    },
    toggle(card) {
      this.$store.dispatch('card/toggle', card)
    }
  }
}
</script>