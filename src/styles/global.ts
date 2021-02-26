import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #2C2F33;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid black;
  padding: 30px;
  border-radius: 5px;
  background-color: white;
}

.add-form {
  margin-bottom: 40px;
}

footer {
  margin-top: 30px;
  text-align: center;
}

`;
