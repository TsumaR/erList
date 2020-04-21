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
          <!-- <v-col cols="12">
            <v-card-title>Chat box</v-card-title>
          </v-col> -->
          <v-col cols="12">
            <!-- ここからchat box -->
            <!-- <div class="chat-box">
              <div class="chat-face">
                <img src="comment.img" alt="chat icon" width='90' height='90'>
              </div>
              <div class="chat-area">
                <div class="chat-text">
                  {{ comment.message }}
                </div>
              </div>
            </div> -->
            <v-card
              class="mx-auto"
              tile
            >
              <v-list rounded>
                <v-subheader>Chat Box</v-subheader>
                  <v-list-item
                    v-for="comment in commentlist"
                    :key="comment.id"
                  >
                    <v-list-item-content>
                      <!-- <v-list-item-title v-text="comment.message"></v-list-item-title>
                      <p class="conversation__user-text">{{comment.message}}</p> -->
                      <!-- <div class="chat-face">
                        <img src="comment.img" alt="chat icon" width='90' height='90'>
                      </div> -->
                      <div class="chat-area">
                        <div class="chat-hukidashi">
                          {{ comment.message }}
                        </div>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
              </v-list>
            </v-card>
            <!-- <v-card-text class="pb-3">{{ commentlist }}</v-card-text> -->
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
        <v-btn class="ma-2" rounded color="#088A85" dark @click="addCom">登録</v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    currentCard: {
      type: Object
    }
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    changeDialog() {
      this.$store.commit('card/changeDialog')
    },
    addCom() {
      let now = new Date()
      this.$store.dispatch('card/addCom', {
        payload: this.currentCard,
        message: this.message,
        createdAt: now
      })
    }
  },
  computed: {
    commentlist() {
      return this.$store.getters['card/pooledComments']
    },
  },
  // created() {
  //   allComments: {
  //     firebase.firestore().collection('card').doc(this.currentCard.id).collection('comment').get().then(snapshot => {
  //       snapshot.forEach(doc => {
  //         this.commentlist.push(doc.data())
  //       })
  //     })
  //   }
  // }
  // computed: {
  //   commentlist() {
  //     return this.$store.getters['card/pooledComments']
  //   }
  // },
}
</script>

<style scoped>
.chat-box {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 20px;
}
.chat-face {
  float: left;
  margin-right: -120px;
}
.chat-face img{
  border-radius: 30px;
  border: 1px solid;
  box-shadow: 0 0 4px;
}
.chat-area {
  width: 100%;
  float: right;
}
.chat-hukidashi {
    display: inline-block; /*コメントの文字数に合わせて可変*/
    padding: 15px 20px;
    margin-left: 10px;
    margin-top: 8px;
    /* border: 1px solid gray; ←削除 */
    border-radius: 10px;
    position: relative; /*追記*/
    background-color: rgb(162, 254, 211); /*追記*/
}
.chat-hukidashi:after {
    content: "";
    position: absolute;
    top: 50%; left: -10px;
    margin-top: -10px;
    display: block;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent rgb(162, 254, 211) transparent transparent;
}
.someone {
    background-color: #BCF5A9;
}
</style>