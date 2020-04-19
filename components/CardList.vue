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
            <v-row>
              <v-col cols="10" md="10">
                <v-card-text class="pb-0">{{ card.author }}</v-card-text>
              </v-col>
              <v-card-actions class="pt-0">
                <v-col cols="2" md="2">
                  <v-btn icon color="grey" text dark @click="remove(card.id)">
                    <v-icon>mdi-close-circle-outline</v-icon>
                  </v-btn>
                </v-col>
              </v-card-actions>
            </v-row>
          </v-card>

          <v-dialog v-model="dialog" scrollable>
            <v-card light>
              <v-card-title>Title: {{card.title}}</v-card-title>
              <v-card-subtitle>Author: {{ card.author }}</v-card-subtitle>
              <v-divider class="mx-3"></v-divider>
              <v-card-title>Script</v-card-title>
              <v-card-text class="pb-3">{{ card.script }}</v-card-text>
              <v-divider class="mx-3"></v-divider>
              <v-card-title>Error message</v-card-title>
              <v-card-text class="pb-3">{{ card.error }}</v-card-text>
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