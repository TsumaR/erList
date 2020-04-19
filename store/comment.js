import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
// データベースにあるcardを取り出す
const taskRef = db.collection('comment')

export const state = () => ({
  comments: []
});

export const actions = {
  // 初期化
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('cards', taskRef)
  }),
  // 追加
  add: firestoreAction((context, { title, author, script, error, comment }) => {
    if (title.trim()) {
      taskRef.add({
        title,
        author,
        script,
        error,
        comment,
        status: false
      })
    }
  }),
  comment: firestoreAction((context, card) => {
    taskRef.doc(card.comment).push()
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