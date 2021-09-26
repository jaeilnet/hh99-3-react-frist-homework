import React from "react"
import styled from "styled-components"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded"
// import Button from "@mui/material/Button"
import { useHistory } from "react-router"
import { useSelector } from "react-redux"

const CardBackground = styled.div`
  background-color: #efefef;
  position: relative;
`
const Header = styled.div`
  background-color: #fff;
  width: 100%;
  height: 10vh;
  font-size: 30px;
  font-weight: 600;
  padding: 15px 10px 0 30px;
`
const CardContainer = styled.div`
  background-color: aliceblue;
  width: 30vw;
  margin: 0 auto;
  max-height: 480px;
  overflow-y: auto;
`

export const Home = () => {
  const cardLists = useSelector((state) => state.word.cardList)
  // console.log("나는카드리스트", cardLists)

  const history = useHistory()
  return (
    <CardBackground>
      <Header>나만의 단어장</Header>
      <CardContainer>
        {cardLists.map((card, idx) => {
          return (
            <CardContent key={idx}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                단어
              </Typography>
              <Typography
                variant="h5"
                component="div"
                style={{ marginBottom: "10px" }}
              >
                {card.word}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                설명
              </Typography>
              <Typography
                variant="h5"
                component="div"
                style={{ marginBottom: "10px" }}
              >
                {card.desc}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                예시
              </Typography>
              <Typography
                variant="h5"
                component="div"
                style={{ marginBottom: "10px", color: "#7269fc" }}
              >
                {card.example}
              </Typography>
            </CardContent>
          )
        })}
      </CardContainer>
      <AddCircleRoundedIcon
        color="success"
        fontSize="large"
        style={{
          position: "absolute",
          right: "37%",
          bottom: "2%",
        }}
        onClick={() => {
          history.push("/addPage")
        }}
      >
        추가하기
      </AddCircleRoundedIcon>
    </CardBackground>
  )
}
