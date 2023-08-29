//npm install @reduxjs/toolkit
//npx tailwindcss init -p
//npm install -D tailwindcss postcss autoprefixer
//npm install --save-dev tailwind-scrollbar
//npm install @radix-ui/react-collapsible
//npm i axios
//npm i json-server -D simula uma api
import { Provider as ReduxProvider } from "react-redux";//mudou o nome p ficar semantico
import { store } from "./store";
import { Player } from "./pages/Player";
import './styles/global.css'

export function App() {

  return (
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  )
}

