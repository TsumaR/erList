<template>
  <v-container class="errlog">
    <v-form ref="form">
      <v-row>
        <v-col cols="12" md="12">
          <card-detail></card-detail>
        </v-col>
      </v-row>
    </v-form>
    <card-list title="Todo" :cardlist="errorlist"></card-list>
    <card-list title="Done" :cardlist="donelist"></card-list>
  </v-container>
</template>

<script>
import CardList from '../components/CardList.vue'
import CardDetail from '../components/cardDetail.vue'

export default {
  components: {
    CardList,
    CardDetail
  },
  computed: {
    errorlist() {
      return this.$store.getters['card/pooledErrors'].filter(x => x.status === false)
    },
    donelist() {
      return this.$store.getters['card/pooledErrors'].filter(x => x.status === true)
    }
  },
  created() {
    this.$store.dispatch('card/init')
  }
}
</script>