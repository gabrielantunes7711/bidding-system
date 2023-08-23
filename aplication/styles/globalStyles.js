import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --primary-color: #4FD1C5;

  --primary-text-color: #2D3748;
  --secondary-text-color: #A0AEC0;

  --primary-bg-color: #FFF;

  --border-color: #e2e8f0;

  --odd-table-color: #fff;
  --even-table-color: #f9f9f9;

  font-size: 62.5%;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;  
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #F8F9FA;
  color: var(--primary-text-color);
  font-size:1.6rem;
}

a,
button,
input,
textarea,
select{
  font:inherit;
  text-decoration:none;
  color:inherit;
}

button{
  cursor:pointer;
  background-color: transparent;
  border:none;
}

#root{
  display:flex;
  flex-direction: column;
  min-height:100vh;
  padding: 3rem 3rem 0;
}

#root > main{
  display:flex;
  flex:1;
  gap: 4rem;
}

.swal2-popup{ 
  font-size:1.6rem
}
`;

export default GlobalStyle;
