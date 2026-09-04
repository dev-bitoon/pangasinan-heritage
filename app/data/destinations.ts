export type Destination = {
  slug: string
  name: string
  municipality: string
  category: 'Beaches & Islands' | 'Nature & Adventure' | 'Historical & Cultural' | 'Wellness & Relaxation' | 'Religious Sites'
  description: string
  longDescription: string
  image: string
  gallery: string[]
  rating: number
  reviewCount: number
  highlights: string[]
  bestTimeToVisit: string
  entranceFee: string
  howToGetThere: string
}

export const destinations: Destination[] = [
  {
    slug: 'hundred-islands',
    name: 'Hundred Islands National Park',
    municipality: 'Alaminos City',
    category: 'Beaches & Islands',
    description: 'A breathtaking cluster of 124 islands and islets perfect for island hopping, swimming, and nature adventures.',
    longDescription: 'Declared the Philippines\' first National Marine Reserve, Hundred Islands National Park is a cluster of small limestone islands scattered across Lingayen Gulf. Visitors hop between islands by boat, exploring hidden coves, climbing viewpoints, and swimming in calm, clear water. Governor Island and Quezon Island are the most developed, with facilities for day-trippers, while many smaller islets remain untouched.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Christ_the_Savior_at_Hundred_Island_National_Park.jpg/960px-Christ_the_Savior_at_Hundred_Island_National_Park.jpg',
    gallery: ['https://thesmartlocal.ph/wp-content/uploads/2021/06/hundredislandsguide13.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIrgOMeQhaDJUmEECLHT7dYkhDwoazRe_y_aWV0ooHySR723TqJutTkJ6&s=10', 'https://thehundredislands.ph/res/images/zipline1.jpg'],
    rating: 4.8,
    reviewCount: 320,
    highlights: ['Island hopping by boat', 'Cliff jumping and snorkeling', 'Zipline and viewpoint at Governor Island', 'Camping on select islands'],
    bestTimeToVisit: 'November to May (dry season)',
    entranceFee: '₱200 environmental fee + boat rental (shared or private)',
    howToGetThere: 'From Alaminos City proper, tricycle or jeepney to Lucap Wharf, then boat to the islands.',
  },
  {
    slug: 'cape-bolinao',
    name: 'Cape Bolinao Lighthouse',
    municipality: 'Bolinao, Pangasinan',
    category: 'Historical & Cultural',
    description: 'An iconic lighthouse with a stunning ocean view and a historical landmark of Bolinao.',
    longDescription: 'Built in 1905 during the American colonial period, Cape Bolinao Lighthouse is the second-tallest lighthouse in the Philippines. Perched on Punta Piedra Point, it offers sweeping views of the South China Sea and the surrounding coastline. The site remains an active navigational aid and a well-preserved piece of maritime history.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Cape_Bolinao_Lighthouse_-_The_Pride_Of_Pangasinan.jpg/500px-Cape_Bolinao_Lighthouse_-_The_Pride_Of_Pangasinan.jpg',
    gallery: ['https://elgu-news-cdn.e.gov.ph/bolinao-pangasinan/uploads/newlighthouse.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgncemLZv8TZhJspljtP0o0ELF_-daiKf_rUFWC9o74Uc_UHqGrXDxk4A&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59e_xUl1aLRI_-z1yP8u8f4mmLOwYTXZc67H-V8KgU_xu3BI_6Ki-vCw&s=10'],
    rating: 4.7,
    reviewCount: 280,
    highlights: ['Panoramic sea views from the lighthouse base', 'Historic American-era architecture', 'Nearby Patar Beach sunset spot', 'Photography and scenic viewpoints'],
    bestTimeToVisit: 'Late afternoon for sunset views',
    entranceFee: 'Free (donations welcomed for upkeep)',
    howToGetThere: 'Tricycle from Bolinao town proper, roughly 20 minutes to Patar-Cape Bolinao Road.',
  },
  {
    slug: 'balungao-hotspring',
    name: 'Balungao Hot Spring',
    municipality: 'Balungao, Pangasinan',
    category: 'Wellness & Relaxation',
    description: 'A natural hot spring resort known for its healing waters and relaxing atmosphere.',
    longDescription: 'Tucked at the base of the Balungao hills, this hot spring resort channels naturally heated mineral water into a series of pools of varying temperatures. Locals consider the waters therapeutic for skin and joint conditions. The resort blends the spring pools with landscaped gardens, making it a popular weekend escape.',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgh9ke8G0f6HTRnG4KONF7rotIrESMzQxzD30InaIaPPABBOzC-nRBAjTXnGlsffkQcY42KaznAy_hipFASLO3gRfpy1SDxTUm1ikNBPR0MbptJokjJLfJbYYfydT3hPbO4zTAFXbFYrQ-J/s1600/Balungao-Hilltop-Swimming-Pool.jpg',
    gallery: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/a0/d9/66/similar-to-balungao-hot.jpg?w=1200&h=-1&s=1', 'https://seepangasinan.com/wp-content/uploads/2022/08/IMG_7382-scaled-1024x683.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPoIDyEORDKotcjztGtGoOCEcad55xsDHVsd_tTvMVnJLQecLKIrpb6B6&s=10'],
    rating: 4.6,
    reviewCount: 210,
    highlights: ['Multiple mineral hot spring pools', 'Cold plunge pool for contrast therapy', 'Picnic huts and garden areas', 'Massage services on-site'],
    bestTimeToVisit: 'Year-round; cooler months (Dec-Feb) most popular',
    entranceFee: '₱100–150 entrance fee (varies by pool area)',
    howToGetThere: 'Jeepney or private vehicle from Rosales or Urdaneta City, about 30-40 minutes.',
  },
  {
    slug: 'patar-beach',
    name: 'Patar Beach',
    municipality: 'Bolinao, Pangasinan',
    category: 'Beaches & Islands',
    description: 'A long stretch of white sand beach perfect for surfing, picnics, and enjoying the sunset.',
    longDescription: 'Patar Beach stretches along Bolinao\'s western coast, known for fine white sand and consistently strong waves that draw surfers, especially beginners. The beach faces directly west, making it one of the best sunset-viewing spots in Pangasinan, with the Cape Bolinao Lighthouse visible in the distance.',
    image: 'https://ilovepangasinan.com/wp-content/uploads/2020/03/9.jpg',
    gallery: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXfDLh9WXewu6vE3dQzH14wtcsYlJjGBLzOYTcyZXPQ&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1uk3U1k776NBKaaa9Coyjd3gDXJEKnzAxHCZv6xL3wKuiSXnTkCH2_4&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5QPTU2_4svU5QZRlnNx6WKidxdoim7w4bV75sYTrwdbKrMj5G0nG9ew&s=10'],
    rating: 4.6,
    reviewCount: 190,
    highlights: ['Beginner-friendly surf breaks', 'Golden-hour sunset views', 'Beachfront cottages and food stalls', 'Horseback riding along the shore'],
    bestTimeToVisit: 'March to May for calm seas; surfing season varies',
    entranceFee: 'Free public beach; cottage rental optional',
    howToGetThere: 'Tricycle from Bolinao town proper, roughly 15-20 minutes.',
  },
  {
    slug: 'manaoag-basilica',
    name: 'Basilica of Our Lady of Manaoag',
    municipality: 'Manaoag, Pangasinan',
    category: 'Religious Sites',
    description: 'A revered religious site and national shrine of Our Lady of Manaoag.',
    longDescription: 'One of the most visited pilgrimage sites in the Philippines, this Basilica houses the image of Our Lady of Manaoag, believed by devotees to have miraculous powers. The church\'s baroque architecture and the constant flow of pilgrims give it a distinct devotional atmosphere, especially during its October feast.',
    image: 'https://seepangasinan.com/wp-content/uploads/2021/08/IMG_0892-scaled-1024x683.jpg',
    gallery: ['https://rainbowjournal.com/wp-content/uploads/2019/05/Pangasinan-Manaog-3.jpg', 'https://ak-d.tripcdn.com/images/1mi2u2234a0msec35345D.jpg?proc=source/trip', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GEHjEbK7jXty90ZPU1XmAdU21A9OCC-YiYEYpnRP4w&s=10'],
    rating: 4.8,
    reviewCount: 540,
    highlights: ['Miraculous image of Our Lady of Manaoag', 'Daily masses and pilgrim services', 'Candle-lighting area and religious shops', 'Annual feast celebration in October'],
    bestTimeToVisit: 'Year-round; October for the annual feast',
    entranceFee: 'Free',
    howToGetThere: 'Along the national highway in Manaoag town, accessible by bus or jeepney from Dagupan or Urdaneta.',
  },
  {
    slug: 'bolinao-falls',
    name: 'Bolinao Falls',
    municipality: 'Bolinao, Pangasinan',
    category: 'Nature & Adventure',
    description: 'A refreshing multi-tiered waterfall surrounded by lush greenery.',
    longDescription: 'Bolinao Falls consists of two main sections (Falls 1 and Falls 2), each with turquoise pools fed by cascading water through limestone rock. Falls 2 is more popular for its wide, swimmable basin, while Falls 1 offers a quieter, more secluded setting.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/a7/c6/5e/bolinao-falls-1.jpg?w=1200&h=-1&s=1',
    gallery: ['https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6YFL5L_rfMmLXCrekZuYDE5LHtpea3qPB5Ugjv4G8DTLhBV9dNkmu9r7iogAUKoHA63pj7IeCpJoZAfY5ZeP7hkKBdhg-dfNVYgQg76J32quxDkUwHfEY2xbJedQceKsye1tLMlphECrjO39XpA-DTmrZVgW6nJp0myBFwHOVpuAfHsczicb8GBNcwagY/s2999/bolinao-falls-3.JPG', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6XAVK_5WuAYU6bHFbAvutVqRAX4EU-oOtcDpyaWmc4Jp629ACNjgGIj7V7kReeom9H4ZQkKFR4lrjqAV3ZLhhWs2AKrfUSUcqKLpT-l18kfZyuN-0p_XMGoof51n6bAKB3M3W4tP8LVE/?imgmax=800', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/fb/31/5e/photo1jpg.jpg?w=900&h=500&s=1'],
    rating: 4.5,
    reviewCount: 160,
    highlights: ['Turquoise, spring-fed swimming pools', 'Rope swing at Falls 2', 'Shaded picnic areas nearby', 'Two connected falls to explore'],
    bestTimeToVisit: 'Dry season for clearest water',
    entranceFee: '₱30-50 entrance fee',
    howToGetThere: 'Tricycle or habal-habal (motorcycle taxi) from Bolinao town, about 15 minutes.',
  },
]

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug)
}

export type Festival = {
  name: string
  month: string
  municipality: string
  description: string
  image: string
}

export const festivals: Festival[] = [
  {
    name: 'Pistay Dayat (Feast of the Sea)',
    month: 'May',
    municipality: 'Lingayen',
    description: 'A thanksgiving festival for the bounty of the sea, featuring a fluvial procession, seafood cooking competitions, and street dancing along the coast.',
    image: 'https://festivepinoy.com/wp-content/uploads/2025/04/Pistay-Dayat.jpeg',
  },
  {
    name: 'Bangus Festival',
    month: 'April-May',
    municipality: 'Dagupan City',
    description: 'A month-long celebration honoring Dagupan\'s milkfish (bangus) industry, with street parties, cooking festivals, and the crowning of the Bangus Queen.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Capturing_the_Bangus_Festival_2024_in_Dagupan_City%2C_Pangasinan_114.jpg',
  },
  {
    name: 'Manaoag Fiesta',
    month: 'October',
    municipality: 'Manaoag',
    description: 'The annual feast day of Our Lady of Manaoag draws thousands of pilgrims for masses, processions, and devotional celebrations at the Basilica.',
    image: 'https://picsum.photos/id/1042/500/320',
  },
  {
    name: 'Urdaneta Fiesta',
    month: 'December',
    municipality: 'Urdaneta',
    description: 'The annual celebration of Urdaneta City brings communities together through religious activities, cultural events, parades, and festive celebrations honoring its local traditions.',
    image: 'https://dwcu.wordpress.com/wp-content/uploads/2010/12/img_9041.jpg',
  },
  
]

export type CraftOrDish = {
  name: string
  category: 'Craft' | 'Cuisine'
  municipality: string
  description: string
  image: string
}

export const craftsAndCuisine: CraftOrDish[] = [
  {
    name: 'Bangus (Milkfish)',
    category: 'Cuisine',
    municipality: 'Dagupan City',
    description: 'Pangasinan\'s signature dish, prepared grilled, deboned, or as sinigang — the province is the country\'s top milkfish producer.',
    image: 'https://fisherfarms.ph/wp-content/uploads/2020/11/unseasoned-deboned-milkfish-featurette-1.jpg',
  },
  {
    name: 'Pigar-Pigar',
    category: 'Cuisine',
    municipality: 'Dagupan City',
    description: 'A beloved street-food dish of thinly sliced stir-fried beef, onions, and cabbage, best enjoyed hot off the griddle.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/be/73/f4/caption.jpg?w=900&h=500&s=1',
  },
  {
    name: 'Inabel Weaving',
    category: 'Craft',
    municipality: 'Various towns',
    description: 'Hand-loomed textiles woven using techniques passed down through generations, used for clothing, blankets, and home decor.',
    image: 'https://www.nipino.com/uploads/images/202409/image_870x_66d9b107187cf.jpg',
  },
  {
    name: 'Bamboo Craft',
    category: 'Craft',
    municipality: 'Various towns',
    description: 'Traditional basketry and furniture-making using native bamboo, a skill rooted in the province\'s rural communities.',
    image: 'https://www.wheninmanila.com/wp-content/uploads/2021/11/DSC04610-1024x576.jpg',
  },
]