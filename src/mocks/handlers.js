import { rest } from 'msw';
import { API_BASE_URL } from '../utils/constants';
import apiRef from './apiRef.json'
import featuredProducts from "./en-us/featured-products.json";
import featuredBanners from "./en-us/featured-banners.json";

export const handlers = [
  rest.get(API_BASE_URL, (req, res, ctx) => {
      console.log("Calling API Ref");
      return res(ctx.status(200), ctx.json(apiRef))
    }
  ),
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) => {
      const searchParams = req.url.searchParams;
      const query = searchParams.getAll('q');   
      console.log("Query", query);

      if (query[0].includes('banner')) {
        return res(ctx.status(200), ctx.json(featuredBanners))
      }

      if (query[0].includes('product')) {
        return res(ctx.status(200), ctx.json(featuredProducts))
      }

      return {}
      
    }
  ),
]