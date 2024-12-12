context PAGE ===========

import {createContext} from "react;"

export const counterContext = createContext(0);


================
App.js PAGE

import (context page)

const [counter, setCount] = useState(0)
<counterContext.Provider value={counter}>
</counterContext.Provider>



=============
Component PAGE
import {
    
}
