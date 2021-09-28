import React from "react"
import styled from "styled-components"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded"
import { CardActionArea } from "@mui/material"
import { useHistory } from "react-router"
import { useSelector } from "react-redux"
import { Spinner } from "./Spinner"

const CardBackground = styled.div`
  /* background-color: #efefef; */
  position: relative;
`

const CardContainer = styled.div`
  background-color: aliceblue;
  width: 50vw;
  margin: 0 auto;
  max-height: 700px;
  overflow-y: auto;
`

export const Home = () => {
  const cardLists = useSelector((state) => state.word.cardList)
  const is_loaded = useSelector((state) => state.word.is_loaded)
  const history = useHistory()

  return (
    <CardBackground>
      <CardContainer>
        <CardContent>
          {cardLists &&
            cardLists.map((card, idx) => {
              return (
                <CardActionArea
                  onClick={() => {
                    history.push(`/detail/${card.id}`)
                  }}
                  key={idx}
                  sx={{
                    padding: "10px",
                    ":hover": {
                      backgroundColor: "#efefef",
                      boxShadow: 5,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "#000",
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    단어
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{
                      marginBottom: "10px",
                      fontSize: "1rem",
                      overflowWrap: "break-word",
                    }}
                  >
                    {card.word}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "#000",
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    설명
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{
                      marginBottom: "10px",
                      fontSize: "1rem",
                      overflowWrap: "break-word",
                    }}
                  >
                    {card.desc}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "#000",
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    예시
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{
                      marginBottom: "10px",
                      color: "blue",
                      fontSize: "1rem",
                      overflowWrap: "break-word",
                    }}
                  >
                    {card.example}
                  </Typography>
                </CardActionArea>
              )
            })}
        </CardContent>
      </CardContainer>
      <AddCircleRoundedIcon
        sx={{
          fontSize: "80px",
          position: "absolute",
          right: "27%",
          bottom: "3%",
          ":hover": {
            cursor: "pointer",
          },
        }}
        color="primary"
        fontSize="large"
        onClick={() => {
          history.push("/addword")
        }}
      >
        추가하기
      </AddCircleRoundedIcon>
      {!is_loaded && <Spinner />}
    </CardBackground>
  )
}
