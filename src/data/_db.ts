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
  {
    type: 'standard',
    title: 'W49B',
    displaytitle: '<span class="mw-page-title-main">W49B</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q768765',
    titles: {
      canonical: 'W49B',
      normalized: 'W49B',
      display: '<span class="mw-page-title-main">W49B</span>',
    },
    pageid: 2259967,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Supernova_Remnant_W49B_in_x-ray%2C_radio%2C_and_infrared.jpg/320px-Supernova_Remnant_W49B_in_x-ray%2C_radio%2C_and_infrared.jpg',
      width: 320,
      height: 320,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/b/b1/Supernova_Remnant_W49B_in_x-ray%2C_radio%2C_and_infrared.jpg',
      width: 3600,
      height: 3600,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1163257664',
    tid: '28213030-67d6-11ee-9a45-61c7e64c5645',
    timestamp: '2023-07-03T21:03:56Z',
    description: 'Supernova remnant nebula in the constellation Aquila',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/W49B',
        revisions: 'https://en.wikipedia.org/wiki/W49B?action=history',
        edit: 'https://en.wikipedia.org/wiki/W49B?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:W49B',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/W49B',
        revisions: 'https://en.m.wikipedia.org/wiki/Special:History/W49B',
        edit: 'https://en.m.wikipedia.org/wiki/W49B?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:W49B',
      },
    },
    extract:
      'W49B is a nebula in Westerhout 49 (W49). The nebula is a supernova remnant, probably from a type Ib or Ic supernova that occurred around 1,000 years ago. It may have produced a gamma-ray burst and is thought to have left a black hole remnant.',
    extract_html:
      '<p><b>W49B</b> is a nebula in Westerhout 49 (W49). The nebula is a supernova remnant, probably from a type Ib or Ic supernova that occurred around 1,000 years ago. It may have produced a gamma-ray burst and is thought to have left a black hole remnant.</p>',
  },
  {
    type: 'standard',
    title: 'IC 443',
    displaytitle: '<span class="mw-page-title-main">IC 443</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q2355688',
    titles: {
      canonical: 'IC_443',
      normalized: 'IC 443',
      display: '<span class="mw-page-title-main">IC 443</span>',
    },
    pageid: 4529191,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/IC443.jpeg/320px-IC443.jpeg',
      width: 320,
      height: 250,
    },
    originalimage: {
      source: 'https://upload.wikimedia.org/wikipedia/commons/7/78/IC443.jpeg',
      width: 640,
      height: 499,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1161525514',
    tid: 'da150cb0-67dd-11ee-be0c-07c184178d94',
    timestamp: '2023-06-23T08:41:32Z',
    description: 'Supernova remnant in the constellation Gemini',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/IC_443',
        revisions: 'https://en.wikipedia.org/wiki/IC_443?action=history',
        edit: 'https://en.wikipedia.org/wiki/IC_443?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:IC_443',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/IC_443',
        revisions: 'https://en.m.wikipedia.org/wiki/Special:History/IC_443',
        edit: 'https://en.m.wikipedia.org/wiki/IC_443?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:IC_443',
      },
    },
    extract:
      'IC 443 is a galactic supernova remnant (SNR) in the constellation Gemini. On the plane of the sky, it is located near the star Eta Geminorum.\nIts distance is roughly 5,000 light years from Earth.',
    extract_html:
      '<p><b>IC 443</b> is a galactic supernova remnant (SNR) in the constellation Gemini. On the plane of the sky, it is located near the star Eta Geminorum.\nIts distance is roughly 5,000 light years from Earth.</p>',
  },
  {
    type: 'standard',
    title: 'LMC N49',
    displaytitle: '<span class="mw-page-title-main">LMC N49</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q3869340',
    titles: {
      canonical: 'LMC_N49',
      normalized: 'LMC N49',
      display: '<span class="mw-page-title-main">LMC N49</span>',
    },
    pageid: 18472063,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Sig06-030.jpg/320px-Sig06-030.jpg',
      width: 320,
      height: 334,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/0/0e/Sig06-030.jpg',
      width: 2320,
      height: 2420,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1154750984',
    tid: '7dc533d0-67ed-11ee-b049-71e342557d4a',
    timestamp: '2023-05-14T12:39:40Z',
    description: 'Supernova remnant in the constellation Dorado',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/LMC_N49',
        revisions: 'https://en.wikipedia.org/wiki/LMC_N49?action=history',
        edit: 'https://en.wikipedia.org/wiki/LMC_N49?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:LMC_N49',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/LMC_N49',
        revisions: 'https://en.m.wikipedia.org/wiki/Special:History/LMC_N49',
        edit: 'https://en.m.wikipedia.org/wiki/LMC_N49?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:LMC_N49',
      },
    },
    extract:
      'N49 or LMC N49, also known as Brasil Nebula, is the brightest supernova remnant in the Large Magellanic Cloud, approximately 160,000 light-years from Earth. Its form has been assessed to be roughly 5,000 years old.',
    extract_html:
      '<p><b>N49</b> or <b>LMC N49</b>, also known as <b>Brasil Nebula</b>, is the brightest supernova remnant in the Large Magellanic Cloud, approximately 160,000 light-years from Earth. Its form has been assessed to be roughly 5,000 years old.</p>',
  },
  {
    type: 'standard',
    title: 'Ring Nebula',
    displaytitle: '<span class="mw-page-title-main">Ring Nebula</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q13969',
    titles: {
      canonical: 'Ring_Nebula',
      normalized: 'Ring Nebula',
      display: '<span class="mw-page-title-main">Ring Nebula</span>',
    },
    pageid: 90117,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/M57_Webb.jpg/320px-M57_Webb.jpg',
      width: 320,
      height: 322,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/e/e7/M57_Webb.jpg',
      width: 4532,
      height: 4565,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1179673343',
    tid: 'c448cf50-685c-11ee-9c9a-39fece45f2cd',
    timestamp: '2023-10-11T17:36:51Z',
    description: 'Planetary nebula in Lyra',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/Ring_Nebula',
        revisions: 'https://en.wikipedia.org/wiki/Ring_Nebula?action=history',
        edit: 'https://en.wikipedia.org/wiki/Ring_Nebula?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:Ring_Nebula',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/Ring_Nebula',
        revisions:
          'https://en.m.wikipedia.org/wiki/Special:History/Ring_Nebula',
        edit: 'https://en.m.wikipedia.org/wiki/Ring_Nebula?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:Ring_Nebula',
      },
    },
    extract:
      '\n\nThe Ring Nebula is a planetary nebula in the northern constellation of Lyra. Such a nebula is formed when a star, during the last stages of its evolution before becoming a white dwarf, expels a vast luminous envelope of ionized gas into the surrounding interstellar space.',
    extract_html:
      '<p>\n\nThe <b>Ring Nebula</b> is a planetary nebula in the northern constellation of Lyra. Such a nebula is formed when a star, during the last stages of its evolution before becoming a white dwarf, expels a vast luminous envelope of ionized gas into the surrounding interstellar space.</p>',
  },
  {
    type: 'standard',
    title: 'Helix Nebula',
    displaytitle: '<span class="mw-page-title-main">Helix Nebula</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q97017154',
    titles: {
      canonical: 'Helix_Nebula',
      normalized: 'Helix Nebula',
      display: '<span class="mw-page-title-main">Helix Nebula</span>',
    },
    pageid: 206634,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/NGC7293_%282004%29.jpg/320px-NGC7293_%282004%29.jpg',
      width: 320,
      height: 345,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/b/b1/NGC7293_%282004%29.jpg',
      width: 6145,
      height: 6623,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1172052208',
    tid: '7edcd010-67c6-11ee-bee2-3da6416db08b',
    timestamp: '2023-08-24T17:01:48Z',
    description: 'Planetary nebula in the constellation Aquarius',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/Helix_Nebula',
        revisions: 'https://en.wikipedia.org/wiki/Helix_Nebula?action=history',
        edit: 'https://en.wikipedia.org/wiki/Helix_Nebula?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:Helix_Nebula',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/Helix_Nebula',
        revisions:
          'https://en.m.wikipedia.org/wiki/Special:History/Helix_Nebula',
        edit: 'https://en.m.wikipedia.org/wiki/Helix_Nebula?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:Helix_Nebula',
      },
    },
    extract:
      'The Helix Nebula is a planetary nebula (PN) located in the constellation Aquarius. Discovered by Karl Ludwig Harding, most likely before 1824, this object is one of the closest of all the bright planetary nebulae to Earth. The distance, measured by the Gaia mission, is 655±13 light-years. It is similar in appearance to the Cat\'s Eye Nebula and the Ring Nebula, whose size, age, and physical characteristics are similar to the Dumbbell Nebula, varying only in its relative proximity and the appearance from the equatorial viewing angle. The Helix Nebula has sometimes been referred to as the "Eye of God" in pop culture, as well as the "Eye of Sauron".',
    extract_html:
      '<p>The <b>Helix Nebula</b> is a planetary nebula (PN) located in the constellation Aquarius. Discovered by Karl Ludwig Harding, most likely before 1824, this object is one of the closest of all the bright planetary nebulae to Earth. The distance, measured by the <i>Gaia</i> mission, is 655±13 light-years. It is similar in appearance to the Cat\'s Eye Nebula and the Ring Nebula, whose size, age, and physical characteristics are similar to the Dumbbell Nebula, varying only in its relative proximity and the appearance from the equatorial viewing angle. The Helix Nebula has sometimes been referred to as the "Eye of God" in pop culture, as well as the "Eye of Sauron".</p>',
  },
  {
    type: 'standard',
    title: "Cat's Eye Nebula",
    displaytitle:
      '<span class="mw-page-title-main">Cat&#039;s Eye Nebula</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q15829',
    titles: {
      canonical: "Cat's_Eye_Nebula",
      normalized: "Cat's Eye Nebula",
      display: '<span class="mw-page-title-main">Cat&#039;s Eye Nebula</span>',
    },
    pageid: 250882,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/NGC6543.jpg/320px-NGC6543.jpg',
      width: 320,
      height: 320,
    },
    originalimage: {
      source: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/NGC6543.jpg',
      width: 2100,
      height: 2100,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1170397976',
    tid: '5f5266e0-67c8-11ee-813e-3bb0c0cc4841',
    timestamp: '2023-08-14T20:44:12Z',
    description: 'Planetary nebula in the constellation Draco',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: "https://en.wikipedia.org/wiki/Cat's_Eye_Nebula",
        revisions:
          "https://en.wikipedia.org/wiki/Cat's_Eye_Nebula?action=history",
        edit: "https://en.wikipedia.org/wiki/Cat's_Eye_Nebula?action=edit",
        talk: "https://en.wikipedia.org/wiki/Talk:Cat's_Eye_Nebula",
      },
      mobile: {
        page: "https://en.m.wikipedia.org/wiki/Cat's_Eye_Nebula",
        revisions:
          "https://en.m.wikipedia.org/wiki/Special:History/Cat's_Eye_Nebula",
        edit: "https://en.m.wikipedia.org/wiki/Cat's_Eye_Nebula?action=edit",
        talk: "https://en.m.wikipedia.org/wiki/Talk:Cat's_Eye_Nebula",
      },
    },
    extract:
      "The Cat's Eye Nebula is a planetary nebula in the northern constellation of Draco, discovered by William Herschel on February 15, 1786. It was the first planetary nebula whose spectrum was investigated by the English amateur astronomer William Huggins, demonstrating that planetary nebulae were gaseous and not stellar in nature. Structurally, the object has had high-resolution images by the Hubble Space Telescope revealing knots, jets, bubbles and complex arcs, being illuminated by the central hot planetary nebula nucleus (PNN).\nIt is a well-studied object that has been observed from radio to X-ray wavelengths.",
    extract_html:
      "<p>The <b>Cat's Eye Nebula</b> is a planetary nebula in the northern constellation of Draco, discovered by William Herschel on February 15, 1786. It was the first planetary nebula whose spectrum was investigated by the English amateur astronomer William Huggins, demonstrating that planetary nebulae were gaseous and not stellar in nature. Structurally, the object has had high-resolution images by the Hubble Space Telescope revealing knots, jets, bubbles and complex arcs, being illuminated by the central hot planetary nebula nucleus (PNN).\nIt is a well-studied object that has been observed from radio to X-ray wavelengths.</p>",
  },
  {
    type: 'standard',
    title: 'Little Ghost Nebula',
    displaytitle: '<span class="mw-page-title-main">Little Ghost Nebula</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q913140',
    titles: {
      canonical: 'Little_Ghost_Nebula',
      normalized: 'Little Ghost Nebula',
      display: '<span class="mw-page-title-main">Little Ghost Nebula</span>',
    },
    pageid: 27919881,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/NGC_6369HST.jpg/320px-NGC_6369HST.jpg',
      width: 320,
      height: 266,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/c/c0/NGC_6369HST.jpg',
      width: 2200,
      height: 1832,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1158688795',
    tid: '61aa4020-67f5-11ee-8156-cf58154b1149',
    timestamp: '2023-06-05T16:48:14Z',
    description: 'Planetary nebula in the constellation Ophiuchus',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/Little_Ghost_Nebula',
        revisions:
          'https://en.wikipedia.org/wiki/Little_Ghost_Nebula?action=history',
        edit: 'https://en.wikipedia.org/wiki/Little_Ghost_Nebula?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:Little_Ghost_Nebula',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/Little_Ghost_Nebula',
        revisions:
          'https://en.m.wikipedia.org/wiki/Special:History/Little_Ghost_Nebula',
        edit: 'https://en.m.wikipedia.org/wiki/Little_Ghost_Nebula?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:Little_Ghost_Nebula',
      },
    },
    extract:
      'Little Ghost Nebula, also known as NGC 6369, is a planetary nebula in the constellation Ophiuchus. It was discovered by William Herschel.',
    extract_html:
      '<p><b>Little Ghost Nebula</b>, also known as <b>NGC 6369</b>, is a planetary nebula in the constellation Ophiuchus. It was discovered by William Herschel.</p>',
  },
  {
    type: 'standard',
    title: 'Medusa Nebula',
    displaytitle: '<span class="mw-page-title-main">Medusa Nebula</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q1148673',
    titles: {
      canonical: 'Medusa_Nebula',
      normalized: 'Medusa Nebula',
      display: '<span class="mw-page-title-main">Medusa Nebula</span>',
    },
    pageid: 5642715,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Abell21_-_Noaoann09008a.jpg/320px-Abell21_-_Noaoann09008a.jpg',
      width: 320,
      height: 319,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/d/d3/Abell21_-_Noaoann09008a.jpg',
      width: 8333,
      height: 8304,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1123486428',
    tid: '1a3c03a0-67e0-11ee-8cf0-576b9eb5b039',
    timestamp: '2022-11-24T00:42:39Z',
    description: 'Planetary nebula in constellation Gemini',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/Medusa_Nebula',
        revisions: 'https://en.wikipedia.org/wiki/Medusa_Nebula?action=history',
        edit: 'https://en.wikipedia.org/wiki/Medusa_Nebula?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:Medusa_Nebula',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/Medusa_Nebula',
        revisions:
          'https://en.m.wikipedia.org/wiki/Special:History/Medusa_Nebula',
        edit: 'https://en.m.wikipedia.org/wiki/Medusa_Nebula?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:Medusa_Nebula',
      },
    },
    extract:
      'The Medusa Nebula is a planetary nebula in the constellation of Gemini. It is also known as Abell 21 and Sharpless 2-274. It was originally discovered in 1955 by University of California, Los Angeles astronomer George O. Abell, who classified it as an old planetary nebula. Until the early 1970s, the nebula was thought to be a supernova remnant. With the computation of expansion velocities and the thermal character of the radio emission, Soviet astronomers in 1971 concluded that it was most likely a planetary nebula. As the nebula is so large, its surface brightness is very low, with surface magnitudes of between +15.99 and +25 reported.',
    extract_html:
      '<p>The <b>Medusa Nebula</b> is a planetary nebula in the constellation of Gemini. It is also known as Abell 21 and Sharpless 2-274. It was originally discovered in 1955 by University of California, Los Angeles astronomer George O. Abell, who classified it as an old planetary nebula. Until the early 1970s, the nebula was thought to be a supernova remnant. With the computation of expansion velocities and the thermal character of the radio emission, Soviet astronomers in 1971 concluded that it was most likely a planetary nebula. As the nebula is so large, its surface brightness is very low, with surface magnitudes of between +15.99 and +25 reported.</p>',
  },
  {
    type: 'standard',
    title: 'Whirlpool Galaxy',
    displaytitle: '<span class="mw-page-title-main">Whirlpool Galaxy</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q13957',
    titles: {
      canonical: 'Whirlpool_Galaxy',
      normalized: 'Whirlpool Galaxy',
      display: '<span class="mw-page-title-main">Whirlpool Galaxy</span>',
    },
    pageid: 715308,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Messier51_sRGB.jpg/320px-Messier51_sRGB.jpg',
      width: 320,
      height: 222,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/d/db/Messier51_sRGB.jpg',
      width: 11477,
      height: 7965,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1175620397',
    tid: 'dfb2eb00-67cf-11ee-8ad2-8b132dcd3415',
    timestamp: '2023-09-16T07:01:33Z',
    description: 'Galaxy in the constellation Canes Venatici',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/Whirlpool_Galaxy',
        revisions:
          'https://en.wikipedia.org/wiki/Whirlpool_Galaxy?action=history',
        edit: 'https://en.wikipedia.org/wiki/Whirlpool_Galaxy?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:Whirlpool_Galaxy',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/Whirlpool_Galaxy',
        revisions:
          'https://en.m.wikipedia.org/wiki/Special:History/Whirlpool_Galaxy',
        edit: 'https://en.m.wikipedia.org/wiki/Whirlpool_Galaxy?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:Whirlpool_Galaxy',
      },
    },
    extract:
      'The Whirlpool Galaxy, also known as Messier 51a (M51a) or NGC 5194, is an interacting grand-design spiral galaxy with a Seyfert 2 active galactic nucleus. It lies in the constellation Canes Venatici, and was the first galaxy to be classified as a spiral galaxy. It is 32 million light-years away and 109,000 ly (33,280 pc) in diameter.',
    extract_html:
      '<p>The <b>Whirlpool Galaxy</b>, also known as <b>Messier 51a</b> (<b>M51a</b>) or <b>NGC 5194</b>, is an interacting grand-design spiral galaxy with a Seyfert 2 active galactic nucleus. It lies in the constellation Canes Venatici, and was the first galaxy to be classified as a spiral galaxy. It is 32 million light-years away and 109,000 ly (33,280 pc) in diameter.</p>',
  },
];
