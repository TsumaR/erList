<template>
  <v-row>
    <v-col cols="12" md="12">
      <v-list color="#f4f5fc">
        <v-subheader class="font-weight-bold">{{ title }}</v-subheader>
        <v-col v-for="card in cardlist" :key="card.id" cols="12" class="pt-0">
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
            <v-card-text class="pb-0">{{ card.detail }}</v-card-text>
            <v-card-actions class="pt-0">
              <v-col cols="2" md="2">
                <v-btn icon color="grey" text dark @click="remove(card.id)">
                  <v-icon>mdi-close-circle-outline</v-icon>
                </v-btn>
              </v-col>
            </v-card-actions>
          </v-card>

          <v-dialog v-model="dialog" scrollable>
            <v-card>
              <v-card-title>Author: {{card.title}}</v-card-title>
              <v-card-text class="pb-0">{{ card.detail }}</v-card-text>
            </v-card>
          </v-dialog>

        </v-col>
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