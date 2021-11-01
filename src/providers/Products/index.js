import React, {createContext, useState, useContext, useEffect} from "react";
import { GENERAL } from "../../utils/constants";

const ProductsContext = createContext()

export const useProductsContext = () => {
    const context = useContext(ProductsContext)

    if (!context) {
        throw new Error(`ProductsContext provider is not found`);
    }

    return context;    
};

export const ProductsProvider = ({children}) => {
    const [filteredProducts, setFilteredProducts] = useState(GENERAL.EMPTY_ARRAY)
    const [filters, setFilters] = useState(GENERAL.EMPTY_ARRAY)
    const [allProducts, setAllProducts] = useState(GENERAL.EMPTY_ARRAY)
    const [slugs, setSlugs] = useState('')
    const [filterEnabled, setFilterEnabled] = useState(false)
    const [paginator, setPaginator] = useState(false)

    useEffect(() => {
        setFilters( prevFilters => {
            if (filterEnabled) {
                return [...prevFilters, ...slugs]
            } else {
                return prevFilters.filter((filter) => !slugs.includes(filter))
            } 
        })
    }, [slugs, filterEnabled])

    useEffect(() => {
        setFilteredProducts(() => {
            return (filters && filters.length) ?
                allProducts.filter( product => {
                    const category = product.data.category.slug;
                    return filters.includes(category)
                })
            : allProducts
        })
    }, [filters])    

    const handleFilterProducts = (event) => {
        const filterEnabled = event.target.checked;
        const filterSlugs = event.target.getAttribute('name').split(',')
        setSlugs(filterSlugs)
        setFilterEnabled(filterEnabled)
    }
  
    return (
        <ProductsContext.Provider value={{
            filteredProducts,
            setFilteredProducts,
            handleFilterProducts,
            allProducts,
            setAllProducts,
            setFilters,
            paginator,
            setPaginator
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

