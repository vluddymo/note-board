import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotesDashboard from "./pages/NotesDashboard";
import NoteContextProvider from "./context/notes/noteContextProvider";
import NoteDetails from "./pages/NoteDetails";

function App() {
    return (
        <NoteContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/"
                        component={NotesDashboard}
                    exact>
                    </Route>
                    <Route
                        path="/:id"
                        component={NoteDetails}
                        exact>
                    </Route>
                </Switch>
            </BrowserRouter>
        </NoteContextProvider>
    )

}

export default App;
