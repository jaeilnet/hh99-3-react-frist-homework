import { Button } from "@mui/material"
import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { createCardFB } from "../redux/modules/word"
import styled from "styled-components"
import { Spinner } from "./Spinner"

const InputContainer = styled.div`
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  width: 15vw;
  margin: 150px auto 0 auto;
  padding: 30px;
  text-align: center;
  border-radius: 10px;
`
const Inputs = styled.input`
  width: 80%;
  margin: 20px auto;
  padding: 5px;
`
export const Input = () => {
  const is_loaded = useSelector((state) => state.word.is_loaded)
  const dispatch = useDispatch()
  const history = useHistory()
  const wordRef = useRef("")
  const descRef = useRef("")
  const exampleRef = useRef("")

  const addBtn = () => {
    // console.log("나는단어", wordRef.current.value)
    // console.log("나는설명", descRef.current.value)
    // console.log("나는예시", exampleRef.current.value)
    if (
      wordRef.current.value &&
      descRef.current.value &&
      exampleRef.current.value
    ) {
      dispatch(
        createCardFB({
          word: wordRef.current.value,
          desc: descRef.current.value,
          example: exampleRef.current.value,
        })
      )
      wordRef.current.value = ""
      descRef.current.value = ""
      exampleRef.current.value = ""

      window.alert("추가 되었습니다.")
      history.push("/")
    } else {
      window.alert("입력을 확인해주세요")
    }
  }

  return (
    <InputContainer>
      단어 추가하기
      <Inputs type="text" placeholder="여기는 단어" ref={wordRef}></Inputs>
      <Inputs type="text" placeholder="여기는 설명" ref={descRef}></Inputs>
      <Inputs type="text" placeholder="여기는 예시" ref={exampleRef}></Inputs>
      <Button
        sx={{
          ":hover": {
            backgroundColor: "black",
            color: "white",
            boxShadow: 5,
          },
        }}
        onClick={addBtn}
      >
        {" "}
        추가하기{" "}
      </Button>
      <Button
        sx={{
          ":hover": {
            backgroundColor: "black",
            color: "white",
            boxShadow: 5,
          },
        }}
        onClick={() => {
          history.push("/")
        }}
      >
        홈으로
      </Button>
      {!is_loaded && <Spinner />}
    </InputContainer>
  )
}
