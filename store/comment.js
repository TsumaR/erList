import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
// データベースにあるcardを取り出す
const taskRef = db.collection('card')
let comment = null

export const state = () => ({
comment: []
});

export const actions = {
  // サブコレクションとしてcommentをcardsにバインド
  initCom: firestoreAction(({ bindFirestoreRef }, payload) => {
    comment = taskRef.doc(payload.id).collection('comment')
    bindFirestoreRef('comment', comment)
  }),
  // commentに要素を追加する
  addCom: firestoreAction((context, { text }) => {
    comment.add({
      message
    })
  })
};

export const getters = {
  pooledComments (state) {
    return state.comment
  }
};
