import { db } from "../../firebase"
import {
  getDocs,
  collection,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
} from "@firebase/firestore"

const LOAD = "card/LOAD"
const Create = "card/CREATE"
const DELETE = "card/DELETE"
// const ADD_DESC = "card/ADD_DESC"
// const ADD_EXAMPLE = "card/ADD_EXAMPLE"

export function loadCard(card_list) {
  return { type: LOAD, card_list }
}

export const createCard = (card) => {
  return { type: Create, card }
}

export const deleteCard = (card_id) => {
  return { type: DELETE, card_id }
}

// 미들 함수

export const loadCardFB = () => {
  return async function (dispatch) {
    //  데이터 가져오기
    const card_data = await getDocs(collection(db, "wordList"))

    let card_list = []

    card_data.forEach((card) => {
      // console.log("나는카드데이터", card.id, card.data())
      card_list.push({ id: card.id, ...card.data() })
    })
    dispatch(loadCard(card_list))
  }
}

export const createCardFB = (card) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "wordList"), card)
    const docRef_data = (await getDoc(docRef)).data()
    const card_data = {
      id: card.id,
      ...docRef_data,
    }
    dispatch(createCard(card_data))
  }
}

export const deleteCardFB = (card_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "wordList", card_id)
    await deleteDoc(docRef)

    const _cardList_id = getState().word.cardList

    const cardList_id = _cardList_id.filter((card) => {
      if (card.id === card_id) {
        return card.id
      }
    })
    console.log("삭제해보자", cardList_id[0])
    dispatch(deleteCard(cardList_id[0]))
  }
}

const initialState = {
  is_loaded: false,
  cardList: [],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "card/LOAD": {
      return { cardList: action.card_list, is_loaded: true }
    }
    case "card/CREATE": {
      const new_card_list = [...state.cardList, action.card]
      return { ...state, cardList: new_card_list }
    }
    case "card/DELETE": {
      const new_card_list = state.cardList.filter((card, idx) => {
        // return card.id !== action.card_id
      })
      console.log("왜 로드 두번함", new_card_list)

      return { ...state, cardList: new_card_list }
    }
    default:
      return state
  }
}
