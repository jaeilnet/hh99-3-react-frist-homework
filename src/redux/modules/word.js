const ADD_WORD = "card/ADD_WORD"
// const ADD_DESC = "card/ADD_DESC"
// const ADD_EXAMPLE = "card/ADD_EXAMPLE"

export const createWord = (card_word) => {
  console.log("카드워드", card_word)
  return { type: ADD_WORD, card_word }
}

// export const createDesc = (card_desc) => {
//   return { type: ADD_DESC, card_desc }
// }

// export const createExample = (card_example) => {
//   return { type: ADD_EXAMPLE, card_example }
// }

const initialState = {
  cardList: [
    {
      word: "단어1",
      desc: "설명1",
      example: "예시1",
    },
    {
      word: "단어2",
      desc: "설명2",
      example: "예시2",
    },
  ],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "card/ADD_WORD": {
      const newCardList = [...state.cardList, action.card_word]
      console.log("리듀서카드리스트", newCardList)
      console.log("나는리듀서", action, state.cardList)
      return { cardList: newCardList }
    }
    default:
      return state
  }
}
