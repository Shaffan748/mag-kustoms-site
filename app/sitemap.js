import { products, site } from '../lib/site';
import { productCategories } from '../lib/product-categories';
export const dynamic = 'force-static';
export default function sitemap(){const staticRoutes=['','/services','/about','/faq','/contact','/products','/privacy-policy','/terms-and-conditions']; return [...staticRoutes.map(route=>({url:`${site.url}${route}`,lastModified:new Date(),changeFrequency:'monthly',priority:route===''?1:.7})),...[...productCategories,...products].map(p=>({url:`${site.url}/products/${p.slug}`,lastModified:new Date(),changeFrequency:'monthly',priority:.8}))]}


