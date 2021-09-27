import { db } from "../../firebase"
import {
  getDocs,
  collection,
  doc,
  getDoc,
  updateDoc,
  addDoc,
  deleteeDoc,
} from "@firebase/firestore"

const LOAD = "card/LOAD"
const Create = "card/Create"
// const ADD_DESC = "card/ADD_DESC"
// const ADD_EXAMPLE = "card/ADD_EXAMPLE"

export function loadCard(card_list) {
  return { type: LOAD, card_list }
}

export const createCard = (card) => {
  return { type: Create, card }
}

// 미들 함수

export const createCardFB = (card) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "wordList"), card)
    console.log(docRef.id, docRef)
    const docRef_data = (await getDoc(docRef)).data()
    console.log(docRef_data)
    const card_data = {
      id: card.id,
      ...docRef_data,
    }
    dispatch(createCard(card_data))
  }
}

export const loadCardFB = () => {
  return async function (dispatch) {
    //  데이터 가져오기
    const card_data = await getDocs(collection(db, "wordList"))

    let card_list = []

    card_data.forEach((card) => {
      console.log("나는카드데이터", card.id, card.data())
      card_list.push({ id: card.id, ...card.data() })
    })
    dispatch(loadCard(card_list))
    console.log("로드카드", card_list)
  }
}

const initialState = {
  cardList: [],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "card/LOAD": {
      return { cardList: action.card_list }
    }
    case "card/Create": {
      const new_card_list = [...state.cardList, action.card]
      console.log("뉴카드리스ㅡㅌ", new_card_list)
      return { ...state, cardList: new_card_list }
    }

    default:
      return state
  }
}
