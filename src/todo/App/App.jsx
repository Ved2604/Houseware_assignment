import { useReducer } from "react";
import { Header } from "../components/Header/header";
import { Main } from "../components/Main/main";
import { Footer } from "../components/Footer/footer";

import { todoReducer } from "../reducer";

import "./app.css";

export function App() {
    const [todos, dispatch] = useReducer(todoReducer, []);

    return (
        <div data-testid="app-component">
            <Header dispatch={dispatch} />
            <Main todos={todos} dispatch={dispatch} />
            <Footer todos={todos} dispatch={dispatch} />
        </div>
    );
}
