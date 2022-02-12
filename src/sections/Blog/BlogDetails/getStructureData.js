export default function getStructureData({ headline, img, date, modified }) {
  return {
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: { headline },
      image: { img },
      author: {
        '@type': 'Organization',
        name: 'localistars'
      },
      publisher: {
        '@type': 'Organization',
        name: 'inweso GmbH',
        logo: {
          '@type': 'ImageObject',
          url: '/image/inweso.png'
        }
      },
      datePublished: { date },
      dateModified: { modified }
    })
  }
}
