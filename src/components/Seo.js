'use client';

import Head from 'next/head';

const Seo = ({
    title,
    description,
    keywords = '',
    image = 'https://mwimpebeauty.co.za/icon1.webp',
    url = '',
    siteName = 'Mwimpe Organics',
    author = 'Mwimpe Organics',
    logo = 'https://mwimpebeauty.co.za/icon1.webp',
    canonical = ''
}) => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url,
        image,
        publisher: {
            "@type": "Organization",
            name: siteName,
            logo: {
                "@type": "ImageObject",
                url: logo
            }
        }
    };

    return (
        <Head>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content={author} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Canonical Link */}
            {(canonical || url) && <link rel="canonical" href={canonical || url} />}

            {/* Open Graph Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Head>
    );
};

export default Seo;
