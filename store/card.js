import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
// データベースにあるcardを取り出す
const taskRef = db.collection('card')
let commRef = null

export const state = () => ({
  cards: [],
  comments: [],
  cardDialog : false,
});

export const actions = {
  // 初期化
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('cards', taskRef)
  }),
  bindComments: firestoreAction(({ bindFirestoreRef }, {payload} ) => {
    commRef = taskRef.doc(payload.id).collection('comment')
    bindFirestoreRef('comments', commRef.orderBy('createdAt'))
  }),
  // 追加
  add: firestoreAction((context, { title, author, script, error}) => {
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
  }),
  // commentに要素を追加する
  addCom: firestoreAction((context, {payload, message, createdAt}) => {
    commRef.add({
      message,
      createdAt
    })
  })
};
export const getters = {
  pooledErrors (state) {
    return state.cards;
  },
  getDialog (state) {
    return state.cardDialog;
  },
  pooledComments (state) {
    return state.comments;
  }
};
export const mutations= {
  changeDialog (state) {
    state.cardDialog = !state.cardDialog;
  }
}
