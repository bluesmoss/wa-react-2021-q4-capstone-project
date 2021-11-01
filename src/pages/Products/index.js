import React, {useEffect} from "react";
import { Sidebar, Wrapper, Checkbox, TextGradient, Paginator, TextColored, Button} from "../../components/Common"
import { ProductList, ProductPreview } from "../../components/Products"
import { useProductsContext } from "../../providers/Products"
import { Fragment } from "react/cjs/react.production.min";
import { ELEMENT_SIZE, GENERAL, QUERY, TEXT_COLOR_TYPES } from "../../utils/constants";
import { useGetDataAPI } from "../../utils/hooks/useGetDataAPI";

function Products(){
    const { data : products, isLoading } = useGetDataAPI(QUERY.PRODUCTS_PREDICATE, QUERY.PRODUCTS_SIZE);
    const { filteredProducts, handleFilterProducts, setFilteredProducts, setFilters, setAllProducts, setPaginator, filters, handleClearFilters} = useProductsContext()
    const { data : { results : categoriesData} } = useGetDataAPI(QUERY.CATEGORY_PREDICATE, QUERY.CATEGORY_SIZE);

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
        <Wrapper flex justify="start">
            <Sidebar className="filters" >
                <Wrapper className="filters__header">
                    Filters
                </Wrapper>
                <Wrapper className="filters__section">
                    <span className="filters__title">Category</span>
                    {categoriesData && categoriesData.map((category) => (
                        <Checkbox 
                            key={category.id}
                            name= {category.data.name}
                            id={category.id}
                            type={category.slugs}
                            onChange={handleFilterProducts}
                            defaultChecked={false}
                        />
                    ))}                    
                </Wrapper>

                {
                (filters && filters.length) ? 
                    <Wrapper flex justify="center">
                        <Button className="filters__clear" onClick={handleClearFilters} size={ELEMENT_SIZE.MD}>Clear filters</Button>
                    </Wrapper>                     
                    : <Fragment/>
                }
          
            </Sidebar>
            <section className="results">
                {isLoading && 
                    <Wrapper flex padding="100px">
                        <TextColored color={TEXT_COLOR_TYPES.SECONDARY}>Loading....</TextColored>
                    </Wrapper>
                }

                {!isLoading && 
                    <Fragment>
                        <Wrapper padding="10px">
                            <TextGradient color={"PRIMARY"} fontSize="3em">Products</TextGradient>
                        </Wrapper>
                        <ProductList>
                            {filteredProducts.map((product, index) => (
                                <ProductPreview 
                                    key={product.id}
                                    data={product.data}
                                />                           
                            ))}                    
                        </ProductList>
                        <Paginator/>                        
                    </Fragment>                
                }
     
            </section>
        </Wrapper>
    )
}
export { Products }