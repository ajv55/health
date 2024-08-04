import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.myfitgenius.com/',
            lastModified: new Date(),
        }
    ]
}