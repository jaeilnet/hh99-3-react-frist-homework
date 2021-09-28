import { Button } from "@mui/material"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import styled from "styled-components"
import { deleteCardFB } from "../redux/modules/word"

const ModalContianer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  /* background-color: aliceblue; */
  z-index: 0;
`

const Content = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: 1px 1px 3px 3px black;
  background: rgb(255, 255, 255);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 70%;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Title = styled.span`
  color: black;
  margin: 20px 30px;
  font-weight: bold;
  font-size: 24px;
`
const SubTitle = styled.p`
  font-size: 16px;
  color: black;
  margin: 0 25px;
  padding: 15px;
  overflow-wrap: break-word;
  overflow-y: auto;
  max-height: 40px;
`

export const Detail = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const modal = useSelector((state) => state.word.cardList)
  const params = useParams()

  const card = modal.filter((card, idx) => {
    return card.id === params.id
  })
  console.log("난카드아이디", card, params.id)

  return (
    <ModalContianer>
      <Content>
        <Title>단어</Title>
        <SubTitle>{card[0].word}</SubTitle>
        <Title>설명</Title>
        <SubTitle>{card[0].desc}</SubTitle>
        <Title>예시</Title>
        <SubTitle style={{ color: "blue" }}>{card[0].example}</SubTitle>

        <Button
          sx={{
            ":hover": {
              backgroundColor: "black",
              color: "white",
              boxShadow: 5,
              border: "none",
            },
          }}
          onClick={() => {
            history.push("/")
          }}
          style={{
            position: "absolute",
            bottom: "20%",
            left: "10%",
            width: "80%",
          }}
        >
          {" "}
          홈으로{" "}
        </Button>
        <Button
          sx={{
            ":hover": {
              backgroundColor: "red",
              color: "white",
              boxShadow: 5,
            },
          }}
          onClick={() => {
            console.log("onclick", card[0].id)
            dispatch(deleteCardFB(card[0].id))
            history.push("/")
          }}
          style={{
            position: "absolute",
            bottom: "10%",
            left: "10%",
            width: "80%",
          }}
        >
          {" "}
          삭제하기{" "}
        </Button>
      </Content>
    </ModalContianer>
  )
}
