import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
// データベースにあるcardを取り出す
const taskRef = db.collection('card')

export const state = () => ({
  cards: []
});

export const actions = {
  // 初期化
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('cards', taskRef)
  }),
  // 追加
  add: firestoreAction((context, { title, author, script, error }) => {
    if (title.trim()) {
      taskRef.add({
        title,
        author,
        script,
        error,
        status: false
      })
    }
  }),
  // 削除
  remove: firestoreAction((context, id) => {
    taskRef.doc(id).delete()
  }),
  // ステータス更新
  toggle: firestoreAction((context, card) => {
    taskRef.doc(card.id).update({
      status: !card.status
    })
  })
};

export const getters = {
  pooledErrors (state) {
    return state.cards;
  }
};