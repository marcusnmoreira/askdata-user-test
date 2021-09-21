import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
*, input, button {
    font-family: "Inter", sans-serif;
}

:root {
    --primaryColor: #14B8A6;
    --primaryBlack: #111827;
    --primaryWhite: #FFFFFF;
    --teal400: #2DD4BF;
    --grey500: #6B7280;
    --grey300: #D1D5DB;
    --backgroundGrey: #F9FAFB;
}
`;
