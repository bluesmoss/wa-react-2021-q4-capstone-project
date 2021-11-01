import React, {Fragment, useEffect} from "react";
import {useLocation} from "react-router-dom";
import { Paginator, TextColored, TextGradient, Wrapper } from "../../components/Common";
import { ProductList, ProductPreview } from "../../components/Products";
import { useProductsContext } from "../../providers/Products";
import { GENERAL, TEXT_COLOR_TYPES } from "../../utils/constants";
import { useSearchData } from "../../utils/hooks/useSearchData";

function Search(){

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const { filteredProducts, handleFilterProducts, setFilteredProducts, setFilters, setAllProducts, setPaginator, filters, handleClearFilters} = useProductsContext()
    const { data : products, isLoading } = useSearchData(query.get('q'));

    console.log('lof', products);

    useEffect(()=>{
        if(products.results){
            const {results, ...paginator} = products;
            setAllProducts(products.results)
            setFilteredProducts(products.results)
            setFilters(GENERAL.EMPTY_ARRAY)
            setPaginator(paginator)
        }
    }, [products, isLoading])

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
                            <TextGradient color={"PRIMARY"} fontSize="3em">Results:</TextGradient>
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
                    </Fragment>  :     
                    
                    <Wrapper flex padding="100px">
                        <TextColored color={TEXT_COLOR_TYPES.SECONDARY}>No items Found</TextColored>
                    </Wrapper> 
                }

                       
     
            </section>
        </Fragment>
    )
}
export { Search }