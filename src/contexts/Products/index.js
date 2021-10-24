import React, {createContext, useState} from "react";
import  {products} from '../../mocks/en-us';
import { GENERAL } from "../../utils/constants";

const ProductsContext = createContext()

function ProductsProvider(props){
    const { results: allProducts } = products;
    const [filteredProducts, setfilteredProducts] = useState(allProducts)
    const [filters, setfilters] = useState([])
    const totalProducts = allProducts.length;

    const filterProducts = (event) => {
        const filterEnabled = event.target.checked;
        const filterSlugs = event.target.getAttribute('name').split(',')
        if (filterEnabled) {
            addFilter(filterSlugs)
        } else {
            removeFilter(filterSlugs)
        }
        applyFilters()
    }

    const addFilter = (slugs) => {
        let temporalFilters = filters
        slugs.forEach(element => {
            temporalFilters.push(element)
        })
        setfilters(temporalFilters)
    }

    const removeFilter = (slugs) => {
        let temporalFilters = filters
        slugs.forEach(element => {
            const removeItem = filters.indexOf(element)
            temporalFilters.splice(removeItem, GENERAL.SINGLE_ELEMENT)
        })
        setfilters(temporalFilters)  
    }

    const applyFilters = () => {
        let productsUpdated = allProducts;
        if (filters.length > GENERAL.ELEMENT_EMPTY_LENGTH) {
            productsUpdated = allProducts.filter( product => {
                const category = product.data.category.slug;
                return filters.includes(category)
            })
        } 
        setfilteredProducts(productsUpdated)
    }
  
    return (
        <ProductsContext.Provider value={{
            filteredProducts,
            totalProducts,
            filterProducts
        }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export {ProductsContext, ProductsProvider}