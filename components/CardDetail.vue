<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-row>
        <v-col cols="1">
          <v-img :src="$store.state.userPhoto"
                 width=100%>
          </v-img>
        </v-col>
        <v-col cols="4">
          <p>{{ $store.state.userName }}</p>
        </v-col>
        <v-col cols="4">
          <v-btn color="#088A85" dark class="font-weight-bold" v-on="on">
            <v-icon small class="mr-2">mdi-plus-circle-outline </v-icon>
            新規エラーを追加
          </v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn color="primary" dark @click="signOut">
            ログアウト
          </v-btn>
        </v-col>
 
      </v-row>


    </template>
    <v-card>
      <v-card-title>
        <span class="headline">新規エラーを追加</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="title" label="Title"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="author" label="Author"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="script" label="Script"></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="error" label="Error"></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="primary" text @click="dialog = false">キャンセル</v-btn>
        <v-btn color="primary" text @click="add">登録</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      author: '',
      script: '',
      error: '',
      dialog: false,
      menu: false,
      modal: false
    }
  },
  methods: {
    add() {
      this.$store.dispatch('card/add', {
        title: this.title,
        author: this.author,
        script: this.script,
        error: this.error
      })
      this.dialog = false
    },
    signOut() {
      this.$store.dispatch('googleSignOut')
    }
  },
}
</script>