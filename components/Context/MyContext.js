import React, { createContext, useState } from "react";
import { MyComponent } from "./MyComponent";

const MyContext = createContext();

const App = () => {
    const [value, setValue] = useState('Hello World!');

    return (
        <MyContext.Provider value={ { value, setValue }}>
            <MyComponent />
        </MyContext.Provider>
    )
}