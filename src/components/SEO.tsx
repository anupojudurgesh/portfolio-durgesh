import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
  twitterHandle?: string;
  children?: React.ReactNode;
}

const SEO = ({
  title = "Durgesh ✦ Designer & Developer | Portfolio",
  description = "Durgesh is a creative frontend developer and designer building modern, high-performance websites, UI/UX, and digital products for brands and businesses.",
  keywords = "Durgesh, portfolio, frontend developer, web designer, UI/UX, React, branding, web development, digital design, creative developer, website design in amalapuram",
  image = "/Profile.jpg",
  url = "https://yourdomain.com",
  type = "website",
  siteName = "Durgesh Portfolio",
  locale = "en_US",
  twitterHandle = "@yourtwitter", // Replace with your Twitter handle
  children,
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Durgesh Anupoju" />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Apple & Mobile */}
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="application-name" content={siteName} />
      <meta name="theme-color" content="#ffffff" />

      {/* Favicons */}
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Durgesh Anupoju",
          "url": "${url}",
          "image": "${image}",
          "sameAs": [
            "https://www.linkedin.com/in/your-linkedin",
            "https://github.com/your-github",
            "https://twitter.com/yourtwitter"
          ],
          "jobTitle": "Frontend Developer & Designer",
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          }
        }
        `}
      </script>
      {children}
    </Helmet>
  );
};

export default SEO;
