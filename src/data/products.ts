// Central product data — single source of truth for list & detail pages.
import type { ImageMetadata } from 'astro';
import { getWhatsAppUrl } from './contact';

import hardcaseCustom from '../assets/images/hardcase-guitar-custom.webp';
import portfolioAkustik1 from '../assets/images/portfolio-Akustik-1.jpg';
import portfolioAkustik2 from '../assets/images/portfolio-Akustik-2.jpg';
import portfolioAkustik3 from '../assets/images/portfolio-Akustik-3.jpg';
import portfolioBass3 from '../assets/images/portfolio-bass-3.jpg';
import portfolioElektrik2 from '../assets/images/portfolio-elektrik-2.jpg';
import portfolioElektrik5 from '../assets/images/portfolio-elektrik-5.jpg';

export interface Product {
  slug: string;
  category: string;
  title: string;
  description: string;
  images: ImageMetadata[]; // up to 3 images
  material: string; // detail bahan
  dimensions: string; // ukuran
  specs: { label: string; value: string }[];
  features: string[];
}

export const products: Product[] = [
  {
    slug: 'solid-body-series',
    category: 'Elektrik',
    title: 'Hardcase Solid Body Series',
    description:
      'Hardcase custom dirancang khusus untuk gitar solid body seperti Stratocaster, Telecaster, Les Paul, PRS, hingga bentuk extreme. Interior foam molding presisi melindungi seluruh lekuk body dan neck, dengan kompartemen aksesori terpisah untuk kabel, pick, picks, dan aksesoris kecil lainnya.',
    images: [
      portfolioElektrik2,
      portfolioElektrik5,
      hardcaseCustom,
    ],
    material:
      'Eksterior ABS plastic keras dengan wrap PU leather tahan gores; interior high-density foam + velvet lining; hardware butterfly lock metal.',
    dimensions:
      'Disesuaikan custom dengan dimensi gitar solid body Anda (total length, body width, neck scale). Estimasi umum: ±110 × 45 × 15 cm.',
    specs: [
      { label: 'Kapasitas:', value: '1 unit gitar elektrik + aksesori' },
      { label: 'Kompartemen Aksesori:', value: 'Headstock pocket + side compartment' },
      { label: 'Neck Support:', value: 'Ergonomic internal stand foam' },
      { label: 'Handle:', value: 'Grab handle + shoulder strap mounts' },
      { label: 'Latches:', value: '4x butterfly lock latches' },
      { label: 'Weight Capacity:', value: '~8 kg' },
      { label: 'Material Exterior:', value: 'ABS plastic / PU leather wrap' },
      { label: 'Interior:', value: 'High-density foam + velvet lining' },
      { label: 'Color Options:', value: 'Black, Brown, Navy, Custom' },
    ],
    features: [
      'Custom foam molding mengikuti lekuk body & headstock',
      'Padded neck support mencegah bowing pada fretboard',
      'Water-resistant exterior coating',
      'Scratch-resistant hard shell material',
      'Reinforced corner guards untuk impact protection',
      'Side handle untuk easy lifting',
      'Shoulder strap attachment points (optional)',
      'Accessory compartment dengan dividers',
      'Lockable butterfly latches keamanan ekstra',
      'Optional: Rolling wheels + telescopic handle',
    ],
  },
  {
    slug: 'dreadnought-jumbo',
    category: 'Akustik',
    title: 'Hardcase Akustik Dreadnought & Jumbo',
    description:
      'Didesain untuk gitar akustik ukuran dreadnought, jumbo, dan audiotrium. Fitur neck-support internal yang menjaga kelembapan kayu optimal dan mencegah bridge lifting. Lining beludru tebal mengurangi risiko goresan saat transportasi.',
    images: [
      portfolioAkustik1,
      portfolioAkustik2,
      portfolioAkustik3,
    ],
    material:
      'Rangka kayu plywood keras dengan lapisan luar tahan benturan; interior plush velvet tebal; hardware 3x rust-proof latches.',
    dimensions:
      'Custom sesuai bentuk dreadnought/jumbo Anda. Estimasi umum: ±112 × 45 × 18 cm.',
    specs: [
      { label: 'Kapasitas:', value: '1 unit gitar akustik' },
      { label: 'Neck Support:', value: 'Adjustable internal headstand' },
      { label: 'Humidity Control:', value: 'Built-in humidity pocket' },
      { label: 'Handle:', value: 'Dual heavy-duty handles' },
      { label: 'Latches:', value: '3x rust-proof latches' },
      { label: 'Weight:', value: '~5.2 kg' },
    ],
    features: [
      'Internal headstand mencegah tekanan pada nut/frets',
      'Humidity control pouch menjaga kelembaban kayu',
      'Soft velvet interior anti-gores',
      'Rounded corners untuk fingerstyle accessibility',
      'F-hole cutouts untuk archtop/acoustic-electric',
      'Weather-sealed edges',
      'Reinforced bottom brace untuk support berat',
      'Optional: Padded shoulder strap included',
    ],
  },
  {
    slug: 'deluxe-acoustic-protection',
    category: 'Akustik',
    title: 'Deluxe Acoustic Protection Series',
    description:
      'Level premium protection untuk gitar akustik high-end atau instrument panggung. Dilapisi kulit sintetis tahan gores, interior plush foam sangat tebal, dan konstruksi kokoh siap menghadapi kondisi perjalanan. Cocok untuk flight case requirement.',
    images: [
      portfolioAkustik2,
      portfolioAkustik1,
      hardcaseCustom,
    ],
    material:
      'Eksterior synthetic leather premium scratch-resistant; interior thick plush foam + velvet lining; hardware 4x security lock metal.',
    dimensions:
      'Custom presisi mengikuti body gitar akustik premium Anda. Estimasi umum: ±115 × 48 × 20 cm.',
    specs: [
      { label: 'Kapasitas:', value: '1 unit gitar akustik premium' },
      { label: 'Exterior Wrap:', value: 'Synthetic leather - scratch resistant' },
      { label: 'Interior Padding:', value: 'Thick plush foam + velvet lining' },
      { label: 'Handle Grip:', value: 'Extra padded reinforced grip' },
      { label: 'Latches:', value: '4x security locks' },
      { label: 'Airline Approved:', value: 'Yes (subject to airline rules)' },
      { label: 'Warranty:', value: '2 years structural warranty' },
    ],
    features: [
      'Flight case rating — tested durability',
      'Premium synthetic leather exterior (custom colors)',
      'Thick plush foam absorbs maximum shock',
      'Velvet lining protects finish entirely',
      'Metal hardware reinforcement at stress points',
      'Airline approved (when checked as cargo)',
      'Lockable latches airport-friendly TSA',
      'Double-reinforced handles',
      'Lifetime repair service available',
    ],
  },
  {
    slug: 'bass-electric',
    category: 'Bass',
    title: 'Hardcase Bass Elektrik 4 & 5 String',
    description:
      'Extended-length case structure dengan distribution balance sempurna. Handle ergonomis heavy-duty, butterfly latch extra secure. Khusus bass 4-string dan 5-string, termasuk model dengan headstock panjang seperti Music Man style.',
    images: [
      portfolioBass3,
      portfolioElektrik2,
      hardcaseCustom,
    ],
    material:
      'Rangka extended-length dengan lapisan luar tahan benturan; interior shock-absorbing foam density gradient; hardware 5x butterfly lock metal.',
    dimensions:
      'Extended length hingga 39 inch total. Estimasi umum: ±125 × 45 × 16 cm.',
    specs: [
      { label: 'Kapasitas:', value: '1 unit bass 4 atau 5 string' },
      { label: 'Neck Extension:', value: 'Up to 39 inch total length' },
      { label: 'Headstock Support:', value: 'Extended padded cradle' },
      { label: 'Handle Type:', value: 'Heavy-duty reinforced grab bar' },
      { label: 'Latches:', value: '5x butterfly locks' },
      { label: 'Weight:', value: '~7.8 kg' },
    ],
    features: [
      'Extended neck support prevents headstock sag',
      'Extra-long body section padding',
      'Butterfly latch system 5-point lock',
      'Shock-absorbing foam density gradient',
      'Strap button loop attachment internal',
      'Cable channel internal untuk routing wire',
      'Rear D-ring untuk shoulder strap mount',
      'Corner guard bumpers',
      'Optional: Wheels kit available',
    ],
  },
  {
    slug: 'archtop',
    category: 'Semi Hollowbody',
    title: 'Hardcase Gitar Archtop & Semi-Akustik',
    description:
      'Designed untuk gitar archtop, semi-hollow, hollowbody dengan body tinggi. Ketinggian body disesuaikan presisi agar tidak ada tekanan pada top plate atau tremolo arm. Ideal untuk jazz guitars, hollowbody electrics, dan vintage-style instruments.',
    images: [
      portfolioAkustik3,
      portfolioAkustik2,
      portfolioAkustik1,
    ],
    material:
      'Rangka deep-body dengan top plate protection; finish wood grain print atau faux wood; interior luxury velvet lining.',
    dimensions:
      'Body clearance hingga 5 inches untuk body archtop tinggi. Estimasi umum: ±112 × 44 × 22 cm.',
    specs: [
      { label: 'Kapasitas:', value: '1 unit archtop / semi hollowbody' },
      { label: 'Body Clearance:', value: 'Up to 5 inches body height' },
      { label: 'Tremolo Clearance:', value: 'Extra space for floating bridges' },
      { label: 'Top Plate Protection:', value: 'Raised internal stand' },
      { label: 'Handle:', value: 'Top lift handle' },
      { label: 'Finish:', value: 'Wood grain print or faux wood' },
    ],
    features: [
      'Raised internal stand protects f-holes',
      'Extra depth cavity untuk high archtop body',
      'Floating tremolo arm clearance no pressure',
      'Gold hardware protection coating',
      'Vintage-style wood grain exterior option',
      'F-hole protection inserts',
      'Luxury velvet interior lining',
      'Brass latch hardware (optional)',
      'Handcrafted finish matching guitar aesthetic',
    ],
  },
  {
    slug: 'multi-gear-case',
    category: 'Custom',
    title: 'Custom Multi-Gear Case',
    description:
      'Full customization untuk pedalboard, keyboard, amplifier head/cabinet, rack gear, audio equipment, DJ flightcase, hingga mixer console. Modular dividers bisa diatur ulang sesuai kebutuhan touring atau studio setup.',
    images: [
      portfolioElektrik5,
      portfolioBass3,
      hardcaseCustom,
    ],
    material:
      'Konstruksi flightcase dengan foam dividers modular yang dapat diatur ulang; optional rolling wheels + telescopic handle.',
    dimensions:
      'Sepenuhnya custom — ukuran apa pun hingga lebar 200 cm sesuai konfigurasi gear Anda.',
    specs: [
      { label: 'Kapasitas:', value: 'Custom configured' },
      { label: 'Dimensions:', value: 'Any size up to 200cm width' },
      { label: 'Configuration:', value: 'Fully modular internal dividers' },
      { label: 'Handle Type:', value: 'Rolling wheels + telescopic handle optional' },
      { label: 'Weight:', value: 'Depends on configuration' },
    ],
    features: [
      'Modular foam dividers adjustable layout',
      'Pedalboard mounting system integrated',
      'Keyboard cushion tray with non-slip surface',
      'Amp head/cab isolation foam',
      'Rack gear mounting rails compatible',
      'External pockets cable management',
      'Wheels + telescopic handle option',
      'Cable channels internal routing',
      'Label tags instrument identification',
      'Quick-access panels for daily use',
    ],
  },
];

export function getWhatsAppLink(title: string): string {
  return getWhatsAppUrl(`Halo, saya ingin order ${title}. Apakah bisa dibantu?`);
}
