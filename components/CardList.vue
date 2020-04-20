<template>
  <v-row>
    <v-col cols="12" md="12">
      <v-list color="#f4f5fc">
        <v-subheader class="font-weight-bold text-center">{{ title }}</v-subheader>
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

        <v-dialog v-model="carddialog" v-if="currentCard" scrollable>
          <card-content :currentCard="currentCard"></card-content>
        </v-dialog>

      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import CardContent from '../components/CardContent.vue'

export default {
  components: {
    CardContent
  },
  computed: {
    carddialog() {
      return this.$store.getters['card/getDialog']
    }
  },
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
      currentCard: null,
      message: 'aaa'
    }
  },
  methods: {
    changeDialog() {
      this.$store.commit('card/changeDialog')
    },
    dialogOpen(card) {
      this.currentCard = card
      this.$store.commit('card/changeDialog')
    },
    remove(id) {
      this.$store.dispatch('card/remove', id)
    },
    toggle(card) {
      this.$store.dispatch('card/toggle', card)
    },
  },
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