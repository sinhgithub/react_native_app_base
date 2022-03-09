import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M24 12.75a.75.75 0 01-.75.75h-1.5V15a.75.75 0 11-1.5 0v-1.5h-1.5a.75.75 0 110-1.5h1.5v-1.5a.75.75 0 111.5 0V12h1.5a.75.75 0 01.75.75zm-10.487 2.021a6.376 6.376 0 10-6.776 0 11.239 11.239 0 00-5.23 3.496.75.75 0 00.575 1.233h16.086a.75.75 0 00.574-1.233 11.239 11.239 0 00-5.229-3.496z"
        fill="#FF951F"
      />
    </Svg>
  )
}

export default SvgComponent
