import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
// データベースにあるcardを取り出す
const taskRef = db.collection('card')
let comment = null

export const state = () => ({
  cards: []
});

export const actions = {
  // 初期化
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('cards', taskRef)
  }),
  // 追加
  add: firestoreAction((context, { title, author, script, error}) => {
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
  // 削除
  remove: firestoreAction((context, id) => {
    taskRef.doc(id).delete()
  }),
  // ステータス更新
  toggle: firestoreAction((context, card) => {
    taskRef.doc(card.id).update({
      status: !card.status
    })
  }),
  // サブコレクションとしてcommentをcardsにバインド
  // initCom: firestoreAction(({ bindFirestoreRef }) => {
  //   comment = taskRef.doc(id).collection('comment')
  //   bindFirestoreRef('comment', comment)
  // }),
  // commentに要素を追加する
  addCom: firestoreAction((context, card, { message }) => {
    taskRef.doc(card.id).collection('comment').add({
      message
    })
  })
};

export const getters = {
  pooledErrors (state) {
    return state.cards;
  }
};
