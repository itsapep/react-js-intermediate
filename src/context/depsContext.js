import { createContext } from "react";
import { ProductService } from "../service/productService";

const DepsContext = createContext({productService : ProductService()})

export default DepsContext;