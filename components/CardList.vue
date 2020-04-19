<template>
  <v-row>
    <v-col cols="12" md="12">
      <v-list color="#f4f5fc">
        <v-subheader class="font-weight-bold">{{ title }}</v-subheader>
        <v-col v-for="card in cardlist" :key="card.id" cols="12" class="pt-0">
          <v-card @click.stop="dialogOpen(card)">
            <v-checkbox
                :checked="card.status"
                color="primary"
                class="ma-2"
                @click.stop="toggle(card)"
            ></v-checkbox>
            <v-card-title>{{ card.title }}</v-card-title>
            <v-row>
              <v-col cols="10" md="10">
                <v-card-text class="pb-0">{{ card.author }}</v-card-text>
              </v-col>
              <v-card-actions class="pt-0">
                <v-col cols="2" md="2">
                  <v-btn icon color="grey" text dark @click.stop="remove(card.id)">
                    <v-icon>mdi-close-circle-outline</v-icon>
                  </v-btn>
                </v-col>
              </v-card-actions>
            </v-row>
          </v-card>
        </v-col>

        <v-dialog v-model="dialog" v-if="currentCard" scrollable>  
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
                    <v-textarea v-model="comment" label="comment" outlined></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-row justify="center">
                <v-btn class="ma-2" rounded color="#088A85" dark @click="dialog = false">キャンセル</v-btn>
                <v-btn class="ma-2" rounded color="#088A85" dark @click="addCom(currentCard)">登録</v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-list>
    </v-col>
  </v-row>
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
      dialog: false,
      currentCard: null,
      comment: []
    }
  },
  methods: {
    dialogOpen(card) {
      this.currentCard = card
      this.dialog = true
    },

    remove(id) {
      this.$store.dispatch('card/remove', id)
    },
    toggle(card) {
      this.$store.dispatch('card/toggle', card)
    },
    addCom() {
      this.$store.dispatch('card/addCom',  {
        comment: this.comment
      }, card)
      this.dialog = false
    }
  }
}
</script>

<style>
.theme--light.v-label {
  color: #000;
}
.v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
  margin-bottom: 0px;
}
.v-application--is-ltr .v-list-item__avatar:first-child {
  margin-right: 0;
}
</style>