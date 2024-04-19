import React, { CSSProperties } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  };

const Loader = ({ size }: any) => {
  return (
    <div>
        <ClipLoader
        color={"#fff"}
        size={size}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

    </div>
  )
}

export default Loader