import React, {Fragment, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import { Paginator, TextColored, TextGradient, Wrapper } from "../../components/Common";
import { ProductList, ProductPreview } from "../../components/Products";
import { useHeaderContext } from "../../providers/Header";
import { useProductsContext } from "../../providers/Products";
import { GENERAL, TEXT_COLOR_TYPES } from "../../utils/constants";
import { useSearchData } from "../../utils/hooks/useSearchData";

function Search(){

    const { setOpenModal, searchValue} = useHeaderContext()
    const [queryString, setQueryString] = useState('');
    const query = new URLSearchParams(useLocation().search).get('q')


    const { filteredProducts, setFilteredProducts, setFilters, setAllProducts, setPaginator} = useProductsContext()
    const { data : products, isLoading } = useSearchData(queryString);

    useEffect(()=>{
        if(products.results){
            const {results, ...paginator} = products;
            setAllProducts(products.results)
            setFilteredProducts(products.results)
            setFilters(GENERAL.EMPTY_ARRAY)
            setPaginator(paginator)
        }
    }, [products, isLoading, setAllProducts, setFilteredProducts, setFilters, setPaginator])

    useEffect(()=>{
        setOpenModal(false)
        setQueryString(query)
    }, [query, searchValue, setOpenModal])

    return (
        <Fragment>
            <section className="results">
                {isLoading && 
                    <Wrapper flex padding="100px">
                        <TextColored color={TEXT_COLOR_TYPES.SECONDARY}>Loading....</TextColored>
                    </Wrapper>
                }

                {(!isLoading && products.results.length) ?
                    <Fragment>
                        <Wrapper padding="10px">
                            <TextGradient color={"PRIMARY"} fontSize="3em">Results: </TextGradient>
                        </Wrapper>
                        <ProductList>
                            {filteredProducts.map((product, index) => (
                                <ProductPreview 
                                    key={product.id}
                                    data={product.data}
                                    id={product.id}
                                />                           
                            ))}                    
                        </ProductList>
                        <Paginator/>                        
                    </Fragment> : null
                }

                {(!isLoading && !products.results.length) ?
                    <Wrapper flex padding="100px">
                        <TextColored color={TEXT_COLOR_TYPES.SECONDARY}>No items found</TextColored>
                    </Wrapper> : null
                }                      

                       
     
            </section>
        </Fragment>
    )
}
export { Search }