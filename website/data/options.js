import ukFlag from '../public/ukFlag.svg'
import esFlag from '../public/esFlag.svg'
import frFlag from '../public/frFlag.svg'
import geFlag from '../public/geFlag.svg'
import jaFlag from '../public/jaFlag.svg'
import ruFlag from '../public/ruFlag.svg'
import spFlag from '../public/spFlag.svg'

const recentLanguages = [
    {
        name: 'English',
        id: 'en'
    },
    {
        name: 'French',
        id: 'fr'
    },
    {
        name: 'Spanish',
        id: 'es'
    }
];

const sampleLanguages = [
    {
        name: 'English',
        id: 'en'
    },
    {
        name: 'Esperanto',
        id: 'eo'
    },
    {
        name: 'French',
        id: 'fr'
    },
    {
        name: 'German',
        id: 'de'
    },
    {
        name: 'Japanese',
        id: 'ja'
    },
    {
        name: 'Russian',
        id: 'ru'
    },
    {
        name: 'Spanish',
        id: 'es'
    }
];

const sampleLanguagesWithFlags = [
    {
        name: 'English',
        id: 'en',
        iconSrc: ukFlag.src,
        iconSize: '20px auto'
    },
    {
        name: 'Esperanto',
        id: 'es',
        iconSrc: esFlag.src,
        iconSize: '20px auto'
    },
    {
        name: 'French',
        id: 'fr',
        iconSrc: frFlag.src,
        iconSize: '20px 28px'
    },
    {
        name: 'German',
        id: 'de',
        iconSrc: geFlag.src,
        iconSize: '20px auto'
    },
    {
        name: 'Japanese',
        id: 'ja',
        iconSrc: jaFlag.src,
        iconSize: '20px auto'
    },
    {
        name: 'Russian',
        id: 'ru',
        iconSrc: ruFlag.src,
        iconSize: '20px auto'
    },
    {
        name: 'Spanish',
        id: 'es',
        iconSrc: spFlag.src,
        iconSize: '18px auto'
    }
];

const allLanguages = [

    {
        name: 'Afrikaans',
        id: 'af'
    },
    {
        name: 'Assamese',
        id: 'as'
    },
    {
        name: 'Aymara',
        id: 'ay'
    },
    {
        name: 'Albanian',
        id: 'sq'
    },
    {
        name: 'Amharic',
        id: 'am'
    },
    {
        name: 'Arabic',
        id: 'ar'
    },
    {
        name: 'Armenian',
        id: 'hy'
    },
    {
        name: 'Azerbaijani',
        id: 'az'
    },
    {
        name: 'Bambara',
        id: 'bm'
    },
    {
        name: 'Basque',
        id: 'eu'
    },
    {
        name: 'Belarusian',
        id: 'be'
    },
    {
        name: 'Bengali',
        id: 'bn'
    },
    {
        name: 'Bhojpuri',
        id: 'bho'
    },
    {
        name: 'Bosnian',
        id: 'bs'
    },
    {
        name: 'Bulgarian',
        id: 'bg'
    },
    {
        name: 'Catalan',
        id: 'ca'
    },
    {
        name: 'Cebuano',
        id: 'ceb'
    },
    {
        name: 'Chichewa',
        id: 'ny'
    },
    {
        name: 'Chinese(simplified)',
        id: 'zh-cn'
    },
    {
        name: 'Chinese(traditional)',
        id: 'zh-tw'
    },
    {
        name: 'Corsican',
        id: 'co'
    },
    {
        name: 'Croatian',
        id: 'hr'
    },
    {
        name: 'Czech',
        id: 'cs'
    },
    {
        name: 'Danish',
        id: 'da'
    },
    {
        name: 'Dhivehi',
        id: 'dv'
    },
    {
        name: 'Dogri',
        id: 'doi'
    },
    {
        name: 'Dutch',
        id: 'nl'
    },
    {
        name: 'English',
        id: 'en'
    },
    {
        name: 'Esperanto',
        id: 'eo'
    },
    {
        name: 'Estonian',
        id: 'et'
    },
    {
        name: 'Ewe',
        id: 'ee'
    },
    {
        name: 'Filipino',
        id: 'tl'
    },
    {
        name: 'Finnish',
        id: 'fi'
    },
    {
        name: 'French',
        id: 'fr'
    },
    {
        name: 'Frisian',
        id: 'fy'
    },
    {
        name: 'Galisian',
        id: 'gl'
    },
    {
        name: 'Georgian',
        id: 'ka'
    },
    {
        name: 'German',
        id: 'de'
    },
    {
        name: 'Greek',
        id: 'el'
    },
    {
        name: 'Guarani',
        id: 'gn'
    },
    {
        name: 'Gujarati',
        id: 'gu'
    },
    {
        name: 'Haitian Creole',
        id: 'ht'
    },
    {
        name: 'Hausa',
        id: 'ha'
    },
    {
        name: 'Hawaiian',
        id: 'haw'
    },
    {
        name: 'Hebrew',
        id: 'iw'
    },
    {
        name: 'Hindi',
        id: 'hi'
    },
    {
        name: 'Hmong',
        id: 'hmn'
    },
    {
        name: 'Hungarian',
        id: 'hu'
    },
    {
        name: 'Icelandic',
        id: 'is'
    },
    {
        name: 'Igbo',
        id: 'ig'
    },
    {
        name: 'Ilocano',
        id: 'ilo'
    },
    {
        name: 'Indonesian',
        id: 'id'
    },
    {
        name: 'Irish',
        id: 'ga'
    },
    {
        name: 'Italian',
        id: 'it'
    },
    {
        name: 'Japanese',
        id: 'ja'
    },
    {
        name: 'Javanese',
        id: 'jw'
    },
    {
        name: 'Kannada',
        id: 'kn'
    },
    {
        name: 'Kazakh',
        id: 'kk'
    },
    {
        name: 'Khmer',
        id: 'km'
    },
    {
        name: 'Kinyarwanda',
        id: 'rw'
    },
    {
        name: 'Konkani',
        id: 'gom'
    },
    {
        name: 'Korean',
        id: 'ko'
    },
    {
        name: 'Krio',
        id: 'kri'
    },
    {
        name: 'Kurdish(kurmanji)',
        id: 'ku'
    },
    {
        name: 'Kurdish(sorani)',
        id: 'ckb'
    },
    {
        name: 'Kyrgyz',
        id: 'ky'
    },
    {
        name: 'Lao',
        id: 'lo'
    },
    {
        name: 'Latin',
        id: 'la'
    },
    {
        name: 'Latvian',
        id: 'lv'
    },
    {
        name: 'Lingala',
        id: 'in'
    },
    {
        name: 'Lithuanian',
        id: 'lt'
    },
    {
        name: 'Luganda',
        id: 'lg'
    },
    {
        name: 'Luxembourgish',
        id: 'lb'
    },
    {
        name: 'Macedonian',
        id: 'mk'
    },
    {
        name: 'Maithili',
        id: 'mai'
    },
    {
        name: 'Malagasy',
        id: 'mg'
    },
    {
        name: 'Malay',
        id: 'ms'
    },
    {
        name: 'Malayalam',
        id: 'ml'
    },
    {
        name: 'Maltese',
        id: 'mt'
    },
    {
        name: 'Maori',
        id: 'mi'
    },
    {
        name: 'Marathi',
        id: 'mr'
    },
    {
        name: 'Mizo',
        id: 'lus'
    },
    {
        name: 'Mongolian',
        id: 'mn'
    },
    {
        name: 'Myanmar(burmese)',
        id: 'my'
    },
    {
        name: 'Nepali',
        id: 'ne'
    },
    {
        name: 'Norwegian',
        id: 'no'
    },
    {
        name: 'Odia(oriya)',
        id: 'or'
    },
    {
        name: 'Oromo',
        id: 'om'
    },
    {
        name: 'Pashto',
        id: 'ps'
    },
    {
        name: 'Persian',
        id: 'fa'
    },
    {
        name: 'Polish',
        id: 'pl'
    },
    {
        name: 'Portuguese',
        id: 'pt'
    },
    {
        name: 'Punjabi',
        id: 'pa'
    },
    {
        name: 'Quechua',
        id: 'qu'
    },
    {
        name: 'Romanian',
        id: 'ro'
    },
    {
        name: 'Russian',
        id: 'ru'
    },
    {
        name: 'Sanskrit',
        id: 'sa'
    },
    {
        name: 'Samoan',
        id: 'sm'
    },
    {
        name: 'Scots gaelic',
        id: 'gd'
    },
    {
        name: 'Sepedi',
        id: 'nso'
    },
    {
        name: 'Serbian',
        id: 'sr'
    },
    {
        name: 'Sesotho',
        id: 'st'
    },
    {
        name: 'Shona',
        id: 'sn'
    },
    {
        name: 'Sindhi',
        id: 'sd'
    },
    {
        name: 'Sinhala',
        id: 'si'
    },
    {
        name: 'Slovak',
        id: 'sk'
    },
    {
        name: 'Slovenian',
        id: 'sl'
    },
    {
        name: 'Somali',
        id: 'so'
    },
    {
        name: 'Spanish',
        id: 'es'
    },
    {
        name: 'Sundanese',
        id: 'su'
    },
    {
        name: 'Swahili',
        id: 'sw'
    },
    {
        name: 'Swedish',
        id: 'sv'
    },
    {
        name: 'Tajik',
        id: 'tg'
    },
    {
        name: 'Tamil',
        id: 'ta'
    },
    {
        name: 'Tatar',
        id: 'tt'
    },
    {
        name: 'Telugu',
        id: 'te'
    },
    {
        name: 'Thai',
        id: 'th'
    },
    {
        name: 'Tigrinya',
        id: 'ti'
    },
    {
        name: 'Tsonga',
        id: 'ts'
    },
    {
        name: 'Turkish',
        id: 'tr'
    },
    {
        name: 'Turkmen',
        id: 'tk'
    },
    {
        name: 'Twi',
        id: 'ak'
    },
    {
        name: 'Ukrainian',
        id: 'uk'
    },
    {
        name: 'Urdu',
        id: 'ur'
    },
    {
        name: 'Uyghur',
        id: 'ug'
    },
    {
        name: 'Uzbek',
        id: 'uz'
    },
    {
        name: 'Vietnamese',
        id: 'vi'
    },
    {
        name: 'Welsh',
        id: 'cy'
    },
    {
        name: 'Xhosa',
        id: 'xh'
    },
    {
        name: 'Yiddish',
        id: 'yi'
    },
    {
        name: 'Yoruba',
        id: 'yo'
    },
    {
        name: 'Zulu',
        id: 'zu'
    }
];

export { recentLanguages, sampleLanguages, sampleLanguagesWithFlags, allLanguages };