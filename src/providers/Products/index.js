import React, {createContext, useState, useContext, useEffect} from "react";
import  {products} from '../../mocks/en-us';
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
    const { results: allProducts } = products;
    const [filteredProducts, setFilteredProducts] = useState(allProducts)
    const [filters, setFilters] = useState(GENERAL.EMPTY_ARRAY)
    const [totalProducts, setTotalProducts] = useState(allProducts.length)
    const [slugs, setSlugs] = useState('')
    const [filterEnabled, setFilterEnabled] = useState(false)

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
            handleFilterProducts,
            totalProducts,
            allProducts,
            setFilteredProducts,
            setFilters,
            setTotalProducts
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

