// Data from Wikipedia's Page summary API
// https://en.wikipedia.org/api/rest_v1/#/Page%20content/get_page_summary__title_

export type MockDataType = {
  type: string;
  title: string;
  displaytitle: string;
  namespace: {
    id: number;
    text: string;
  };
  wikibase_item: string;
  titles: {
    canonical: string;
    normalized: string;
    display: string;
  };
  pageid: number;
  thumbnail: {
    source: string;
    width: number;
    height: number;
  };
  originalimage: {
    source: string;
    width: number;
    height: number;
  };
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  description: string;
  description_source: string;
  content_urls: {
    desktop: {
      page: string;
      revisions: string;
      edit: string;
      talk: string;
    };
    mobile: {
      page: string;
      revisions: string;
      edit: string;
      talk: string;
    };
  };
  extract: string;
  extract_html: string;
};

export const mockData: Array<MockDataType> = [
  {
    type: 'standard',
    title: 'SN 1987A',
    displaytitle: '<span class="mw-page-title-main">SN 1987A</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q584905',
    titles: {
      canonical: 'SN_1987A',
      normalized: 'SN 1987A',
      display: '<span class="mw-page-title-main">SN 1987A</span>',
    },
    pageid: 28930,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Eso0708a.jpg/320px-Eso0708a.jpg',
      width: 320,
      height: 438,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/0/0a/Eso0708a.jpg',
      width: 2179,
      height: 2980,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1179035881',
    tid: 'fe9b3b10-67bd-11ee-8971-97e9d322e2a5',
    timestamp: '2023-10-07T12:49:01Z',
    description: '1987 supernova event in the constellation Dorado',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/SN_1987A',
        revisions: 'https://en.wikipedia.org/wiki/SN_1987A?action=history',
        edit: 'https://en.wikipedia.org/wiki/SN_1987A?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:SN_1987A',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/SN_1987A',
        revisions: 'https://en.m.wikipedia.org/wiki/Special:History/SN_1987A',
        edit: 'https://en.m.wikipedia.org/wiki/SN_1987A?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:SN_1987A',
      },
    },
    extract:
      'SN 1987A was a type II supernova in the Large Magellanic Cloud, a dwarf satellite galaxy of the Milky Way. It occurred approximately 51.4 kiloparsecs from Earth and was the closest observed supernova since Kepler\'s Supernova. 1987A\'s light reached Earth on February 23, 1987, and as the earliest supernova discovered that year, was labeled "1987A". Its brightness peaked in May, with an apparent magnitude of about 3.',
    extract_html:
      '<p><b>SN 1987A</b> was a type II supernova in the Large Magellanic Cloud, a dwarf satellite galaxy of the Milky Way. It occurred approximately 51.4 kiloparsecs from Earth and was the closest observed supernova since Kepler\'s Supernova. 1987A\'s light reached Earth on February 23, 1987, and as the earliest supernova discovered that year, was labeled "1987A". Its brightness peaked in May, with an apparent magnitude of about 3.</p>',
  },
  {
    type: 'standard',
    title: 'Crab Nebula',
    displaytitle: '<span class="mw-page-title-main">Crab Nebula</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q10934',
    titles: {
      canonical: 'Crab_Nebula',
      normalized: 'Crab Nebula',
      display: '<span class="mw-page-title-main">Crab Nebula</span>',
    },
    pageid: 82780,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/320px-Crab_Nebula.jpg',
      width: 320,
      height: 320,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/0/00/Crab_Nebula.jpg',
      width: 3864,
      height: 3864,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1176732596',
    tid: '6b61b010-67c0-11ee-b009-797ea4205e4c',
    timestamp: '2023-09-23T17:14:56Z',
    description: 'Supernova remnant in the constellation Taurus',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/Crab_Nebula',
        revisions: 'https://en.wikipedia.org/wiki/Crab_Nebula?action=history',
        edit: 'https://en.wikipedia.org/wiki/Crab_Nebula?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:Crab_Nebula',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/Crab_Nebula',
        revisions:
          'https://en.m.wikipedia.org/wiki/Special:History/Crab_Nebula',
        edit: 'https://en.m.wikipedia.org/wiki/Crab_Nebula?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:Crab_Nebula',
      },
    },
    extract:
      'The Crab Nebula is a supernova remnant and pulsar wind nebula in the constellation of Taurus. The common name comes from a drawing of the object produced by William Parsons, 3rd Earl of Rosse, in 1842 or 1843 using a 36-inch (91 cm) telescope that somewhat resembled a crab with arms. The nebula was discovered by English astronomer John Bevis in 1731. It corresponds with a bright supernova recorded by Chinese astronomers in 1054 as a guest star. The nebula was the first astronomical object identified that corresponds with a historically-observed supernova explosion.',
    extract_html:
      '<p>The <b>Crab Nebula</b> is a supernova remnant and pulsar wind nebula in the constellation of Taurus. The common name comes from a drawing of the object produced by William Parsons, 3rd Earl of Rosse, in 1842 or 1843 using a 36-inch (91 cm) telescope that somewhat resembled a crab with arms. The nebula was discovered by English astronomer John Bevis in 1731. It corresponds with a bright supernova recorded by Chinese astronomers in 1054 as a guest star. The nebula was the first astronomical object identified that corresponds with a historically-observed supernova explosion.</p>',
  },
];
