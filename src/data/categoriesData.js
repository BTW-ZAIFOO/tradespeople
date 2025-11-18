// Comprehensive categories data - Professional MyTradeLinks style layout
export const categoriesData = {
  builders: {
    id: 'builders',
    name: 'Builders',
    slug: 'builders',
    description: 'Professional builders and construction experts',
    icon: '🏗️',
    banner: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=400&fit=crop',
    
    // Pricing tiers
    pricingTiers: [
      { label: 'Daily Rate', price: '£200-£300' },
      { label: 'Hourly Rate', price: '£30-£50' },
      { label: 'Project Based', price: 'Varies' }
    ],

    // Job costs examples
    jobCosts: [
      { title: 'Extension Build', cost: '£5,000-£15,000' },
      { title: 'Loft Conversion', cost: '£8,000-£20,000' },
      { title: 'Kitchen Renovation', cost: '£3,000-£8,000' }
    ],

    // Tradesperson profiles
    tradespeople: [
      {
        name: 'KD Property Services',
        rating: 5,
        reviews: 28,
        description: '59 yr old builder. Been in the trade 30 years. Mainly do conversions and structural alterations. All types of trades available eg joinery, roofing, plumbing, electrical and plastering available.',
        latestReviewTitle: 'Latest Chimney Building / Repair Review',
        latestReview: 'Cannot fault Paul. He did a great job of putting right a job that was done poorly by a previous builder. He is very knowledgeable, helpful and friendly.',
        reviewedBy: 'Wendy',
        reviewDate: '28th Oct 2025',
        location: 'NE25 9QJ, Whitley Bay',
        memberSince: 'Jul 2022',
        idChecked: true,
        insurance: false
      },
      {
        name: 'NLK Group',
        rating: 4.9,
        reviews: 17,
        description: 'NLK Group, based in London, provides bespoke services in carpentry installation, custom-made wardrobes and cabinets, house refurbishments, and various construction projects.',
        latestReviewTitle: 'Latest Wooden Doors - External Review',
        latestReview: 'Naim did a fantastic job with replacing our external doors- front and rear. Communication was great and we are happy with the results.',
        reviewedBy: 'Glendale',
        reviewDate: '25th Oct 2025',
        location: 'WD25 0GD, Watford',
        memberSince: 'Nov 2016',
        idChecked: true,
        insurance: false
      },
      {
        name: 'Scorpio Construction & Maintenance Ltd',
        rating: 4.9,
        reviews: 13,
        description: 'We are a team of experienced tradespeople, we carry out all aspects of building work including Brickwork, Carpentry, Decorating, Ground work, Gutters, Landscaping, Roofing and Plastering.',
        latestReviewTitle: 'Latest General Maintenance Review',
        latestReview: 'I would like to highly recommend Steve and his team. They have delivered a first class result and always been professional and pleasant to deal with.',
        reviewedBy: 'Philip',
        reviewDate: '17th Oct 2025',
        location: 'HP14 3XB, High Wycombe',
        memberSince: 'Aug 2022',
        idChecked: true,
        insurance: false
      },
      {
        name: 'Honesty Builders',
        rating: 5,
        reviews: 9,
        description: 'Hi we are a friendly and honest Company, who always do everything to help and make customers feel safe and happy. We price all jobs with exact price from start to finish.',
        latestReviewTitle: 'Latest External Painting - Wall Review',
        latestReview: 'Work done well done. Very pleased with result',
        reviewedBy: 'Angela',
        reviewDate: '8th Oct 2025',
        location: 'CF45 3TL, Rhondda Cynon Taf',
        memberSince: 'Jan 2020',
        idChecked: false,
        insurance: true
      },
      {
        name: 'Naj Building Services',
        rating: 5,
        reviews: 7,
        description: 'Naj Building services provided excellent services all over north West based in Manchester. All our jobs come with guarantee. We are professional people and accept all building works.',
        latestReviewTitle: 'Latest Complete Kitchen Refurbishment Review',
        latestReview: 'Excellent work carried out, very punctual, respectful work was on point and clean. Would definitely recommend.',
        reviewedBy: 'Sajid',
        reviewDate: '27th Oct 2025',
        location: 'M1 6LG, Manchester',
        memberSince: 'Jan 2025',
        idChecked: true,
        insurance: false
      },
      {
        name: "Nick Payne's Construction Services",
        rating: 5,
        reviews: 6,
        description: 'Reliable and honest builder from the Ilminster area looking for work. Small or large work is no problem. 35+ years in the building trade.',
        latestReviewTitle: 'Latest General Maintenance Review',
        latestReview: 'Nick designed a replacement porch to suit my needs and agreed a price. He also sourced most of the materials. Very professional.',
        reviewedBy: 'Jane',
        reviewDate: '29th Oct 2025',
        location: 'TA19 0DZ, Ilminster',
        memberSince: 'Nov 2022',
        idChecked: true,
        insurance: false
      }
    ],

    // Testimonials
    testimonials: [
      {
        company: 'JR&SONS ROOFING',
        stars: 5,
        text: 'Absolutely magnificent job they did in our back garden. The taking down of our wall and putting up a new wooden fence. Fantastic job',
        reviewer: 'James'
      },
      {
        company: 'Drone Roofing',
        stars: 5,
        text: 'Josh was prepared to go to Liverpool hoping to find a replacement article for the porch. None available so he "redesigned" the whole job.',
        reviewer: 'Joshua'
      },
      {
        company: 'Rock Brickworks',
        stars: 5,
        text: '5 goes nowhere near my pleasure with this job, 10+ Great job, Great Advice and Great price. Best I\'ve ever experienced',
        reviewer: 'Craig'
      }
    ],

    // Completed jobs
    completedJobs: [
      {
        location: 'HULL',
        tradesperson: 'JR&SONS ROOFING',
        rating: 5,
        review: 'Absolutely magnificent job they did in our back garden. The taking down of our wall and putting up a new wooden fence.'
      },
      {
        location: 'WARRINGTON',
        tradesperson: 'Drone Roofing',
        rating: 5,
        review: 'Josh was prepared to go to Liverpool hoping to find a replacement article. None available so he redesigned the whole job.'
      },
      {
        location: 'BONNYBRIDGE',
        tradesperson: 'Rock Brickworks',
        rating: 5,
        review: '10+ Great job, Great Advice and Great price. Best I\'ve ever experienced'
      }
    ],

    // Locations
    locations: [
      'London', 'Birmingham', 'Liverpool', 'Bristol', 'Manchester', 'Sheffield', 'Leeds', 'Coventry',
      'Bradford', 'Cardiff', 'Edinburgh', 'Glasgow', 'York', 'Cambridge', 'Oxford', 'Bath'
    ],

    // Related Trades
    relatedTrades: [
      'Bricklayers', 'Carpenters', 'Plumbers', 'Electricians', 'Roofers', 'Painters & Decorators',
      'Plasterers', 'Kitchen Fitters', 'Bathroom Specialists', 'Joiners', 'Tilers', 'Landscapers',
      'Extension Builders', 'Loft Specialists', 'Fascias Specialists', 'Heating Engineers'
    ],

    subcategories: [
      {
        id: 'bespoke-builders',
        name: 'Bespoke Builders',
        description: 'Custom construction and building services'
      },
      {
        id: 'new-builds',
        name: 'New Builds',
        description: 'New property construction'
      },
      {
        id: 'extensions',
        name: 'Extensions',
        description: 'Home extensions and expansions'
      },
      {
        id: 'loft-conversions',
        name: 'Loft Conversions',
        description: 'Convert your loft into usable space'
      },
      {
        id: 'renovations',
        name: 'Renovations',
        description: 'Full property renovation services'
      }
    ],
    services: [
      {
        id: 1,
        title: 'New Garden Wall Construction',
        location: '12 mins away',
        distance: 12,
        budget: '£1,500 - £2,500',
        description: 'Build a new decorative garden wall with brick and mortar',
        postedDate: '2 hours ago',
        responses: 3,
        tags: ['urgent', 'quotes-requested']
      },
      {
        id: 2,
        title: 'Kitchen Extension Build',
        location: '25 mins away',
        distance: 25,
        budget: '£8,000 - £12,000',
        description: 'Extend kitchen into adjacent room. Structural work required.',
        postedDate: '5 hours ago',
        responses: 5,
        tags: ['popular']
      },
      {
        id: 3,
        title: 'Porch Construction',
        location: '18 mins away',
        distance: 18,
        budget: '£2,000 - £3,500',
        description: 'Build new front porch with proper foundations',
        postedDate: '1 day ago',
        responses: 2,
        tags: ['quotes-requested']
      },
      {
        id: 4,
        title: 'Garage Conversion to Studio',
        location: '35 mins away',
        distance: 35,
        budget: '£5,000 - £8,000',
        description: 'Convert garage into living studio space',
        postedDate: '2 days ago',
        responses: 8,
        tags: ['popular', 'urgent']
      },
      {
        id: 5,
        title: 'Brick Wall Repair',
        location: '8 mins away',
        distance: 8,
        budget: '£300 - £800',
        description: 'Repair damaged brick work on front elevation',
        postedDate: '3 hours ago',
        responses: 1,
        tags: ['urgent']
      }
    ],
    faqs: [
      {
        question: 'How do builders typically charge for work?',
        answer: 'Most builders charge either by the day (day rate), fixed price for the project, or cost-plus. Get multiple quotes to compare pricing models.'
      },
      {
        question: 'Do I need planning permission for extensions?',
        answer: 'Most extensions need planning permission. Single-story extensions under certain sizes may be permitted development. Check with your local council.'
      },
      {
        question: 'What insurance should a builder have?',
        answer: 'Professional builders should have public liability insurance (minimum £6 million) and may need employer\'s liability insurance if they have employees.'
      },
      {
        question: 'How long does a typical extension take?',
        answer: 'A single-story extension typically takes 3-4 months. Larger projects can take 6-12 months depending on complexity and planning requirements.'
      },
      {
        question: 'What is a typical builder deposit?',
        answer: 'Most builders request 25-50% deposit before starting work, with remainder due on completion. Avoid paying full amount upfront.'
      }
    ],
    guides: [
      {
        title: 'Average Builder Costs 2024',
        content: 'The average cost per m² for building work ranges from £100-£300 depending on complexity.',
        readTime: '5 min read'
      },
      {
        title: 'How to Hire the Right Builder',
        content: 'Get at least 3 quotes, check references, verify insurance, and ensure they\'re qualified.',
        readTime: '8 min read'
      },
      {
        title: 'Planning Permission Guide',
        content: 'What you need to know about planning permission for various building projects.',
        readTime: '10 min read'
      }
    ]
  },
  
  carpenters: {
    id: 'carpenters',
    name: 'Carpenters',
    slug: 'carpenters',
    description: 'Skilled carpenters for woodwork and joinery',
    icon: '🪵',
    banner: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=400&fit=crop',
    
    pricingTiers: [
      { label: 'Daily Rate', price: '£150-£250' },
      { label: 'Hourly Rate', price: '£25-£45' },
      { label: 'Project Based', price: 'Varies' }
    ],

    jobCosts: [
      { title: 'Bespoke Furniture', cost: '£800-£2,500' },
      { title: 'Staircase Installation', cost: '£2,000-£4,500' },
      { title: 'Fitted Wardrobes', cost: '£1,500-£3,500' }
    ],

    tradespeople: [
      {
        name: 'Master Carpentry Ltd',
        rating: 5,
        reviews: 35,
        description: 'Expert craftsmen with 25+ years experience. Specializing in bespoke furniture, staircases, and custom joinery. Fully insured and certified.',
        latestReviewTitle: 'Latest Custom Wardrobe Review',
        latestReview: 'Exceptional quality and attention to detail. The wardrobe is absolutely stunning and fits perfectly. Highly recommended!',
        reviewedBy: 'Sarah',
        reviewDate: '1st Nov 2025',
        location: 'SW15 2AE, London',
        memberSince: 'Mar 2020',
        idChecked: true,
        insurance: true
      },
      {
        name: 'Elite Joinery Solutions',
        rating: 4.8,
        reviews: 28,
        description: 'Specialist in high-end joinery and custom woodwork. Providing quality craftsmanship for residential and commercial projects.',
        latestReviewTitle: 'Latest Fitted Kitchen Review',
        latestReview: 'Professional team, excellent communication and outstanding results. Would definitely use again.',
        reviewedBy: 'Tom',
        reviewDate: '25th Oct 2025',
        location: 'M3 2AB, Manchester',
        memberSince: 'Jun 2019',
        idChecked: true,
        insurance: true
      },
      {
        name: 'Fine Wood Crafts',
        rating: 4.9,
        reviews: 22,
        description: 'Traditional carpentry techniques combined with modern design. Experts in bespoke furniture, doors, and architectural joinery.',
        latestReviewTitle: 'Latest Wooden Door Installation Review',
        latestReview: 'Fantastic craftsmanship. The doors are beautiful and were installed with great care. Very happy with the result.',
        reviewedBy: 'Michael',
        reviewDate: '20th Oct 2025',
        location: 'BS1 5TR, Bristol',
        memberSince: 'Sep 2018',
        idChecked: true,
        insurance: true
      }
    ],

    testimonials: [
      {
        company: 'Master Carpentry Ltd',
        stars: 5,
        text: 'Exceptional quality and attention to detail. The wardrobe is absolutely stunning.',
        reviewer: 'Sarah'
      },
      {
        company: 'Elite Joinery Solutions',
        stars: 5,
        text: 'Professional team, excellent communication and outstanding results.',
        reviewer: 'Tom'
      },
      {
        company: 'Fine Wood Crafts',
        stars: 5,
        text: 'Fantastic craftsmanship. The doors are beautiful and were installed with great care.',
        reviewer: 'Michael'
      }
    ],

    completedJobs: [
      {
        location: 'LONDON',
        tradesperson: 'Master Carpentry Ltd',
        rating: 5,
        review: 'Custom wardrobe installation - exceptional quality and attention to detail.'
      },
      {
        location: 'MANCHESTER',
        tradesperson: 'Elite Joinery Solutions',
        rating: 5,
        review: 'Fitted kitchen installation - professional team with outstanding results.'
      },
      {
        location: 'BRISTOL',
        tradesperson: 'Fine Wood Crafts',
        rating: 5,
        review: 'Wooden door installation - fantastic craftsmanship and great care.'
      }
    ],

    locations: [
      'London', 'Manchester', 'Birmingham', 'Leeds', 'Bristol', 'Edinburgh', 'Cardiff', 'Glasgow',
      'Liverpool', 'Sheffield', 'Cambridge', 'Oxford', 'York', 'Bath', 'Brighton', 'Norwich'
    ],

    // Related Trades
    relatedTrades: [
      'Builders', 'Plumbers', 'Electricians', 'Decorators', 'Tilers', 'Kitchen Fitters',
      'Bathroom Specialists', 'Door Installers', 'Joiners', 'Flooring Specialists',
      'Painters & Decorators', 'Plasterers', 'Roofers', 'Extension Builders'
    ],

    subcategories: [
      {
        id: 'bespoke-furniture',
        name: 'Bespoke Furniture',
        description: 'Custom made furniture'
      },
      {
        id: 'skirting-boards',
        name: 'Skirting Boards',
        description: 'Installation and fitting'
      },
      {
        id: 'staircases',
        name: 'Staircases',
        description: 'Staircase installation and repair'
      },
      {
        id: 'wooden-doors',
        name: 'Wooden Doors',
        description: 'Door fitting and installation'
      },
      {
        id: 'joinery',
        name: 'Joinery',
        description: 'General joinery work'
      }
    ],
    services: [
      {
        id: 1,
        title: 'Custom Fitted Wardrobe',
        location: '10 mins away',
        distance: 10,
        budget: '£1,200 - £2,000',
        description: 'Design and build custom bedroom wardrobe to fit awkward space',
        postedDate: '3 hours ago',
        responses: 2,
        tags: ['design-consultation']
      },
      {
        id: 2,
        title: 'Wooden Staircase Installation',
        location: '22 mins away',
        distance: 22,
        budget: '£2,500 - £4,500',
        description: 'Install new wooden staircase with oak finish',
        postedDate: '1 day ago',
        responses: 4,
        tags: ['popular']
      },
      {
        id: 3,
        title: 'Cabinet Refinishing',
        location: '15 mins away',
        distance: 15,
        budget: '£400 - £700',
        description: 'Refinish and upgrade existing kitchen cabinets',
        postedDate: '2 days ago',
        responses: 1,
        tags: []
      },
      {
        id: 4,
        title: 'Picture Frame Hanging',
        location: '5 mins away',
        distance: 5,
        budget: '£50 - £150',
        description: 'Hang multiple frames and mirrors professionally',
        postedDate: '4 hours ago',
        responses: 3,
        tags: ['quick-job']
      },
      {
        id: 5,
        title: 'Door Frame Repair',
        location: '12 mins away',
        distance: 12,
        budget: '£150 - £400',
        description: 'Repair damaged wooden door frame',
        postedDate: '6 hours ago',
        responses: 2,
        tags: ['urgent']
      }
    ],
    faqs: [
      {
        question: 'What is the difference between a carpenter and joiner?',
        answer: 'Carpenters focus on building and construction, while joiners specialize in creating fitted woodwork like bespoke furniture and joinery.'
      },
      {
        question: 'How much does bespoke furniture typically cost?',
        answer: 'Bespoke furniture usually costs 2-3 times more than ready-made, but is tailored to your space and specifications.'
      },
      {
        question: 'How long does it take to make custom furniture?',
        answer: 'Most bespoke furniture takes 4-8 weeks from design to completion, depending on complexity.'
      }
    ],
    guides: [
      {
        title: 'Carpenter Service Costs',
        content: 'Day rates typically range from £150-£300 depending on experience and location.',
        readTime: '4 min read'
      },
      {
        title: 'Custom Furniture Planning',
        content: 'Tips for planning your bespoke furniture project for best results.',
        readTime: '7 min read'
      }
    ]
  },

  electricians: {
    id: 'electricians',
    name: 'Electricians',
    slug: 'electricians',
    description: 'Licensed electricians for all electrical work',
    icon: '⚡',
    banner: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=400&fit=crop',
    
    pricingTiers: [
      { label: 'Call-out Fee', price: '£50-£100' },
      { label: 'Hourly Rate', price: '£40-£80' },
      { label: 'Job Based', price: 'Varies' }
    ],

    jobCosts: [
      { title: 'Full House Rewire', cost: '£4,000-£8,000' },
      { title: 'EV Charger Install', cost: '£800-£1,500' },
      { title: 'Lighting Installation', cost: '£500-£1,500' }
    ],

    tradespeople: [
      {
        name: 'Professional Electrical Services',
        rating: 5,
        reviews: 42,
        description: 'Fully qualified and Part P certified electricians. 20+ years experience in residential and commercial electrical work. Emergency callouts available.',
        latestReviewTitle: 'Latest Rewiring Review',
        latestReview: 'Professional, punctual and efficient. Completed the rewiring to a high standard. Would definitely use again.',
        reviewedBy: 'David',
        reviewDate: '2nd Nov 2025',
        location: 'N1 1AA, London',
        memberSince: 'Jan 2018',
        idChecked: true,
        insurance: true
      },
      {
        name: 'Certified Electric Ltd',
        rating: 4.9,
        reviews: 38,
        description: 'NICEIC registered electricians. Specializing in domestic electrical installation, testing, and fault finding. All work guaranteed.',
        latestReviewTitle: 'Latest EV Charger Installation Review',
        latestReview: 'Great service from start to finish. EV charger installed quickly and professionally. Excellent communication.',
        reviewedBy: 'Jennifer',
        reviewDate: '28th Oct 2025',
        location: 'B1 1AA, Birmingham',
        memberSince: 'Apr 2017',
        idChecked: true,
        insurance: true
      },
      {
        name: 'Express Electrical Solutions',
        rating: 4.8,
        reviews: 31,
        description: 'Emergency electrician services available 24/7. Fully insured. Specialists in lighting, sockets, and circuit repairs.',
        latestReviewTitle: 'Latest Emergency Repair Review',
        latestReview: 'Called out at short notice - responded immediately. Fixed the problem quickly and professionally. Thank you!',
        reviewedBy: 'Robert',
        reviewDate: '25th Oct 2025',
        location: 'M1 1AA, Manchester',
        memberSince: 'Jul 2019',
        idChecked: true,
        insurance: true
      }
    ],

    testimonials: [
      {
        company: 'Professional Electrical Services',
        stars: 5,
        text: 'Professional, punctual and efficient. Completed the rewiring to a high standard.',
        reviewer: 'David'
      },
      {
        company: 'Certified Electric Ltd',
        stars: 5,
        text: 'Great service from start to finish. EV charger installed quickly and professionally.',
        reviewer: 'Jennifer'
      },
      {
        company: 'Express Electrical Solutions',
        stars: 5,
        text: 'Responded immediately. Fixed the problem quickly and professionally.',
        reviewer: 'Robert'
      }
    ],

    completedJobs: [
      {
        location: 'LONDON',
        tradesperson: 'Professional Electrical Services',
        rating: 5,
        review: 'Complete house rewiring - professional and efficient work completed to high standard.'
      },
      {
        location: 'BIRMINGHAM',
        tradesperson: 'Certified Electric Ltd',
        rating: 5,
        review: 'EV charger installation - quick, professional service with excellent communication.'
      },
      {
        location: 'MANCHESTER',
        tradesperson: 'Express Electrical Solutions',
        rating: 5,
        review: 'Emergency electrical repair - responded immediately and fixed problem professionally.'
      }
    ],

    locations: [
      'London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Liverpool', 'Edinburgh', 'Bristol',
      'Leicester', 'Coventry', 'York', 'Cambridge', 'Oxford', 'Cardiff', 'Aberdeen', 'Durham'
    ],

    // Related Trades
    relatedTrades: [
      'Builders', 'Plumbers', 'Carpenters', 'Decorators', 'Kitchen Fitters', 'Bathroom Specialists',
      'Heating Engineers', 'Painters & Decorators', 'Plasterers', 'Gas Engineers', 'Roofers'
    ],

    subcategories: [
      {
        id: 'rewiring',
        name: 'Rewiring',
        description: 'Complete house rewiring'
      },
      {
        id: 'sockets-switches',
        name: 'Sockets & Switches',
        description: 'Installation and replacement'
      },
      {
        id: 'lighting',
        name: 'Lighting',
        description: 'Light installation and design'
      },
      {
        id: 'ev-charging',
        name: 'EV Charging',
        description: 'Electric vehicle charger installation'
      },
      {
        id: 'boiler-circuits',
        name: 'Boiler Circuits',
        description: 'Boiler electrical work'
      }
    ],
    services: [
      {
        id: 1,
        title: 'Full House Rewire',
        location: '18 mins away',
        distance: 18,
        budget: '£4,000 - £8,000',
        description: 'Complete rewiring of 3-bed property. Old wiring needs replacing.',
        postedDate: '5 hours ago',
        responses: 3,
        tags: ['urgent', 'complex']
      },
      {
        id: 2,
        title: 'Add New Sockets to Kitchen',
        location: '12 mins away',
        distance: 12,
        budget: '£200 - £400',
        description: 'Add 4 new double sockets to kitchen for appliances',
        postedDate: '2 hours ago',
        responses: 5,
        tags: []
      },
      {
        id: 3,
        title: 'EV Charger Installation',
        location: '20 mins away',
        distance: 20,
        budget: '£1,000 - £1,500',
        description: 'Install home EV charging point. Part P certified electrician needed.',
        postedDate: '1 day ago',
        responses: 7,
        tags: ['popular', 'certified-required']
      },
      {
        id: 4,
        title: 'Bathroom Lighting Update',
        location: '8 mins away',
        distance: 8,
        budget: '£150 - £300',
        description: 'Replace bathroom lighting with modern LED fixtures',
        postedDate: '3 days ago',
        responses: 2,
        tags: []
      },
      {
        id: 5,
        title: 'Emergency Repairs',
        location: '15 mins away',
        distance: 15,
        budget: '£100 - £200',
        description: 'Tripped electrics - need urgent call out',
        postedDate: '30 mins ago',
        responses: 9,
        tags: ['urgent', 'emergency']
      }
    ],
    faqs: [
      {
        question: 'Should I use a qualified electrician?',
        answer: 'Yes, always use a qualified, certified electrician. Electrical work can be dangerous and must meet Building Regulations.'
      },
      {
        question: 'What is Part P certification?',
        answer: 'Part P is Building Regulations for electrical work in homes. Most electrical jobs need Part P certification for safety and legal compliance.'
      },
      {
        question: 'How much does rewiring cost per room?',
        answer: 'Rewiring costs typically range from £800-£2,000 per room depending on the room size and complexity.'
      }
    ],
    guides: [
      {
        title: 'Electrician Service Costs',
        content: 'Call-out fees typically £50-£100, with hourly rates £40-£80 or fixed prices for specific jobs.',
        readTime: '5 min read'
      },
      {
        title: 'When Do You Need Part P?',
        content: 'Understanding Building Regulations for electrical work in your home.',
        readTime: '6 min read'
      }
    ]
  },

  plumbers: {
    id: 'plumbers',
    name: 'Plumbers',
    slug: 'plumbers',
    description: 'Professional plumbers for all plumbing needs',
    icon: '🔧',
    banner: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=400&fit=crop',
    
    pricingTiers: [
      { label: 'Call-out Fee', price: '£50-£120' },
      { label: 'Hourly Rate', price: '£45-£85' },
      { label: 'Emergency (24/7)', price: '+50%' }
    ],

    jobCosts: [
      { title: 'Bathroom Installation', cost: '£3,000-£6,000' },
      { title: 'Boiler Repair', cost: '£150-£400' },
      { title: 'Drain Clearance', cost: '£100-£300' }
    ],

    tradespeople: [
      {
        name: 'Premium Plumbing Services',
        rating: 5,
        reviews: 51,
        description: 'Fully qualified gas safe and CIPHE registered plumbers. 15+ years experience. Bathroom and kitchen specialists. Boiler servicing available.',
        latestReviewTitle: 'Latest Bathroom Renovation Review',
        latestReview: 'Excellent work from start to finish. Very professional team, clean and tidy. Highly recommended.',
        reviewedBy: 'Katherine',
        reviewDate: '1st Nov 2025',
        location: 'E1 1AA, London',
        memberSince: 'May 2015',
        idChecked: true,
        insurance: true
      },
      {
        name: 'Quick Response Plumbers',
        rating: 4.9,
        reviews: 44,
        description: 'Emergency plumbing specialists. 24/7 callout available. Drain clearing, leak detection, and boiler repairs. Same-day appointments.',
        latestReviewTitle: 'Latest Emergency Leak Repair Review',
        latestReview: 'Called within the hour and fixed the problem quickly. Very efficient and professional service.',
        reviewedBy: 'Mark',
        reviewDate: '30th Oct 2025',
        location: 'SW15 2AE, London',
        memberSince: 'Sep 2017',
        idChecked: true,
        insurance: true
      },
      {
        name: 'Expert Plumbing Solutions',
        rating: 4.8,
        reviews: 39,
        description: 'Gas safe registered. Specialists in central heating, boiler installations, and bathroom fitting. Fully insured and certified.',
        latestReviewTitle: 'Latest Boiler Installation Review',
        latestReview: 'Professional installation with excellent after-care advice. Great communication throughout. Very satisfied.',
        reviewedBy: 'Christopher',
        reviewDate: '27th Oct 2025',
        location: 'B1 1AA, Birmingham',
        memberSince: 'Nov 2016',
        idChecked: true,
        insurance: true
      }
    ],

    testimonials: [
      {
        company: 'Premium Plumbing Services',
        stars: 5,
        text: 'Excellent work from start to finish. Very professional team, clean and tidy.',
        reviewer: 'Katherine'
      },
      {
        company: 'Quick Response Plumbers',
        stars: 5,
        text: 'Called within the hour and fixed the problem quickly. Very efficient and professional.',
        reviewer: 'Mark'
      },
      {
        company: 'Expert Plumbing Solutions',
        stars: 5,
        text: 'Professional installation with excellent after-care advice. Great communication.',
        reviewer: 'Christopher'
      }
    ],

    completedJobs: [
      {
        location: 'LONDON',
        tradesperson: 'Premium Plumbing Services',
        rating: 5,
        review: 'Bathroom renovation - excellent work from start to finish, very professional team.'
      },
      {
        location: 'LONDON',
        tradesperson: 'Quick Response Plumbers',
        rating: 5,
        review: 'Emergency leak repair - called within the hour and fixed problem quickly.'
      },
      {
        location: 'BIRMINGHAM',
        tradesperson: 'Expert Plumbing Solutions',
        rating: 5,
        review: 'Boiler installation - professional with excellent after-care advice.'
      }
    ],

    locations: [
      'London', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool', 'Glasgow', 'Edinburgh', 'Bristol',
      'Leicester', 'Coventry', 'Bradford', 'York', 'Cambridge', 'Oxford', 'Belfast', 'Cardiff'
    ],

    // Related Trades
    relatedTrades: [
      'Builders', 'Electricians', 'Carpenters', 'Bathroom Specialists', 'Kitchen Fitters',
      'Heating Engineers', 'Gas Engineers', 'Tilers', 'Painters & Decorators', 'Plasterers'
    ],

    subcategories: [
      {
        id: 'bathroom-installation',
        name: 'Bathroom Installation',
        description: 'Full bathroom fitting'
      },
      {
        id: 'kitchen-fitting',
        name: 'Kitchen Fitting',
        description: 'Kitchen appliance installation'
      },
      {
        id: 'boiler-repair',
        name: 'Boiler Repair',
        description: 'Boiler servicing and repair'
      },
      {
        id: 'leak-repair',
        name: 'Leak Repair',
        description: 'Finding and fixing leaks'
      },
      {
        id: 'drain-cleaning',
        name: 'Drain Cleaning',
        description: 'Drain unblocking and cleaning'
      }
    ],
    services: [
      {
        id: 1,
        title: 'Bathroom Renovation',
        location: '16 mins away',
        distance: 16,
        budget: '£3,000 - £6,000',
        description: 'Full bathroom renovation including new suite and tiles',
        postedDate: '6 hours ago',
        responses: 4,
        tags: ['popular']
      },
      {
        id: 2,
        title: 'Boiler Repair',
        location: '10 mins away',
        distance: 10,
        budget: '£150 - £400',
        description: 'Boiler not heating water - needs repair or replacement part',
        postedDate: '1 hour ago',
        responses: 6,
        tags: ['urgent', 'emergency']
      },
      {
        id: 3,
        title: 'Leaking Tap Repair',
        location: '5 mins away',
        distance: 5,
        budget: '£50 - £150',
        description: 'Kitchen tap dripping constantly - needs fixing',
        postedDate: '4 hours ago',
        responses: 3,
        tags: []
      },
      {
        id: 4,
        title: 'Blocked Drain Clearance',
        location: '12 mins away',
        distance: 12,
        budget: '£100 - £300',
        description: 'Bathroom drain is blocked and slow',
        postedDate: '2 hours ago',
        responses: 7,
        tags: ['urgent']
      },
      {
        id: 5,
        title: 'New Toilet Installation',
        location: '14 mins away',
        distance: 14,
        budget: '£200 - £500',
        description: 'Replace old toilet with new modern suite',
        postedDate: '1 day ago',
        responses: 2,
        tags: []
      }
    ],
    faqs: [
      {
        question: 'What is an emergency plumber call-out fee?',
        answer: 'Emergency call-out fees typically range from £50-£200, plus hourly rates. Sunday/bank holiday rates may be higher.'
      },
      {
        question: 'How often should I service my boiler?',
        answer: 'Boilers should be serviced annually to maintain efficiency and safety. Regular servicing can prevent breakdowns.'
      },
      {
        question: 'What should I do if I have a leak?',
        answer: 'Turn off the water supply immediately and call a plumber. Quick action can prevent significant water damage.'
      }
    ],
    guides: [
      {
        title: 'Common Plumbing Issues',
        content: 'A guide to the most common plumbing problems and when to call a professional.',
        readTime: '7 min read'
      },
      {
        title: 'Bathroom Installation Costs',
        content: 'What you can expect to pay for bathroom fitting services in 2024.',
        readTime: '6 min read'
      }
    ]
  },

  gardeners: {
    id: 'gardeners',
    name: 'Gardeners',
    slug: 'gardeners',
    description: 'Professional gardening and landscape services',
    icon: '🌿',
    banner: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=400&fit=crop',
    
    pricingTiers: [
      { label: 'Hourly Rate', price: '£20-£40' },
      { label: 'Half Day', price: '£80-£120' },
      { label: 'Full Day', price: '£150-£250' }
    ],

    jobCosts: [
      { title: 'Garden Transformation', cost: '£1,500-£3,000' },
      { title: 'Lawn Maintenance', price: '£25-£50/month' },
      { title: 'Garden Design', cost: '£300-£800' }
    ],

    tradespeople: [
      {
        name: 'Green Landscape Specialists',
        rating: 5,
        reviews: 48,
        description: 'Expert garden designers and landscapers. 12+ years experience in garden transformation. Maintenance packages available.',
        latestReviewTitle: 'Latest Garden Design Review',
        latestReview: 'Transformed our garden completely. Excellent design and workmanship. Worth every penny.',
        reviewedBy: 'Emma',
        reviewDate: '31st Oct 2025',
        location: 'TW9 3AE, London',
        memberSince: 'Feb 2016',
        idChecked: true,
        insurance: false
      },
      {
        name: 'Premium Lawn Care',
        rating: 4.9,
        reviews: 36,
        description: 'Specialists in lawn maintenance and grass care. Weekly cutting, hedge trimming, and garden tidying available. Reliable and professional.',
        latestReviewTitle: 'Latest Lawn Maintenance Review',
        latestReview: 'Reliable, professional and always on time. Our garden looks fantastic. Highly recommend.',
        reviewedBy: 'Andrew',
        reviewDate: '29th Oct 2025',
        location: 'B15 2AE, Birmingham',
        memberSince: 'Jun 2017',
        idChecked: true,
        insurance: false
      },
      {
        name: 'Creative Garden Solutions',
        rating: 4.8,
        reviews: 33,
        description: 'Garden design and installation. Patios, decking, planting and landscaping. Turn your garden into an outdoor haven.',
        latestReviewTitle: 'Latest Patio Installation Review',
        latestReview: 'Beautiful patio installed with great attention to detail. Garden is now a stunning outdoor space.',
        reviewedBy: 'Lisa',
        reviewDate: '26th Oct 2025',
        location: 'M2 1AE, Manchester',
        memberSince: 'Aug 2018',
        idChecked: true,
        insurance: false
      }
    ],

    testimonials: [
      {
        company: 'Green Landscape Specialists',
        stars: 5,
        text: 'Transformed our garden completely. Excellent design and workmanship.',
        reviewer: 'Emma'
      },
      {
        company: 'Premium Lawn Care',
        stars: 5,
        text: 'Reliable, professional and always on time. Our garden looks fantastic.',
        reviewer: 'Andrew'
      },
      {
        company: 'Creative Garden Solutions',
        stars: 5,
        text: 'Beautiful patio installed with great attention to detail. Stunning outdoor space.',
        reviewer: 'Lisa'
      }
    ],

    completedJobs: [
      {
        location: 'LONDON',
        tradesperson: 'Green Landscape Specialists',
        rating: 5,
        review: 'Garden transformation - excellent design and workmanship completed to high standard.'
      },
      {
        location: 'BIRMINGHAM',
        tradesperson: 'Premium Lawn Care',
        rating: 5,
        review: 'Regular lawn maintenance - reliable, professional service with excellent results.'
      },
      {
        location: 'MANCHESTER',
        tradesperson: 'Creative Garden Solutions',
        rating: 5,
        review: 'Patio installation - beautiful work with great attention to detail throughout.'
      }
    ],

    locations: [
      'London', 'Birmingham', 'Manchester', 'Leeds', 'Bristol', 'Edinburgh', 'Glasgow', 'Liverpool',
      'Cardiff', 'Sheffield', 'York', 'Cambridge', 'Oxford', 'Brighton', 'Bath', 'Norwich'
    ],

    // Related Trades
    relatedTrades: [
      'Builders', 'Carpenters', 'Paving Specialists', 'Landscape Designers', 'Tree Surgeons',
      'Electricians', 'Painters & Decorators', 'Pressure Washers', 'Fencing Specialists', 'Decorators'
    ],

    subcategories: [
      {
        id: 'lawn-care',
        name: 'Lawn Care',
        description: 'Grass cutting and lawn maintenance'
      },
      {
        id: 'garden-design',
        name: 'Garden Design',
        description: 'Garden planning and design'
      },
      {
        id: 'landscaping',
        name: 'Landscaping',
        description: 'Landscape creation and installation'
      },
      {
        id: 'hedge-trimming',
        name: 'Hedge Trimming',
        description: 'Hedge and shrub maintenance'
      },
      {
        id: 'garden-clearance',
        name: 'Garden Clearance',
        description: 'Garden clearing and cleanup'
      }
    ],
    services: [
      {
        id: 1,
        title: 'Regular Lawn Maintenance',
        location: '14 mins away',
        distance: 14,
        budget: '£25 - £50',
        description: 'Weekly grass cutting and lawn maintenance',
        postedDate: '3 hours ago',
        responses: 2,
        tags: ['recurring']
      },
      {
        id: 2,
        title: 'Garden Transformation',
        location: '20 mins away',
        distance: 20,
        budget: '£1,500 - £3,000',
        description: 'Complete garden redesign with new patio and planting',
        postedDate: '5 hours ago',
        responses: 5,
        tags: ['design', 'popular']
      },
      {
        id: 3,
        title: 'Hedge Trimming Service',
        location: '18 mins away',
        distance: 18,
        budget: '£150 - £400',
        description: 'Trim 15m of overgrown hedges around property',
        postedDate: '1 day ago',
        responses: 3,
        tags: []
      },
      {
        id: 4,
        title: 'Garden Clearance',
        location: '12 mins away',
        distance: 12,
        budget: '£200 - £600',
        description: 'Clear and tidy overgrown garden ready for landscaping',
        postedDate: '2 days ago',
        responses: 1,
        tags: []
      },
      {
        id: 5,
        title: 'Patio Jet Washing',
        location: '8 mins away',
        distance: 8,
        budget: '£100 - £200',
        description: 'Clean and pressure wash patio area',
        postedDate: '4 hours ago',
        responses: 4,
        tags: []
      }
    ],
    faqs: [
      {
        question: 'How often should grass be cut?',
        answer: 'Most lawns need cutting weekly during growing season (spring/summer) and every 2-3 weeks in autumn/winter.'
      },
      {
        question: 'What is the best time to trim hedges?',
        answer: 'Late winter or early spring is best for formal hedges. Summer trimming can be done for maintenance.'
      },
      {
        question: 'How much do garden design consultations cost?',
        answer: 'Design consultations typically cost £150-£500 depending on the garden size and complexity.'
      }
    ],
    guides: [
      {
        title: 'Garden Maintenance Prices',
        content: 'Average costs for common gardening services and lawn care in 2024.',
        readTime: '5 min read'
      },
      {
        title: 'Garden Design Guide',
        content: 'Planning your garden transformation - tips and ideas for creating your dream garden.',
        readTime: '10 min read'
      }
    ]
  },

  decorators: {
    id: 'decorators',
    name: 'Decorators',
    slug: 'decorators',
    description: 'Professional painting and decorating services',
    icon: '🎨',
    banner: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=400&fit=crop',
    
    pricingTiers: [
      { label: 'Daily Rate', price: '£120-£200' },
      { label: 'Per Room', price: '£300-£800' },
      { label: 'Hourly Rate', price: '£20-£35' }
    ],

    jobCosts: [
      { title: 'Room Painting', cost: '£300-£800' },
      { title: 'External Painting', cost: '£1,500-£3,000' },
      { title: 'Wallpapering', cost: '£200-£500' }
    ],

    tradespeople: [
      {
        name: 'Professional Decorators Ltd',
        rating: 5,
        reviews: 46,
        description: 'Expert painters and decorators with 18+ years experience. Interior and exterior painting specialists. Quality workmanship guaranteed.',
        latestReviewTitle: 'Latest Interior Painting Review',
        latestReview: 'Excellent quality work. Very professional team, clean and tidy. Transformed our home beautifully.',
        reviewedBy: 'Rachel',
        reviewDate: '2nd Nov 2025',
        location: 'SE1 1AA, London',
        memberSince: 'Jan 2016',
        idChecked: true,
        insurance: false
      },
      {
        name: 'Elite Painting Services',
        rating: 4.9,
        reviews: 41,
        description: 'Specialized in exterior painting, wallpapering, and feature walls. Attention to detail and customer satisfaction guaranteed.',
        latestReviewTitle: 'Latest Feature Wall Review',
        latestReview: 'Beautiful feature wall installation. Perfect finish and great value for money. Highly recommended.',
        reviewedBy: 'Jordan',
        reviewDate: '30th Oct 2025',
        location: 'WA1 1AE, Warrington',
        memberSince: 'Apr 2017',
        idChecked: true,
        insurance: false
      },
      {
        name: 'Quality Finish Decorating',
        rating: 4.8,
        reviews: 37,
        description: 'Interior and exterior decorating experts. Fast, efficient service. Cabinet repainting and specialist finishes available.',
        latestReviewTitle: 'Latest Cabinet Repainting Review',
        latestReview: 'Transformed our kitchen cabinets beautifully. Professional finish and quick turnaround time.',
        reviewedBy: 'Sophie',
        reviewDate: '28th Oct 2025',
        location: 'DD1 1AE, Dundee',
        memberSince: 'Jul 2018',
        idChecked: true,
        insurance: false
      }
    ],

    testimonials: [
      {
        company: 'Professional Decorators Ltd',
        stars: 5,
        text: 'Excellent quality work. Transformed our home beautifully.',
        reviewer: 'Rachel'
      },
      {
        company: 'Elite Painting Services',
        stars: 5,
        text: 'Beautiful feature wall installation. Perfect finish and great value.',
        reviewer: 'Jordan'
      },
      {
        company: 'Quality Finish Decorating',
        stars: 5,
        text: 'Transformed our kitchen cabinets beautifully with quick turnaround.',
        reviewer: 'Sophie'
      }
    ],

    completedJobs: [
      {
        location: 'LONDON',
        tradesperson: 'Professional Decorators Ltd',
        rating: 5,
        review: 'Interior painting - excellent quality work that transformed the home beautifully.'
      },
      {
        location: 'WARRINGTON',
        tradesperson: 'Elite Painting Services',
        rating: 5,
        review: 'Feature wall installation - beautiful finish with perfect attention to detail.'
      },
      {
        location: 'DUNDEE',
        tradesperson: 'Quality Finish Decorating',
        rating: 5,
        review: 'Cabinet repainting - transformed kitchen beautifully with quick turnaround.'
      }
    ],

    locations: [
      'London', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool', 'Bristol', 'Edinburgh', 'Glasgow',
      'Cardiff', 'Sheffield', 'Leicester', 'Coventry', 'York', 'Cambridge', 'Oxford', 'Bath'
    ],

    // Related Trades
    relatedTrades: [
      'Painters & Decorators', 'Plasterers', 'Builders', 'Carpenters', 'Tilers', 'Electricians',
      'Plumbers', 'Flooring Specialists', 'Handymen', 'Wallpaper Specialists'
    ],

    subcategories: [
      {
        id: 'interior-painting',
        name: 'Interior Painting',
        description: 'Indoor wall and ceiling painting'
      },
      {
        id: 'exterior-painting',
        name: 'Exterior Painting',
        description: 'Outdoor painting and weatherproofing'
      },
      {
        id: 'wallpapering',
        name: 'Wallpapering',
        description: 'Wallpaper hanging and removal'
      },
      {
        id: 'feature-walls',
        name: 'Feature Walls',
        description: 'Decorative feature wall creation'
      },
      {
        id: 'paint-effects',
        name: 'Paint Effects',
        description: 'Special paint finishes and effects'
      }
    ],
    services: [
      {
        id: 1,
        title: 'Living Room Painting',
        location: '11 mins away',
        distance: 11,
        budget: '£400 - £800',
        description: 'Paint living room walls and ceiling in modern colors',
        postedDate: '2 hours ago',
        responses: 3,
        tags: []
      },
      {
        id: 2,
        title: 'External House Painting',
        location: '19 mins away',
        distance: 19,
        budget: '£1,500 - £3,000',
        description: 'Paint house exterior including new render areas',
        postedDate: '6 hours ago',
        responses: 2,
        tags: ['weather-dependent']
      },
      {
        id: 3,
        title: 'Wallpaper Hanging',
        location: '9 mins away',
        distance: 9,
        budget: '£200 - £500',
        description: 'Hang wallpaper in 2 bedrooms',
        postedDate: '1 day ago',
        responses: 4,
        tags: []
      },
      {
        id: 4,
        title: 'Feature Wall Creation',
        location: '13 mins away',
        distance: 13,
        budget: '£150 - £400',
        description: 'Create accent feature wall with textured finish',
        postedDate: '3 days ago',
        responses: 1,
        tags: []
      },
      {
        id: 5,
        title: 'Cabinet Repainting',
        location: '7 mins away',
        distance: 7,
        budget: '£300 - £600',
        description: 'Repaint kitchen cabinets with modern finish',
        postedDate: '4 hours ago',
        responses: 2,
        tags: []
      }
    ],
    faqs: [
      {
        question: 'How much does it cost to paint a room?',
        answer: 'Room painting typically costs £300-£800 depending on room size and condition of walls.'
      },
      {
        question: 'How long does painting a house take?',
        answer: 'Average interior room takes 2-3 days. Full house can take 1-3 weeks depending on size.'
      },
      {
        question: 'What is the best time to paint externally?',
        answer: 'Spring and autumn are best - avoid extreme heat, cold, or wet weather for best results.'
      }
    ],
    guides: [
      {
        title: 'Painting & Decorating Costs',
        content: 'Complete guide to painting and decorating service prices in 2024.',
        readTime: '6 min read'
      },
      {
        title: 'Choosing Paint Colors',
        content: 'Tips for selecting the right paint colors for each room.',
        readTime: '8 min read'
      }
    ]
  },

  flooring: {
    id: 'flooring',
    name: 'Flooring',
    slug: 'flooring',
    description: 'Professional flooring installation and repair services',
    icon: '🪵',
    banner: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=400&fit=crop',
    
    pricingTiers: [
      { label: 'Per m²', price: '£30-£100' },
      { label: 'Daily Rate', price: '£150-£250' },
      { label: 'Full Project', price: 'Varies' }
    ],

    jobCosts: [
      { title: 'Laminate Flooring Installation', cost: '£800-£2,000' },
      { title: 'Wooden Floor Sanding', cost: '£500-£1,500' },
      { title: 'Tile Installation', cost: '£1,200-£2,500' }
    ],

    tradespeople: [
      {
        name: 'Premium Flooring Experts',
        rating: 5,
        reviews: 44,
        description: 'Specialist flooring installation with 16+ years experience. Laminate, wooden, and tile flooring experts. Fully insured.',
        latestReviewTitle: 'Latest Wooden Floor Installation Review',
        latestReview: 'Beautiful installation work. Professional finish and excellent attention to detail.',
        reviewedBy: 'Patricia',
        reviewDate: '2nd Nov 2025',
        location: 'WC1A 1AA, London',
        memberSince: 'Mar 2016',
        idChecked: true,
        insurance: true
      },
      {
        name: 'Expert Tile & Stone',
        rating: 4.9,
        reviews: 38,
        description: 'Specialists in tiling and stone flooring. Complex pattern work and natural stone specialists.',
        latestReviewTitle: 'Latest Bathroom Tiling Review',
        latestReview: 'Fantastic tiling work. Perfectly aligned and professionally finished.',
        reviewedBy: 'Richard',
        reviewDate: '1st Nov 2025',
        location: 'M1 2AB, Manchester',
        memberSince: 'Jun 2017',
        idChecked: true,
        insurance: true
      },
      {
        name: 'Laminate & Vinyl Specialists',
        rating: 4.8,
        reviews: 35,
        description: 'Quick and efficient laminate and vinyl flooring installation. Budget-friendly options available.',
        latestReviewTitle: 'Latest Laminate Installation Review',
        latestReview: 'Quick job completed professionally. Great value and excellent finish.',
        reviewedBy: 'Helen',
        reviewDate: '30th Oct 2025',
        location: 'B1 1AA, Birmingham',
        memberSince: 'Sep 2018',
        idChecked: true,
        insurance: false
      }
    ],

    testimonials: [
      {
        company: 'Premium Flooring Experts',
        stars: 5,
        text: 'Beautiful installation work. Professional finish and excellent attention to detail.',
        reviewer: 'Patricia'
      },
      {
        company: 'Expert Tile & Stone',
        stars: 5,
        text: 'Fantastic tiling work. Perfectly aligned and professionally finished.',
        reviewer: 'Richard'
      },
      {
        company: 'Laminate & Vinyl Specialists',
        stars: 5,
        text: 'Quick job completed professionally. Great value and excellent finish.',
        reviewer: 'Helen'
      }
    ],

    completedJobs: [
      {
        location: 'LONDON',
        tradesperson: 'Premium Flooring Experts',
        rating: 5,
        review: 'Wooden floor installation - beautiful work with professional finish and attention to detail.'
      },
      {
        location: 'MANCHESTER',
        tradesperson: 'Expert Tile & Stone',
        rating: 5,
        review: 'Bathroom tiling - fantastic work with perfectly aligned tiles and professional finish.'
      },
      {
        location: 'BIRMINGHAM',
        tradesperson: 'Laminate & Vinyl Specialists',
        rating: 5,
        review: 'Laminate flooring installation - quick job completed professionally with great finish.'
      }
    ],

    locations: [
      'London', 'Birmingham', 'Manchester', 'Leeds', 'Bristol', 'Edinburgh', 'Glasgow', 'Liverpool',
      'Cardiff', 'Sheffield', 'York', 'Cambridge', 'Oxford', 'Bath', 'Brighton', 'Norwich'
    ],

    // Related Trades
    relatedTrades: [
      'Builders', 'Carpenters', 'Tilers', 'Painters & Decorators', 'Plasterers', 'Electricians',
      'Plumbers', 'Handymen', 'Door Installers', 'Skirting Board Specialists'
    ],

    subcategories: [
      {
        id: 'wooden-flooring',
        name: 'Wooden Flooring',
        description: 'Wood floor installation and finishing'
      },
      {
        id: 'laminate-flooring',
        name: 'Laminate Flooring',
        description: 'Laminate installation'
      },
      {
        id: 'tile-flooring',
        name: 'Tile Flooring',
        description: 'Tile and stone flooring'
      },
      {
        id: 'vinyl-flooring',
        name: 'Vinyl Flooring',
        description: 'Vinyl and LVT installation'
      },
      {
        id: 'floor-repairs',
        name: 'Floor Repairs',
        description: 'Floor repair and restoration'
      }
    ]
  },

  heating_engineers: {
    id: 'heating_engineers',
    name: 'Heating Engineers',
    slug: 'heating-engineers',
    description: 'Gas safe registered heating and boiler engineers',
    icon: '🔥',
    banner: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=400&fit=crop',
    
    pricingTiers: [
      { label: 'Call-out Fee', price: '£50-£150' },
      { label: 'Hourly Rate', price: '£50-£100' },
      { label: 'Full Installation', price: 'Varies' }
    ],

    jobCosts: [
      { title: 'Boiler Installation', cost: '£1,500-£3,500' },
      { title: 'Radiator Installation', cost: '£200-£400 per radiator' },
      { title: 'Annual Boiler Service', cost: '£100-£200' }
    ],

    tradespeople: [
      {
        name: 'Gas Safe Heating Services',
        rating: 5,
        reviews: 52,
        description: 'Gas Safe registered engineers with 20+ years experience. Boiler installation, repairs, and servicing. Emergency callouts available.',
        latestReviewTitle: 'Latest Boiler Installation Review',
        latestReview: 'Professional installation and excellent communication throughout. Very satisfied with service.',
        reviewedBy: 'Stephen',
        reviewDate: '3rd Nov 2025',
        location: 'N1 1AA, London',
        memberSince: 'Jan 2015',
        idChecked: true,
        insurance: true
      },
      {
        name: 'Elite Boiler Solutions',
        rating: 4.9,
        reviews: 46,
        description: 'Specialists in boiler installation and maintenance. All brands serviced. Warranty agreements available.',
        latestReviewTitle: 'Latest Boiler Service Review',
        latestReview: 'Thorough service and professional engineer. Will definitely use again.',
        reviewedBy: 'Margaret',
        reviewDate: '1st Nov 2025',
        location: 'B1 1AA, Birmingham',
        memberSince: 'Apr 2016',
        idChecked: true,
        insurance: true
      },
      {
        name: 'Central Heating Experts',
        rating: 4.8,
        reviews: 41,
        description: 'Central heating system design and installation. Radiator balancing and system upgrades.',
        latestReviewTitle: 'Latest Central Heating Installation Review',
        latestReview: 'Excellent work. System now running perfectly and very efficiently.',
        reviewedBy: 'David',
        reviewDate: '31st Oct 2025',
        location: 'M1 2AB, Manchester',
        memberSince: 'Jul 2017',
        idChecked: true,
        insurance: true
      }
    ],

    testimonials: [
      {
        company: 'Gas Safe Heating Services',
        stars: 5,
        text: 'Professional installation and excellent communication throughout.',
        reviewer: 'Stephen'
      },
      {
        company: 'Elite Boiler Solutions',
        stars: 5,
        text: 'Thorough service and professional engineer. Will definitely use again.',
        reviewer: 'Margaret'
      },
      {
        company: 'Central Heating Experts',
        stars: 5,
        text: 'Excellent work. System now running perfectly and very efficiently.',
        reviewer: 'David'
      }
    ],

    completedJobs: [
      {
        location: 'LONDON',
        tradesperson: 'Gas Safe Heating Services',
        rating: 5,
        review: 'Boiler installation - professional service with excellent communication throughout.'
      },
      {
        location: 'BIRMINGHAM',
        tradesperson: 'Elite Boiler Solutions',
        rating: 5,
        review: 'Annual boiler service - thorough work by professional engineer with great communication.'
      },
      {
        location: 'MANCHESTER',
        tradesperson: 'Central Heating Experts',
        rating: 5,
        review: 'Central heating installation - excellent work with system running perfectly.'
      }
    ],

    locations: [
      'London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Liverpool', 'Edinburgh', 'Bristol',
      'Leicester', 'Coventry', 'York', 'Cambridge', 'Oxford', 'Cardiff', 'Aberdeen', 'Durham'
    ],

    // Related Trades
    relatedTrades: [
      'Plumbers', 'Builders', 'Electricians', 'Gas Engineers', 'Carpenters', 'Boiler Specialists',
      'Radiator Specialists', 'System Installers', 'Emergency Repairs', 'Handymen'
    ],

    subcategories: [
      {
        id: 'boiler-installation',
        name: 'Boiler Installation',
        description: 'New boiler installation'
      },
      {
        id: 'boiler-repair',
        name: 'Boiler Repair',
        description: 'Boiler repair and troubleshooting'
      },
      {
        id: 'central-heating',
        name: 'Central Heating',
        description: 'Central heating system work'
      },
      {
        id: 'radiators',
        name: 'Radiators',
        description: 'Radiator installation and repair'
      },
      {
        id: 'gas-safe',
        name: 'Gas Safe Services',
        description: 'All Gas Safe registered work'
      }
    ]
  },

  painters_decorators: {
    id: 'painters_decorators',
    name: 'Painters & Decorators',
    slug: 'painters-decorators',
    description: 'Professional interior and exterior painting services',
    icon: '🎨',
    banner: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1200&h=400&fit=crop',
    
    pricingTiers: [
      { label: 'Daily Rate', price: '£120-£200' },
      { label: 'Per Room', price: '£350-£850' },
      { label: 'Hourly Rate', price: '£20-£35' }
    ],

    jobCosts: [
      { title: 'Single Room Painting', cost: '£350-£850' },
      { title: 'External House Painting', cost: '£2,000-£4,000' },
      { title: 'Wallpapering (2 rooms)', cost: '£250-£600' }
    ],

    tradespeople: [
      {
        name: 'Professional Paint & Decor',
        rating: 5,
        reviews: 48,
        description: 'Expert painters with 18+ years experience. Interior and exterior specialists. High quality finishes guaranteed.',
        latestReviewTitle: 'Latest Interior Painting Review',
        latestReview: 'Excellent quality work. Very professional team, clean and tidy. Highly recommend.',
        reviewedBy: 'Victoria',
        reviewDate: '2nd Nov 2025',
        location: 'SE1 1AA, London',
        memberSince: 'Feb 2016',
        idChecked: true,
        insurance: false
      },
      {
        name: 'Elite Interior Design Painters',
        rating: 4.9,
        reviews: 43,
        description: 'Specialists in feature walls and decorative finishes. Creative designs and expert execution.',
        latestReviewTitle: 'Latest Feature Wall Review',
        latestReview: 'Beautiful feature wall created exactly as we imagined. Perfect finish.',
        reviewedBy: 'Oliver',
        reviewDate: '31st Oct 2025',
        location: 'WA1 1AE, Warrington',
        memberSince: 'May 2017',
        idChecked: true,
        insurance: false
      },
      {
        name: 'Quick Quality Painters',
        rating: 4.8,
        reviews: 39,
        description: 'Fast and efficient painting service. Cabinet repainting and touch-ups. Budget-friendly options.',
        latestReviewTitle: 'Latest Cabinet Repainting Review',
        latestReview: 'Quick turnaround with great quality. Kitchen cabinets look like new.',
        reviewedBy: 'Emma',
        reviewDate: '29th Oct 2025',
        location: 'DD1 1AE, Dundee',
        memberSince: 'Aug 2018',
        idChecked: true,
        insurance: false
      }
    ],

    testimonials: [
      {
        company: 'Professional Paint & Decor',
        stars: 5,
        text: 'Excellent quality work. Very professional team, clean and tidy.',
        reviewer: 'Victoria'
      },
      {
        company: 'Elite Interior Design Painters',
        stars: 5,
        text: 'Beautiful feature wall created exactly as we imagined. Perfect finish.',
        reviewer: 'Oliver'
      },
      {
        company: 'Quick Quality Painters',
        stars: 5,
        text: 'Quick turnaround with great quality. Kitchen cabinets look like new.',
        reviewer: 'Emma'
      }
    ],

    completedJobs: [
      {
        location: 'LONDON',
        tradesperson: 'Professional Paint & Decor',
        rating: 5,
        review: 'Interior painting - excellent quality work by professional team, very clean and tidy.'
      },
      {
        location: 'WARRINGTON',
        tradesperson: 'Elite Interior Design Painters',
        rating: 5,
        review: 'Feature wall creation - beautiful wall created exactly as imagined with perfect finish.'
      },
      {
        location: 'DUNDEE',
        tradesperson: 'Quick Quality Painters',
        rating: 5,
        review: 'Cabinet repainting - quick turnaround with great quality, cabinets look like new.'
      }
    ],

    locations: [
      'London', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool', 'Bristol', 'Edinburgh', 'Glasgow',
      'Cardiff', 'Sheffield', 'Leicester', 'Coventry', 'York', 'Cambridge', 'Oxford', 'Bath'
    ],

    // Related Trades
    relatedTrades: [
      'Decorators', 'Builders', 'Plasterers', 'Carpenters', 'Tilers', 'Flooring Specialists',
      'Handymen', 'Electricians', 'Wallpaper Specialists', 'Interior Designers'
    ],

    subcategories: [
      {
        id: 'interior-painting',
        name: 'Interior Painting',
        description: 'Indoor wall painting'
      },
      {
        id: 'exterior-painting',
        name: 'Exterior Painting',
        description: 'Outdoor painting and rendering'
      },
      {
        id: 'wallpapering',
        name: 'Wallpapering',
        description: 'Wallpaper hanging services'
      },
      {
        id: 'feature-walls',
        name: 'Feature Walls',
        description: 'Decorative accent walls'
      },
      {
        id: 'cabinet-painting',
        name: 'Cabinet Painting',
        description: 'Cabinet and furniture finishing'
      }
    ]
  },

  plasterers_renderers: {
    id: 'plasterers_renderers',
    name: 'Plasterers & Renderers',
    slug: 'plasterers-renderers',
    description: 'Professional plastering and rendering services',
    icon: '👷',
    banner: 'https://images.unsplash.com/photo-1541123603104-852bda009040?w=1200&h=400&fit=crop',
    
    pricingTiers: [
      { label: 'Per m²', price: '£15-£40' },
      { label: 'Daily Rate', price: '£140-£220' },
      { label: 'Full Project', price: 'Varies' }
    ],

    jobCosts: [
      { title: 'Room Plastering', cost: '£600-£1,500' },
      { title: 'Exterior Rendering', cost: '£1,500-£3,500' },
      { title: 'Ceiling Repair & Plaster', cost: '£400-£1,200' }
    ],

    tradespeople: [
      {
        name: 'Expert Plasterers Ltd',
        rating: 5,
        reviews: 42,
        description: 'Specialist plastering and rendering with 17+ years experience. Interior and exterior work. Excellent finishes.',
        latestReviewTitle: 'Latest Room Plastering Review',
        latestReview: 'Excellent plastering work. Very professional finish and attention to detail.',
        reviewedBy: 'Michael',
        reviewDate: '2nd Nov 2025',
        location: 'E1 1AA, London',
        memberSince: 'Apr 2015',
        idChecked: true,
        insurance: true
      },
      {
        name: 'Render & Plaster Specialists',
        rating: 4.9,
        reviews: 38,
        description: 'External rendering and cladding specialists. Weather-resistant finishes.',
        latestReviewTitle: 'Latest External Rendering Review',
        latestReview: 'Professional rendering work. Building now looks like new.',
        reviewedBy: 'Susan',
        reviewDate: '1st Nov 2025',
        location: 'B1 1AA, Birmingham',
        memberSince: 'Jun 2016',
        idChecked: true,
        insurance: true
      },
      {
        name: 'Quality Ceiling & Wall Plaster',
        rating: 4.8,
        reviews: 35,
        description: 'Ceiling repair and plaster specialists. Damage repair and new installations.',
        latestReviewTitle: 'Latest Ceiling Repair Review',
        latestReview: 'Ceiling damage fixed beautifully. Professional and efficient work.',
        reviewedBy: 'John',
        reviewDate: '30th Oct 2025',
        location: 'M1 2AB, Manchester',
        memberSince: 'Sep 2017',
        idChecked: true,
        insurance: false
      }
    ],

    testimonials: [
      {
        company: 'Expert Plasterers Ltd',
        stars: 5,
        text: 'Excellent plastering work. Very professional finish and attention to detail.',
        reviewer: 'Michael'
      },
      {
        company: 'Render & Plaster Specialists',
        stars: 5,
        text: 'Professional rendering work. Building now looks like new.',
        reviewer: 'Susan'
      },
      {
        company: 'Quality Ceiling & Wall Plaster',
        stars: 5,
        text: 'Ceiling damage fixed beautifully. Professional and efficient work.',
        reviewer: 'John'
      }
    ],

    completedJobs: [
      {
        location: 'LONDON',
        tradesperson: 'Expert Plasterers Ltd',
        rating: 5,
        review: 'Room plastering - excellent work with very professional finish and attention to detail.'
      },
      {
        location: 'BIRMINGHAM',
        tradesperson: 'Render & Plaster Specialists',
        rating: 5,
        review: 'External rendering - professional work that makes building look like new.'
      },
      {
        location: 'MANCHESTER',
        tradesperson: 'Quality Ceiling & Wall Plaster',
        rating: 5,
        review: 'Ceiling damage repair - beautifully fixed with professional and efficient work.'
      }
    ],

    locations: [
      'London', 'Birmingham', 'Manchester', 'Leeds', 'Glasgow', 'Liverpool', 'Edinburgh', 'Bristol',
      'Leicester', 'Coventry', 'Bradford', 'York', 'Cambridge', 'Oxford', 'Belfast', 'Cardiff'
    ],

    // Related Trades
    relatedTrades: [
      'Builders', 'Painters & Decorators', 'Decorators', 'Carpenters', 'Electricians', 'Tilers',
      'Flooring Specialists', 'Handymen', 'Dry Liners', 'Internal Renovators'
    ],

    subcategories: [
      {
        id: 'internal-plastering',
        name: 'Internal Plastering',
        description: 'Indoor plaster work'
      },
      {
        id: 'external-rendering',
        name: 'External Rendering',
        description: 'Building exterior rendering'
      },
      {
        id: 'ceiling-repair',
        name: 'Ceiling Repair',
        description: 'Ceiling plaster and repair'
      },
      {
        id: 'decorative-plaster',
        name: 'Decorative Plaster',
        description: 'Ornamental plaster work'
      },
      {
        id: 'damp-proofing',
        name: 'Damp Proofing',
        description: 'Damp proof course work'
      }
    ]
  },

  handymen: {
    id: 'handymen',
    name: 'Handymen',
    slug: 'handymen',
    description: 'General handyman services and repairs',
    icon: '🔨',
    banner: 'https://images.unsplash.com/photo-1581578731548-c64695c952952?w=1200&h=400&fit=crop',
    
    pricingTiers: [
      { label: 'Hourly Rate', price: '£18-£35' },
      { label: 'Half Day', price: '£70-£120' },
      { label: 'Full Day', price: '£140-£240' }
    ],

    jobCosts: [
      { title: 'General Repairs', cost: '£50-£200' },
      { title: 'Shelving & Hanging', cost: '£80-£250' },
      { title: 'Door & Lock Repair', cost: '£100-£300' }
    ],

    tradespeople: [
      {
        name: 'Reliable Handyman Services',
        rating: 5,
        reviews: 51,
        description: 'Experienced handyman for all general repairs and maintenance. No job too small. Quick response and friendly service.',
        latestReviewTitle: 'Latest General Repairs Review',
        latestReview: 'Very reliable and efficient. Fixed multiple issues quickly. Highly recommend.',
        reviewedBy: 'Catherine',
        reviewDate: '3rd Nov 2025',
        location: 'SW15 2AE, London',
        memberSince: 'Jan 2014',
        idChecked: true,
        insurance: false
      },
      {
        name: 'All-Round Maintenance Expert',
        rating: 4.9,
        reviews: 44,
        description: 'Expert handyman covering plumbing, carpentry, electrical basics, and general repairs. Professional and trustworthy.',
        latestReviewTitle: 'Latest Shelving Installation Review',
        latestReview: 'Perfect shelving installation. Very professional and tidy work.',
        reviewedBy: 'William',
        reviewDate: '2nd Nov 2025',
        location: 'B15 2AE, Birmingham',
        memberSince: 'Mar 2015',
        idChecked: true,
        insurance: false
      },
      {
        name: 'Quick Fix Handywork',
        rating: 4.8,
        reviews: 40,
        description: 'Fast and friendly handyman service. Door repairs, lock changes, and small maintenance jobs. Same-day appointments available.',
        latestReviewTitle: 'Latest Door Repair Review',
        latestReview: 'Quick service with professional results. Door now works perfectly.',
        reviewedBy: 'Alan',
        reviewDate: '1st Nov 2025',
        location: 'M2 1AE, Manchester',
        memberSince: 'Jun 2016',
        idChecked: true,
        insurance: false
      }
    ],

    testimonials: [
      {
        company: 'Reliable Handyman Services',
        stars: 5,
        text: 'Very reliable and efficient. Fixed multiple issues quickly.',
        reviewer: 'Catherine'
      },
      {
        company: 'All-Round Maintenance Expert',
        stars: 5,
        text: 'Perfect shelving installation. Very professional and tidy work.',
        reviewer: 'William'
      },
      {
        company: 'Quick Fix Handywork',
        stars: 5,
        text: 'Quick service with professional results. Door now works perfectly.',
        reviewer: 'Alan'
      }
    ],

    completedJobs: [
      {
        location: 'LONDON',
        tradesperson: 'Reliable Handyman Services',
        rating: 5,
        review: 'General repairs - very reliable and efficient work fixing multiple issues quickly.'
      },
      {
        location: 'BIRMINGHAM',
        tradesperson: 'All-Round Maintenance Expert',
        rating: 5,
        review: 'Shelving installation - perfect installation with very professional and tidy work.'
      },
      {
        location: 'MANCHESTER',
        tradesperson: 'Quick Fix Handywork',
        rating: 5,
        review: 'Door repair - quick service with professional results, door works perfectly.'
      }
    ],

    locations: [
      'London', 'Manchester', 'Birmingham', 'Leeds', 'Bristol', 'Edinburgh', 'Cardiff', 'Glasgow',
      'Liverpool', 'Sheffield', 'Cambridge', 'Oxford', 'York', 'Bath', 'Brighton', 'Norwich'
    ],

    // Related Trades
    relatedTrades: [
      'Builders', 'Carpenters', 'Plumbers', 'Electricians', 'Painters & Decorators', 'Tilers',
      'Decorators', 'Flooring Specialists', 'Plasterers', 'Door Specialists'
    ],

    subcategories: [
      {
        id: 'general-repairs',
        name: 'General Repairs',
        description: 'Small general repairs'
      },
      {
        id: 'flat-pack-assembly',
        name: 'Flat Pack Assembly',
        description: 'Furniture assembly service'
      },
      {
        id: 'shelving-hanging',
        name: 'Shelving & Hanging',
        description: 'Picture and shelving hanging'
      },
      {
        id: 'door-locks',
        name: 'Door & Locks',
        description: 'Door repair and lock changes'
      },
      {
        id: 'general-maintenance',
        name: 'General Maintenance',
        description: 'Property maintenance work'
      }
    ]
  }
};

// Export flattened category list for header dropdown
export const categoryList = Object.values(categoriesData).map(cat => ({
  name: cat.name,
  slug: cat.slug,
  icon: cat.icon
}));

// Helper function to get category by slug
export const getCategoryBySlug = (slug) => {
  // Convert slug format (with hyphens) to object key format (with underscores)
  const key = slug.replace(/-/g, '_');
  return categoriesData[key];
};
