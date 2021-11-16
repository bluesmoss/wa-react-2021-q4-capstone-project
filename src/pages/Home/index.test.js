import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Layout } from "../../components/Layout"
import { BrowserRouter as Router } from "react-router-dom";
import { HeaderProvider } from '../../providers/Header';
import { CartProvider } from '../../providers/Cart';
import { ProductsProvider } from '../../providers/Products';
import featuredBanners from "../../mocks/en-us/featured-banners.json";

describe('Testing Home page', () => {
    beforeEach(() => {
      render(
        <Router basename="/">
          <HeaderProvider>
          <CartProvider>
            <ProductsProvider>
              <Layout/>
            </ProductsProvider>        
          </CartProvider>
          </HeaderProvider>
        </Router>
      );
    });

    it('Should render banners from API', async () => {
      featuredBanners.results.forEach(({ data: { title } }) => {
        const textInHome = title.split('-')[0];
        expect(screen.getByText(textInHome)).toBeInTheDocument();
      });
    });
 
});