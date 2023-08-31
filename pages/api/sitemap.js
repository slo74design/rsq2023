export default function handler(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/xml");

    // Instructing the Vercel edge to cache the file
    res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

    // generate sitemap here
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
<url>
<loc>https://www.remotesquid.com/</loc>
<lastmod>2023-08-31T14:16:16+00:00</lastmod>
<priority>1.00</priority>
</url>
<url>
<loc>https://www.remotesquid.com/about</loc>
<lastmod>2023-08-31T14:16:16+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.remotesquid.com/posts</loc>
<lastmod>2023-08-31T14:16:16+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.remotesquid.com/contact</loc>
<lastmod>2023-08-31T14:16:16+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.remotesquid.com/no-consigo-trafico-a-mi-sitio-web</loc>
<lastmod>2023-08-31T14:16:16+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.remotesquid.com/cat/6</loc>
<lastmod>2023-08-31T14:16:16+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.remotesquid.com/cat/8</loc>
<lastmod>2023-08-31T14:16:16+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.remotesquid.com/cat/5</loc>
<lastmod>2023-08-31T14:16:16+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.remotesquid.com/cat/1</loc>
<lastmod>2023-08-31T14:16:16+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.remotesquid.com/privacidad</loc>
<lastmod>2023-08-31T14:16:16+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.remotesquid.com/avisolegal</loc>
<lastmod>2023-08-31T14:16:16+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.remotesquid.com/cookies</loc>
<lastmod>2023-08-31T14:16:16+00:00</lastmod>
<priority>0.80</priority>
</url>
    </urlset>`;

    res.end(xml);
}
