import './App.css';
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
import NotesDashboard from "./pages/NotesDashboard";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <NotesDashboard/>
                </Route>
            </Switch>
        </BrowserRouter>
    )

}

export default App;
