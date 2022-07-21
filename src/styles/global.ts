import { createGlobalStyle } from "styled-components";
import { bodyThemes } from "./themes";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --color-light-black:       #212121;
    --color-dark-grey:         #A9A9A9;
    --color-lavender-grey:     #c4c4ce;
    --color-linen:             #f7ece1;

    --h1-font-size: 18px;
    --h2-font-size: 16px;
    --h3-font-size: 14px;
    --h4-font-size: 12px;

    --p-font-size: 12px;
    --span-font-size: 10px;
    --button-font-size: 14px;

    padding: 5px;
}

body {
    background-color: var(--color-light-black);
    font-family: 'Nunito', sans-serif; 
    color: var(--color-linen);
}

a {
    text-decoration: none;
}

li {
    list-style-type: none;
    color: var(--color-linen);
}

button {
    cursor: pointer;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px var(--color-lavender-grey) inset;
    box-shadow: 0 0 0 30px var(--color-lavender-grey) inset;
}

::-webkit-scrollbar {
  background-color: var(--color-dark-grey);
  width: 8px;
  height: 8px;
  border-radius: 50px;
  border: 1px solid var(--color-dark-grey);  
}

::-webkit-scrollbar-thumb {
  background-color: var(--color-light-black);
  border-radius: 50px;
}
`;
