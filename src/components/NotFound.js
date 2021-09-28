import React from "react"
import { useHistory } from "react-router"

export const NotFound = () => {
  const history = useHistory()
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "white",
      }}
    >
      <h1> 잘못 된 페이지 입니다.</h1>
      <button
        style={{
          width: "100px",
          height: "50px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontWeight: "bold",
        }}
        onClick={() => {
          history.goBack()
        }}
      >
        {" "}
        돌아가기{" "}
      </button>
    </div>
  )
}
