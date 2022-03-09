import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.0001 0.250732C8.30662 0.251029 6.64245 0.692309 5.17136 1.53113C3.70028 2.36996 2.47299 3.57741 1.6103 5.03464C0.747614 6.49186 0.279275 8.14862 0.251384 9.84182C0.223493 11.535 0.637011 13.2063 1.45123 14.6912L0.649232 17.4949C0.575543 17.7521 0.572033 18.0244 0.639068 18.2835C0.706103 18.5425 0.84124 18.7789 1.03046 18.9681C1.21967 19.1574 1.45608 19.2925 1.71514 19.3595C1.9742 19.4266 2.24648 19.4231 2.50372 19.3494L5.30817 18.5496C6.61149 19.2648 8.06111 19.6726 9.54619 19.7417C11.0313 19.8108 12.5125 19.5393 13.8766 18.9482C15.2407 18.357 16.4515 17.4618 17.4166 16.3309C18.3816 15.2 19.0753 13.8634 19.4445 12.4233C19.8138 10.9832 19.8488 9.47768 19.547 8.02196C19.2452 6.56623 18.6145 5.19879 17.7032 4.02419C16.7918 2.84959 15.6239 1.89894 14.2888 1.24493C12.9537 0.59091 11.4867 0.250845 10.0001 0.250732H10.0001ZM5.49997 11.125C5.27746 11.125 5.05996 11.059 4.87495 10.9354C4.68995 10.8118 4.54575 10.6361 4.4606 10.4305C4.37545 10.225 4.35317 9.99875 4.39658 9.78052C4.43999 9.56229 4.54714 9.36184 4.70447 9.2045C4.86181 9.04717 5.06226 8.94002 5.28049 8.89662C5.49872 8.85321 5.72492 8.87549 5.93049 8.96064C6.13605 9.04578 6.31175 9.18998 6.43537 9.37498C6.55899 9.55999 6.62497 9.7775 6.62497 10C6.62497 10.2984 6.50644 10.5845 6.29546 10.7955C6.08448 11.0065 5.79834 11.125 5.49997 11.125ZM9.99997 11.125C9.77746 11.125 9.55996 11.059 9.37495 10.9354C9.18995 10.8118 9.04575 10.6361 8.9606 10.4305C8.87545 10.225 8.85318 9.99875 8.89658 9.78052C8.93999 9.56229 9.04714 9.36184 9.20447 9.2045C9.3618 9.04717 9.56226 8.94002 9.78049 8.89662C9.99872 8.85321 10.2249 8.87549 10.4305 8.96064C10.6361 9.04578 10.8118 9.18998 10.9354 9.37498C11.059 9.55999 11.125 9.7775 11.125 10C11.125 10.2984 11.0064 10.5845 10.7955 10.7955C10.5845 11.0065 10.2983 11.125 9.99997 11.125ZM14.5 11.125C14.2775 11.125 14.06 11.059 13.875 10.9354C13.6899 10.8118 13.5458 10.6361 13.4606 10.4305C13.3755 10.225 13.3532 9.99875 13.3966 9.78052C13.44 9.56229 13.5471 9.36184 13.7045 9.2045C13.8618 9.04717 14.0623 8.94002 14.2805 8.89662C14.4987 8.85321 14.7249 8.87549 14.9305 8.96064C15.1361 9.04578 15.3118 9.18998 15.4354 9.37498C15.559 9.55999 15.625 9.7775 15.625 10C15.625 10.2984 15.5064 10.5845 15.2955 10.7955C15.0845 11.0065 14.7983 11.125 14.5 11.125Z"
        fill="#00B495"
      />
    </Svg>
  );
}

export default SvgComponent;
