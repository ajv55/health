import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/dashborad',
        },
        sitemap: 'https://www.myfitgenius.com/'
    }
}