import { ProductService } from "../service/productService"
import DepsContext from "./depsContext"

export const DepsContextProvider = ({children}) => {
    return (
      <DepsContext.Provider value={{
          productService : ProductService()
      }}>
          {children}
      </DepsContext.Provider>
    )
  }