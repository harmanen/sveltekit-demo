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
  {
    type: 'standard',
    title: 'Pinwheel Galaxy',
    displaytitle: '<span class="mw-page-title-main">Pinwheel Galaxy</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q14371',
    titles: {
      canonical: 'Pinwheel_Galaxy',
      normalized: 'Pinwheel Galaxy',
      display: '<span class="mw-page-title-main">Pinwheel Galaxy</span>',
    },
    pageid: 319122,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/M101_hires_STScI-PRC2006-10a.jpg/320px-M101_hires_STScI-PRC2006-10a.jpg',
      width: 320,
      height: 250,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/c/c5/M101_hires_STScI-PRC2006-10a.jpg',
      width: 15852,
      height: 12392,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1175542017',
    tid: '87ccafd0-67c9-11ee-9b66-a507917c47f1',
    timestamp: '2023-09-15T19:20:32Z',
    description: 'Galaxy in the constellation Ursa Major',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/Pinwheel_Galaxy',
        revisions:
          'https://en.wikipedia.org/wiki/Pinwheel_Galaxy?action=history',
        edit: 'https://en.wikipedia.org/wiki/Pinwheel_Galaxy?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:Pinwheel_Galaxy',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/Pinwheel_Galaxy',
        revisions:
          'https://en.m.wikipedia.org/wiki/Special:History/Pinwheel_Galaxy',
        edit: 'https://en.m.wikipedia.org/wiki/Pinwheel_Galaxy?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:Pinwheel_Galaxy',
      },
    },
    extract:
      'The Pinwheel Galaxy is a face-on spiral galaxy 21 million light-years away from Earth in the constellation Ursa Major. It was discovered by Pierre Méchain in 1781 and was communicated that year to Charles Messier, who verified its position for inclusion in the Messier Catalogue as one of its final entries.',
    extract_html:
      '<p>The <b>Pinwheel Galaxy</b> is a face-on spiral galaxy 21 million light-years away from Earth in the constellation Ursa Major. It was discovered by Pierre Méchain in 1781 and was communicated that year to Charles Messier, who verified its position for inclusion in the <i>Messier Catalogue</i> as one of its final entries.</p>',
  },
  {
    type: 'standard',
    title: 'Messier 77',
    displaytitle: '<span class="mw-page-title-main">Messier 77</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q14017',
    titles: {
      canonical: 'Messier_77',
      normalized: 'Messier 77',
      display: '<span class="mw-page-title-main">Messier 77</span>',
    },
    pageid: 967488,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Messier_77_spiral_galaxy_by_HST.jpg/320px-Messier_77_spiral_galaxy_by_HST.jpg',
      width: 320,
      height: 252,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/d/d9/Messier_77_spiral_galaxy_by_HST.jpg',
      width: 2948,
      height: 2321,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1171542366',
    tid: 'fbb85620-69d0-11ee-85ed-6363cc12b1ee',
    timestamp: '2023-08-21T19:16:32Z',
    description: 'Barred spiral galaxy in the constellation Cetus',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/Messier_77',
        revisions: 'https://en.wikipedia.org/wiki/Messier_77?action=history',
        edit: 'https://en.wikipedia.org/wiki/Messier_77?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:Messier_77',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/Messier_77',
        revisions: 'https://en.m.wikipedia.org/wiki/Special:History/Messier_77',
        edit: 'https://en.m.wikipedia.org/wiki/Messier_77?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:Messier_77',
      },
    },
    extract:
      'Messier 77 (M77), also known as NGC 1068 or the Squid Galaxy, is a barred spiral galaxy in the constellation Cetus. It is about 47 million light-years (14 Mpc) away from Earth. Messier 77 was discovered by Pierre Méchain in 1780, who originally described it as a nebula. Méchain then communicated his discovery to Charles Messier, who subsequently listed the object in his catalog. Both Messier and William Herschel described this galaxy as a star cluster. Today, however, the object is known to be a galaxy.',
    extract_html:
      '<p><b>Messier 77</b> (<b>M77</b>), also known as <b>NGC 1068</b> or the <b>Squid Galaxy</b>, is a barred spiral galaxy in the constellation Cetus. It is about 47 million light-years (14 Mpc) away from Earth. Messier 77 was discovered by Pierre Méchain in 1780, who originally described it as a nebula. Méchain then communicated his discovery to Charles Messier, who subsequently listed the object in his catalog. Both Messier and William Herschel described this galaxy as a star cluster. Today, however, the object is known to be a galaxy.</p>',
  },
  {
    type: 'standard',
    title: 'Messier 100',
    displaytitle: '<span class="mw-page-title-main">Messier 100</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q14365',
    titles: {
      canonical: 'Messier_100',
      normalized: 'Messier 100',
      display: '<span class="mw-page-title-main">Messier 100</span>',
    },
    pageid: 142339,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Messier_100_%E2%80%94_Grand_Design_Splendour.jpg/320px-Messier_100_%E2%80%94_Grand_Design_Splendour.jpg',
      width: 320,
      height: 240,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/8/85/Messier_100_%E2%80%94_Grand_Design_Splendour.jpg',
      width: 1257,
      height: 943,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1174966855',
    tid: 'f7a25a40-67c3-11ee-8ef5-07b6d19a6ac6',
    timestamp: '2023-09-11T21:59:19Z',
    description: 'Galaxy in the constellation Coma Berenices',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/Messier_100',
        revisions: 'https://en.wikipedia.org/wiki/Messier_100?action=history',
        edit: 'https://en.wikipedia.org/wiki/Messier_100?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:Messier_100',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/Messier_100',
        revisions:
          'https://en.m.wikipedia.org/wiki/Special:History/Messier_100',
        edit: 'https://en.m.wikipedia.org/wiki/Messier_100?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:Messier_100',
      },
    },
    extract:
      'Messier 100 is a grand design intermediate spiral galaxy in the southern part of the mildly northern Coma Berenices. It is one of the brightest and largest galaxies in the Virgo Cluster and is approximately 55 million light-years from our galaxy, its diameter being 107,000 light years, and being about 60% as large. It was discovered by Pierre Méchain in 1781 and 29 days later seen again and entered by Charles Messier in his catalogue "of nebulae and star clusters".. It was one of the first spiral galaxies to be discovered, and was listed as one of fourteen spiral nebulae by Lord William Parsons of Rosse in 1850. NGC 4323 and NGC 4328 are satellite galaxies of M100; the former is connected with it by a bridge of luminous matter.',
    extract_html:
      '<p><b>Messier 100</b> is a grand design intermediate spiral galaxy in the southern part of the mildly northern Coma Berenices. It is one of the brightest and largest galaxies in the Virgo Cluster and is approximately 55 million light-years from our galaxy, its diameter being 107,000 light years, and being about 60% as large. It was discovered by Pierre Méchain in 1781 and 29 days later seen again and entered by Charles Messier in his catalogue "of nebulae and star clusters".. It was one of the first spiral galaxies to be discovered, and was listed as one of fourteen spiral nebulae by Lord William Parsons of Rosse in 1850. NGC 4323 and NGC 4328 are satellite galaxies of M100; the former is connected with it by a bridge of luminous matter.</p>',
  },
  {
    type: 'standard',
    title: 'Andromeda Galaxy',
    displaytitle: '<span class="mw-page-title-main">Andromeda Galaxy</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q2469',
    titles: {
      canonical: 'Andromeda_Galaxy',
      normalized: 'Andromeda Galaxy',
      display: '<span class="mw-page-title-main">Andromeda Galaxy</span>',
    },
    pageid: 74331,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/M31_09-01-2011_%28cropped%29.jpg/320px-M31_09-01-2011_%28cropped%29.jpg',
      width: 320,
      height: 229,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/c/c2/M31_09-01-2011_%28cropped%29.jpg',
      width: 3500,
      height: 2500,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1179882463',
    tid: 'edc27210-6969-11ee-b37a-81b34085db30',
    timestamp: '2023-10-13T01:43:30Z',
    description: 'Barred spiral galaxy in the Local Group',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/Andromeda_Galaxy',
        revisions:
          'https://en.wikipedia.org/wiki/Andromeda_Galaxy?action=history',
        edit: 'https://en.wikipedia.org/wiki/Andromeda_Galaxy?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:Andromeda_Galaxy',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/Andromeda_Galaxy',
        revisions:
          'https://en.m.wikipedia.org/wiki/Special:History/Andromeda_Galaxy',
        edit: 'https://en.m.wikipedia.org/wiki/Andromeda_Galaxy?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:Andromeda_Galaxy',
      },
    },
    extract:
      "The Andromeda Galaxy is a barred spiral galaxy and is the nearest major galaxy to the Milky Way. It was originally named the Andromeda Nebula and is cataloged as Messier 31, M31, and NGC 224. Andromeda has a diameter of about 46.56 kiloparsecs and is approximately 765 kpc from Earth. The galaxy's name stems from the area of Earth's sky in which it appears, the constellation of Andromeda, which itself is named after the princess who was the wife of Perseus in Greek mythology.",
    extract_html:
      "<p>The <b>Andromeda Galaxy</b> is a barred spiral galaxy and is the nearest major galaxy to the Milky Way. It was originally named the <b>Andromeda Nebula</b> and is cataloged as <b>Messier 31</b>, <b>M31</b>, and <b>NGC 224</b>. Andromeda has a diameter of about 46.56 kiloparsecs and is approximately 765 kpc from Earth. The galaxy's name stems from the area of Earth's sky in which it appears, the constellation of Andromeda, which itself is named after the princess who was the wife of Perseus in Greek mythology.</p>",
  },
  {
    type: 'standard',
    title: 'Comet NEOWISE',
    displaytitle: '<span class="mw-page-title-main">Comet NEOWISE</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q90776919',
    titles: {
      canonical: 'Comet_NEOWISE',
      normalized: 'Comet NEOWISE',
      display: '<span class="mw-page-title-main">Comet NEOWISE</span>',
    },
    pageid: 63552467,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Comet_2020_F3_%28NEOWISE%29_on_Jul_14_2020_aligned_to_stars.jpg/320px-Comet_2020_F3_%28NEOWISE%29_on_Jul_14_2020_aligned_to_stars.jpg',
      width: 320,
      height: 221,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/b/ba/Comet_2020_F3_%28NEOWISE%29_on_Jul_14_2020_aligned_to_stars.jpg',
      width: 2900,
      height: 2000,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1178136019',
    tid: 'a7399b90-6098-11ee-b4f1-ddec6610cc2e',
    timestamp: '2023-10-01T20:25:22Z',
    description: 'Bright comet of July 2020',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/Comet_NEOWISE',
        revisions: 'https://en.wikipedia.org/wiki/Comet_NEOWISE?action=history',
        edit: 'https://en.wikipedia.org/wiki/Comet_NEOWISE?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:Comet_NEOWISE',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/Comet_NEOWISE',
        revisions:
          'https://en.m.wikipedia.org/wiki/Special:History/Comet_NEOWISE',
        edit: 'https://en.m.wikipedia.org/wiki/Comet_NEOWISE?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:Comet_NEOWISE',
      },
    },
    extract:
      'C/2020 F3 (NEOWISE) or Comet NEOWISE is a long period comet with a near-parabolic orbit discovered on March 27, 2020, by astronomers during the NEOWISE mission of the Wide-field Infrared Survey Explorer (WISE) space telescope. At that time, it was an 18th-magnitude object, located 2 AU away from the Sun and 1.7 AU away from Earth.',
    extract_html:
      '<p><b>C/2020 F3 (NEOWISE)</b> or <b>Comet NEOWISE</b> is a long period comet with a near-parabolic orbit discovered on March 27, 2020, by astronomers during the <i>NEOWISE</i> mission of the Wide-field Infrared Survey Explorer (WISE) space telescope. At that time, it was an 18th-magnitude object, located 2 AU away from the Sun and 1.7 AU away from Earth.</p>',
  },
  {
    type: 'standard',
    title: 'Comet McNaught',
    displaytitle: '<span class="mw-page-title-main">Comet McNaught</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q4705',
    titles: {
      canonical: 'Comet_McNaught',
      normalized: 'Comet McNaught',
      display: '<span class="mw-page-title-main">Comet McNaught</span>',
    },
    pageid: 8779868,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Comet_P1_McNaught02_-_23-01-07.jpg/320px-Comet_P1_McNaught02_-_23-01-07.jpg',
      width: 320,
      height: 213,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Comet_P1_McNaught02_-_23-01-07.jpg',
      width: 1600,
      height: 1067,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1162440485',
    tid: 'e2bc4350-67e3-11ee-ae0c-3908f8debfef',
    timestamp: '2023-06-29T05:39:07Z',
    description: 'Non-periodic comet',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/Comet_McNaught',
        revisions:
          'https://en.wikipedia.org/wiki/Comet_McNaught?action=history',
        edit: 'https://en.wikipedia.org/wiki/Comet_McNaught?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:Comet_McNaught',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/Comet_McNaught',
        revisions:
          'https://en.m.wikipedia.org/wiki/Special:History/Comet_McNaught',
        edit: 'https://en.m.wikipedia.org/wiki/Comet_McNaught?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:Comet_McNaught',
      },
    },
    extract:
      'Comet McNaught, also known as the Great Comet of 2007 and given the designation C/2006 P1, is a non-periodic comet discovered on 7 August 2006 by British-Australian astronomer Robert H. McNaught using the Uppsala Southern Schmidt Telescope. It was the brightest comet in over 40 years, and was easily visible to the naked eye for observers in the Southern Hemisphere in January and February 2007.',
    extract_html:
      '<p><b>Comet McNaught</b>, also known as the <b>Great Comet of 2007</b> and given the designation <b>C/2006 P1</b>, is a non-periodic comet discovered on 7 August 2006 by British-Australian astronomer Robert H. McNaught using the Uppsala Southern Schmidt Telescope. It was the brightest comet in over 40 years, and was easily visible to the naked eye for observers in the Southern Hemisphere in January and February 2007.</p>',
  },
  {
    type: 'standard',
    title: 'Comet Hale–Bopp',
    displaytitle: '<span class="mw-page-title-main">Comet Hale–Bopp</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q69854',
    titles: {
      canonical: 'Comet_Hale–Bopp',
      normalized: 'Comet Hale–Bopp',
      display: '<span class="mw-page-title-main">Comet Hale–Bopp</span>',
    },
    pageid: 7227,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Comet_Hale-Bopp_1995O1.jpg/320px-Comet_Hale-Bopp_1995O1.jpg',
      width: 320,
      height: 320,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/b/ba/Comet_Hale-Bopp_1995O1.jpg',
      width: 1500,
      height: 1500,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1179411552',
    tid: '921d7cf0-67bd-11ee-a08f-89e59157f9e9',
    timestamp: '2023-10-09T23:41:58Z',
    description: 'Long-period comet',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/Comet_Hale%E2%80%93Bopp',
        revisions:
          'https://en.wikipedia.org/wiki/Comet_Hale%E2%80%93Bopp?action=history',
        edit: 'https://en.wikipedia.org/wiki/Comet_Hale%E2%80%93Bopp?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:Comet_Hale%E2%80%93Bopp',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/Comet_Hale%E2%80%93Bopp',
        revisions:
          'https://en.m.wikipedia.org/wiki/Special:History/Comet_Hale%E2%80%93Bopp',
        edit: 'https://en.m.wikipedia.org/wiki/Comet_Hale%E2%80%93Bopp?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:Comet_Hale%E2%80%93Bopp',
      },
    },
    extract:
      'Comet Hale–Bopp is a comet that was one of the most widely observed of the 20th century and one of the brightest seen for many decades.',
    extract_html:
      '<p><b>Comet Hale–Bopp</b> is a comet that was one of the most widely observed of the 20th century and one of the brightest seen for many decades.</p>',
  },
  {
    type: 'standard',
    title: 'Comet Hyakutake',
    displaytitle: '<span class="mw-page-title-main">Comet Hyakutake</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q16741',
    titles: {
      canonical: 'Comet_Hyakutake',
      normalized: 'Comet Hyakutake',
      display: '<span class="mw-page-title-main">Comet Hyakutake</span>',
    },
    pageid: 141738,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Komet_Hyakutake_von_Franz_Haar_%281%29.jpg/320px-Komet_Hyakutake_von_Franz_Haar_%281%29.jpg',
      width: 320,
      height: 213,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/0/0a/Komet_Hyakutake_von_Franz_Haar_%281%29.jpg',
      width: 719,
      height: 479,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1177321670',
    tid: '20893d20-67c4-11ee-a266-d9e94c6e77f6',
    timestamp: '2023-09-27T05:03:53Z',
    description: 'Comet that passed close to Earth in March 1996',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/Comet_Hyakutake',
        revisions:
          'https://en.wikipedia.org/wiki/Comet_Hyakutake?action=history',
        edit: 'https://en.wikipedia.org/wiki/Comet_Hyakutake?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:Comet_Hyakutake',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/Comet_Hyakutake',
        revisions:
          'https://en.m.wikipedia.org/wiki/Special:History/Comet_Hyakutake',
        edit: 'https://en.m.wikipedia.org/wiki/Comet_Hyakutake?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:Comet_Hyakutake',
      },
    },
    extract:
      'Comet Hyakutake is a comet discovered on 31 January 1996. It was dubbed the Great Comet of 1996; its passage to within 0.1 AU (15 Gm) of the Earth on 25 March was one of the closest cometary approaches of the previous 200 years. Reaching an apparent visual magnitude of zero and spanning nearly 80°, Hyakutake appeared very bright in the night sky and was widely seen around the world. The comet temporarily upstaged the much anticipated Comet Hale–Bopp, which was approaching the inner Solar System at the time.',
    extract_html:
      '<p><b>Comet Hyakutake</b> is a comet discovered on 31 January 1996. It was dubbed the <b>Great Comet of 1996</b>; its passage to within 0.1 AU (15 Gm) of the Earth on 25 March was one of the closest cometary approaches of the previous 200 years. Reaching an apparent visual magnitude of zero and spanning nearly 80°, Hyakutake appeared very bright in the night sky and was widely seen around the world. The comet temporarily upstaged the much anticipated Comet Hale–Bopp, which was approaching the inner Solar System at the time.</p>',
  },
  {
    type: 'standard',
    title: 'Comet West',
    displaytitle: '<span class="mw-page-title-main">Comet West</span>',
    namespace: {
      id: 0,
      text: '',
    },
    wikibase_item: 'Q677840',
    titles: {
      canonical: 'Comet_West',
      normalized: 'Comet West',
      display: '<span class="mw-page-title-main">Comet West</span>',
    },
    pageid: 592213,
    thumbnail: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/C-west-1976-ps.jpg/320px-C-west-1976-ps.jpg',
      width: 320,
      height: 252,
    },
    originalimage: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/0/07/C-west-1976-ps.jpg',
      width: 5393,
      height: 4252,
    },
    lang: 'en',
    dir: 'ltr',
    revision: '1144176505',
    tid: '17ad2b20-67cf-11ee-98d4-8d29e3e25911',
    timestamp: '2023-03-12T06:38:37Z',
    description: 'Icy small Solar System body; passed closest to Earth in 1976',
    description_source: 'local',
    content_urls: {
      desktop: {
        page: 'https://en.wikipedia.org/wiki/Comet_West',
        revisions: 'https://en.wikipedia.org/wiki/Comet_West?action=history',
        edit: 'https://en.wikipedia.org/wiki/Comet_West?action=edit',
        talk: 'https://en.wikipedia.org/wiki/Talk:Comet_West',
      },
      mobile: {
        page: 'https://en.m.wikipedia.org/wiki/Comet_West',
        revisions: 'https://en.m.wikipedia.org/wiki/Special:History/Comet_West',
        edit: 'https://en.m.wikipedia.org/wiki/Comet_West?action=edit',
        talk: 'https://en.m.wikipedia.org/wiki/Talk:Comet_West',
      },
    },
    extract:
      'Comet West, formally designated C/1975 V1, 1976 VI, and 1975n, was a comet described as one of the brightest objects to pass through the inner Solar System in 1976. It is often described as a "great comet."',
    extract_html:
      '<p><b>Comet West</b>, formally designated <b>C/1975 V1</b>, <b>1976 VI</b>, and <b>1975n</b>, was a comet described as one of the brightest objects to pass through the inner Solar System in 1976. It is often described as a "great comet."</p>',
  },
];
