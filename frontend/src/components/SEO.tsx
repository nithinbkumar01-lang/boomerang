import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({ 
  title = "Boomerang Studios | High-End Video Production & Creative Agency", 
  description = "Boomerang Studios is a premier video production studio specializing in immersive storytelling, high-end commercials, and creative brand strategy.",
  keywords = "video production, creative agency, commercial production, brand storytelling, immersive video, Boomerang Studios",
  image = "https://ais-pre-qvs57k6ezzi23y4h3vhair-234584019589.asia-southeast1.run.app/og-image.jpg",
  url = "https://ais-pre-qvs57k6ezzi23y4h3vhair-234584019589.asia-southeast1.run.app",
  type = "website"
}: SEOProps) {
  const siteTitle = title.includes("Boomerang") ? title : `${title} | Boomerang Studios`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Boomerang Studios",
          "image": image,
          "@id": url,
          "url": url,
          "telephone": "+1-416-555-1234",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Artistic Lane, Suite 302",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "postalCode": "10001",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.7128,
            "longitude": -74.0060
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
          },
          "sameAs": [
            "https://www.instagram.com/boomerang",
            "https://www.twitter.com/boomerang",
            "https://www.linkedin.com/company/boomerang"
          ]
        })}
      </script>
    </Helmet>
  );
}
