import { Metadata } from 'next';

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function generateMetadata({
  title = 'Living With Logic - Business Consulting & Leadership Development',
  description = 'Transform your business with expert consulting, strategic planning, and leadership development. Empowering organizations through logical frameworks and innovative solutions.',
  keywords = 'business consulting, leadership development, strategic planning, management consulting, organizational transformation, thought leadership',
  ogImage = '/og-image.jpg',
  canonical,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Living With Logic Team'
}: SeoHeadProps = {}): Metadata {
  const fullTitle = title.includes('Living With Logic') ? title : `${title} | Living With Logic`;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://livingwithlogic.com';
  
  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: author }],
    creator: 'Living With Logic',
    publisher: 'Living With Logic',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: canonical || siteUrl,
      siteName: 'Living With Logic',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: [author],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@livingwithlogic',
      site: '@livingwithlogic',
    },
    alternates: {
      canonical: canonical || siteUrl,
    },
  };
}

export default function SeoHead() {
  return null;
}
