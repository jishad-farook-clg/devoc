import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
 
  const baseUrl = 'https://devoc.bvocfarookcollege.com';

  return {
    rules: {
      // "*" means this applies to ALL search engine bots
      userAgent: '*',
      
      allow: ['/', '/register', '/contact', '/course/', '/events/'],
      
    
      disallow: ['/api/', '/submit-task', '/web-design/'],
    },
    
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}