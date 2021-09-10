import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotesDashboard from "./pages/NotesDashboard";
import NoteContextProvider from "./context/notes/noteContextProvider";

function App() {
    return (
        <NoteContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/"
                        component={NotesDashboard}>
                    </Route>
                </Switch>
            </BrowserRouter>
        </NoteContextProvider>
    )

}

export default App;
