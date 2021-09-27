import React from "react"
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined"
import styled from "styled-components"

const Outter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
`

export const Spinner = () => {
  return (
    <Outter>
      <HourglassEmptyOutlinedIcon />
    </Outter>
  )
}
