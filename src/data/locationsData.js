// Comprehensive locations data for MyJobQuote
export const locationsData = {
  london: {
    id: 'london',
    slug: 'london',
    name: 'London',
    region: 'England',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=400&fit=crop',
    description: 'Find trusted local tradespeople in London',
    banner: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=400&fit=crop',
    heroTitle: 'Find Tradespeople in London',
    heroDescription: 'Get quotes from vetted local professionals for any project',
    postcode: 'SW1A 1AA',
    stats: {
      tradespeople: '2,345',
      reviews: '15,234',
      rating: 4.8
    },
    popularTrades: [
      'Builders',
      'Plumbers',
      'Electricians',
      'Carpenters',
      'Decorators',
      'Gardeners'
    ],
    nearbyAreas: [
      'Westminster', 'Chelsea', 'Kensington', 'Hammersmith',
      'Islington', 'Camden', 'Tower Hamlets', 'Hackney',
      'Southwark', 'Lambeth', 'Croydon', 'Kingston upon Thames'
    ],
    testimonials: [
      {
        name: 'Sarah Johnson',
        location: 'Westminster',
        text: 'Found amazing builders for my kitchen renovation. Service was excellent!',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
      },
      {
        name: 'Michael Chen',
        location: 'Islington',
        text: 'Quick responses from plumbers. Very professional and competitively priced.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
      },
      {
        name: 'Emma Wilson',
        location: 'Chelsea',
        text: 'Best experience using a tradesperson platform. Highly recommend!',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
      }
    ],
    averageCosts: {
      builder: '£250-£350/day',
      plumber: '£40-£60/hour',
      electrician: '£45-£70/hour',
      carpenter: '£35-£50/hour'
    },
    recentJobs: [
      { title: 'Kitchen Extension', location: 'Westminster', budget: '£8,000-£12,000', date: '2 days ago' },
      { title: 'Bathroom Renovation', location: 'Chelsea', budget: '£5,000-£8,000', date: '3 days ago' },
      { title: 'Garden Design', location: 'Kensington', budget: '£2,000-£4,000', date: '1 week ago' }
    ],
    tradespeople: [
      {
        id: 1,
        name: "Kemar's Electrical Services Ltd",
        category: 'Electrician',
        baseLocation: 'LU1 3AJ, Luton',
        coveringArea: 'Electrician covering London',
        rating: 4.9,
        reviewCount: 167,
        totalReviews: 3565,
        description: 'We are professional electricians providing high quality and affordable domestic and commercial electrical services. With many happy and returning customers over the last 10 years, you can be sure of being well looked after.',
        latestReview: {
          title: 'Latest Switches, Sockets & Fittings Review',
          text: '"Excellent, Job done in no time"',
          reviewer: 'Isabella',
          date: '5th Nov 2025'
        },
        memberSince: 'Jun 2023',
        insurance: 'Public liability insurance',
        logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kemars',
        profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'
      },
      {
        id: 2,
        name: "PT Plumbing & Gas",
        category: 'Plumber',
        baseLocation: 'SE15 2DG, Peckham',
        coveringArea: 'Plumber covering London',
        rating: 4.8,
        reviewCount: 142,
        totalReviews: 3200,
        description: 'Experienced plumbing and gas engineers providing reliable services for residential and commercial properties.',
        latestReview: {
          title: 'Professional Plumbing Installation',
          text: '"Excellent work, fast and efficient"',
          reviewer: 'Marcus',
          date: '4th Nov 2025'
        },
        memberSince: 'Mar 2022',
        insurance: 'Public liability insurance',
        logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ptplumbing',
        profileImage: 'https://images.unsplash.com/photo-1585952868455-b8aad8d4aecc?w=200&h=200&fit=crop'
      },
      {
        id: 3,
        name: "Smith & Sons Builders",
        category: 'Builder',
        baseLocation: 'SW2 1AB, Streatham',
        coveringArea: 'Builder covering London',
        rating: 4.7,
        reviewCount: 189,
        totalReviews: 3890,
        description: 'Professional building contractors specializing in extensions and renovations.',
        latestReview: {
          title: 'Kitchen Extension Completed',
          text: '"Outstanding work, very professional"',
          reviewer: 'Jennifer',
          date: '3rd Nov 2025'
        },
        memberSince: 'Jan 2020',
        insurance: 'Public liability insurance',
        logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=smithsons',
        profileImage: 'https://images.unsplash.com/photo-1503387762519-52582b742d5d?w=200&h=200&fit=crop'
      },
      {
        id: 4,
        name: "London Carpentry Pro",
        category: 'Carpenter',
        baseLocation: 'E1 6AN, Whitechapel',
        coveringArea: 'Carpenter covering London',
        rating: 4.9,
        reviewCount: 156,
        totalReviews: 3450,
        description: 'Expert carpenters providing bespoke woodwork and structural carpentry solutions.',
        latestReview: {
          title: 'Beautiful Custom Wardrobe',
          text: '"Highly skilled craftsman, exceeds expectations"',
          reviewer: 'Robert',
          date: '2nd Nov 2025'
        },
        memberSince: 'May 2021',
        insurance: 'Public liability insurance',
        logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=londoncarps',
        profileImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&h=200&fit=crop'
      }
    ]
  },

  birmingham: {
    id: 'birmingham',
    slug: 'birmingham',
    name: 'Birmingham',
    region: 'England',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&h=400&fit=crop',
    description: 'Find trusted local tradespeople in Birmingham',
    banner: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&h=400&fit=crop',
    heroTitle: 'Find Tradespeople in Birmingham',
    heroDescription: 'Get quotes from vetted local professionals for any project',
    postcode: 'B1 1AA',
    stats: {
      tradespeople: '1,856',
      reviews: '12,456',
      rating: 4.7
    },
    popularTrades: [
      'Builders',
      'Plumbers',
      'Electricians',
      'Decorators',
      'Roofers',
      'Handymen'
    ],
    nearbyAreas: [
      'Edgbaston', 'Harborne', 'Moseley', 'Solihull',
      'Selly Oak', 'Dudley', 'Wolverhampton', 'Walsall',
      'Sutton Coldfield', 'Coventry', 'Redditch', 'Bromsgrove'
    ],
    testimonials: [
      {
        name: 'James Smith',
        location: 'Edgbaston',
        text: 'Excellent service! Found perfect builder for my extension project.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James'
      },
      {
        name: 'Lisa Ahmed',
        location: 'Moseley',
        text: 'Very responsive traders. Got the best quotes in my area.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa'
      },
      {
        name: 'David Brown',
        location: 'Harborne',
        text: 'Highly recommend. Professional service from start to finish.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
      }
    ],
    averageCosts: {
      builder: '£200-£300/day',
      plumber: '£35-£55/hour',
      electrician: '£40-£65/hour',
      carpenter: '£30-£45/hour'
    },
    recentJobs: [
      { title: 'Loft Conversion', location: 'Solihull', budget: '£10,000-£15,000', date: '1 day ago' },
      { title: 'Plumbing Installation', location: 'Edgbaston', budget: '£1,500-£3,000', date: '2 days ago' },
      { title: 'Electrical Upgrade', location: 'Moseley', budget: '£2,000-£4,000', date: '4 days ago' }
    ],
    tradespeople: [
      { id: 1, name: "Birmingham Electrical Pro", category: 'Electrician', baseLocation: 'B15 2SQ, Edgbaston', coveringArea: 'Electrician covering Birmingham', rating: 4.9, reviewCount: 152, totalReviews: 3420, description: 'Professional electrical services for residential and commercial properties.', latestReview: { title: 'Professional Electrical Work', text: '"Fast, reliable service"', reviewer: 'Nicholas', date: '5th Nov 2025' }, memberSince: 'Feb 2022', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=birmelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop' },
      { id: 2, name: "Brum Plumbing Services", category: 'Plumber', baseLocation: 'B5 4UX, Digbeth', coveringArea: 'Plumber covering Birmingham', rating: 4.8, reviewCount: 138, totalReviews: 3100, description: 'Expert plumbing and gas services with 20 years experience.', latestReview: { title: 'Excellent Plumbing Work', text: '"On time, professional"', reviewer: 'Sandra', date: '4th Nov 2025' }, memberSince: 'May 2019', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=brumplumb', profileImage: 'https://images.unsplash.com/photo-1585952868455-b8aad8d4aecc?w=200&h=200&fit=crop' },
      { id: 3, name: "West Midlands Builders", category: 'Builder', baseLocation: 'B17 8RJ, Harborne', coveringArea: 'Builder covering Birmingham', rating: 4.7, reviewCount: 176, totalReviews: 3750, description: 'Quality building work specializing in extensions and renovations.', latestReview: { title: 'Extension Completed', text: '"Professional team"', reviewer: 'Graham', date: '3rd Nov 2025' }, memberSince: 'Aug 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wmbuilders', profileImage: 'https://images.unsplash.com/photo-1503387762519-52582b742d5d?w=200&h=200&fit=crop' },
      { id: 4, name: "Birmingham Carpentry", category: 'Carpenter', baseLocation: 'B18 5ES, Handsworth', coveringArea: 'Carpenter covering Birmingham', rating: 4.8, reviewCount: 147, totalReviews: 3340, description: 'Custom carpentry and wooden furniture creation.', latestReview: { title: 'Beautiful Custom Units', text: '"Outstanding quality"', reviewer: 'Helen', date: '2nd Nov 2025' }, memberSince: 'Mar 2021', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=birmcarp', profileImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&h=200&fit=crop' }
    ]
  },

  manchester: {
    id: 'manchester',
    slug: 'manchester',
    name: 'Manchester',
    region: 'England',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
    description: 'Find trusted local tradespeople in Manchester',
    banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
    heroTitle: 'Find Tradespeople in Manchester',
    heroDescription: 'Get quotes from vetted local professionals for any project',
    postcode: 'M1 1AA',
    stats: {
      tradespeople: '1,645',
      reviews: '11,234',
      rating: 4.6
    },
    popularTrades: [
      'Builders',
      'Plumbers',
      'Electricians',
      'Gardeners',
      'Painters & Decorators',
      'Plasterers'
    ],
    nearbyAreas: [
      'Withington', 'Didsbury', 'Chorlton', 'Stockport',
      'Salford', 'Trafford', 'Bury', 'Bolton',
      'Wigan', 'Oldham', 'Tameside', 'Rochdale'
    ],
    testimonials: [
      {
        name: 'Rachel Green',
        location: 'Didsbury',
        text: 'Great experience! Found skilled tradespeople quickly.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel'
      },
      {
        name: 'Tom Harrison',
        location: 'Chorlton',
        text: 'Amazing platform. Competitive quotes and professional work.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom'
      },
      {
        name: 'Sophie Parker',
        location: 'Withington',
        text: 'Would definitely use again. Highly satisfied with the service.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie'
      }
    ],
    averageCosts: {
      builder: '£220-£320/day',
      plumber: '£38-£58/hour',
      electrician: '£42-£62/hour',
      carpenter: '£32-£48/hour'
    },
    recentJobs: [
      { title: 'Kitchen Fit', location: 'Withington', budget: '£3,000-£6,000', date: '1 day ago' },
      { title: 'Garden Landscaping', location: 'Didsbury', budget: '£1,500-£3,500', date: '3 days ago' },
      { title: 'Roofing Repair', location: 'Chorlton', budget: '£2,000-£5,000', date: '5 days ago' }
    ],
    tradespeople: [
      { id: 1, name: "Manchester Electrical", category: 'Electrician', baseLocation: 'M1 1AA, City Centre', coveringArea: 'Electrician covering Manchester', rating: 4.9, reviewCount: 148, totalReviews: 3350, description: 'Professional electrical installation and maintenance.', latestReview: { title: 'Excellent Work', text: '"Professional and punctual"', reviewer: 'Paul', date: '5th Nov 2025' }, memberSince: 'Apr 2021', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=manchelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop' },
      { id: 2, name: "Reliable Plumbing Manchester", category: 'Plumber', baseLocation: 'M4 1BW, Deansgate', coveringArea: 'Plumber covering Manchester', rating: 4.8, reviewCount: 135, totalReviews: 3050, description: 'Trusted plumbing and heating engineers.', latestReview: { title: 'Great Service', text: '"Efficient and professional"', reviewer: 'Anna', date: '4th Nov 2025' }, memberSince: 'Jul 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=manchplumb', profileImage: 'https://images.unsplash.com/photo-1585952868455-b8aad8d4aecc?w=200&h=200&fit=crop' },
      { id: 3, name: "Greater Manchester Builders", category: 'Builder', baseLocation: 'M14 6HZ, Rusholme', coveringArea: 'Builder covering Manchester', rating: 4.7, reviewCount: 171, totalReviews: 3680, description: 'Quality construction and renovation projects.', latestReview: { title: 'Professional Builders', text: '"Excellent quality"', reviewer: 'Steve', date: '3rd Nov 2025' }, memberSince: 'Nov 2019', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=gmbuilders', profileImage: 'https://images.unsplash.com/photo-1503387762519-52582b742d5d?w=200&h=200&fit=crop' },
      { id: 4, name: "Manchester Carpentry", category: 'Carpenter', baseLocation: 'M8 8BJ, Cheetham', coveringArea: 'Carpenter covering Manchester', rating: 4.8, reviewCount: 143, totalReviews: 3220, description: 'Expert carpentry and bespoke woodwork solutions.', latestReview: { title: 'Superb Craftsmanship', text: '"Highly skilled"', reviewer: 'Emma', date: '2nd Nov 2025' }, memberSince: 'Feb 2021', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=manchcarp', profileImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&h=200&fit=crop' }
    ]
  },

  edinburgh: {
    id: 'edinburgh',
    slug: 'edinburgh',
    name: 'Edinburgh',
    region: 'Scotland',
    image: 'https://images.unsplash.com/photo-1486306921302-af644bcf20a7?w=1200&h=400&fit=crop',
    description: 'Find trusted local tradespeople in Edinburgh',
    banner: 'https://images.unsplash.com/photo-1486306921302-af644bcf20a7?w=1200&h=400&fit=crop',
    heroTitle: 'Find Tradespeople in Edinburgh',
    heroDescription: 'Get quotes from vetted local professionals for any project',
    postcode: 'EH1 3AA',
    stats: {
      tradespeople: '1,234',
      reviews: '9,456',
      rating: 4.7
    },
    popularTrades: [
      'Builders',
      'Plumbers',
      'Electricians',
      'Roofers',
      'Carpenters',
      'Decorators'
    ],
    nearbyAreas: [
      'Leith', 'Morningside', 'Cramond', 'Newington',
      'Bruntsfield', 'Portobello', 'Dalry', 'Dean',
      'Stockbridge', 'Fountainbridge', 'Gorgie', 'Murrayfield'
    ],
    testimonials: [
      {
        name: 'Ian MacLeod',
        location: 'Morningside',
        text: 'Fantastic service. Found excellent tradespeople for my home.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ian'
      },
      {
        name: 'Claire Robertson',
        location: 'Leith',
        text: 'Very professional and responsive. Highly recommended!',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Claire'
      },
      {
        name: 'Andrew MacKenzie',
        location: 'Cramond',
        text: 'Best quotes I received. Quality work at good prices.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Andrew'
      }
    ],
    averageCosts: {
      builder: '£240-£340/day',
      plumber: '£42-£62/hour',
      electrician: '£45-£65/hour',
      carpenter: '£35-£50/hour'
    },
    recentJobs: [
      { title: 'Stone Restoration', location: 'Old Town', budget: '£4,000-£8,000', date: '1 day ago' },
      { title: 'Interior Renovation', location: 'Morningside', budget: '£6,000-£10,000', date: '2 days ago' },
      { title: 'Bathroom Refit', location: 'Leith', budget: '£3,000-£5,000', date: '4 days ago' }
    ],
    tradespeople: [
      { id: 1, name: "Edinburgh Electrical Works", category: 'Electrician', baseLocation: 'EH8 8DX, Leith', coveringArea: 'Electrician covering Edinburgh', rating: 4.9, reviewCount: 145, totalReviews: 3280, description: 'Professional electrical services for homes and businesses.', latestReview: { title: 'Professional Service', text: '"Excellent work, reliable"', reviewer: 'Callum', date: '5th Nov 2025' }, memberSince: 'Mar 2021', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=edinelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop' },
      { id: 2, name: "Edinburgh Plumbing & Heating", category: 'Plumber', baseLocation: 'EH3 6PN, New Town', coveringArea: 'Plumber covering Edinburgh', rating: 4.8, reviewCount: 133, totalReviews: 2980, description: 'Qualified plumbers and heating engineers.', latestReview: { title: 'Great Work', text: '"Professional and punctual"', reviewer: 'Fiona', date: '4th Nov 2025' }, memberSince: 'Jun 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=edinplumb', profileImage: 'https://images.unsplash.com/photo-1585952868455-b8aad8d4aecc?w=200&h=200&fit=crop' },
      { id: 3, name: "Scottish Builders Edinburgh", category: 'Builder', baseLocation: 'EH4 1AA, Murrayfield', coveringArea: 'Builder covering Edinburgh', rating: 4.7, reviewCount: 168, totalReviews: 3580, description: 'Quality building and renovation services.', latestReview: { title: 'Excellent Builders', text: '"Professional team"', reviewer: 'Douglas', date: '3rd Nov 2025' }, memberSince: 'Dec 2019', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=scotbuilders', profileImage: 'https://images.unsplash.com/photo-1503387762519-52582b742d5d?w=200&h=200&fit=crop' },
      { id: 4, name: "Edinburgh Carpentry", category: 'Carpenter', baseLocation: 'EH6 5BX, Portobello', coveringArea: 'Carpenter covering Edinburgh', rating: 4.8, reviewCount: 141, totalReviews: 3150, description: 'Expert carpentry and bespoke joinery.', latestReview: { title: 'Beautiful Craftsmanship', text: '"Highly skilled"', reviewer: 'Margaret', date: '2nd Nov 2025' }, memberSince: 'Jan 2021', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=edincarp', profileImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&h=200&fit=crop' }
    ]
  },

  bristol: {
    id: 'bristol',
    slug: 'bristol',
    name: 'Bristol',
    region: 'England',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=400&fit=crop',
    description: 'Find trusted local tradespeople in Bristol',
    banner: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=400&fit=crop',
    heroTitle: 'Find Tradespeople in Bristol',
    heroDescription: 'Get quotes from vetted local professionals for any project',
    postcode: 'BS1 5TR',
    stats: {
      tradespeople: '1,432',
      reviews: '10,123',
      rating: 4.7
    },
    popularTrades: [
      'Builders',
      'Plumbers',
      'Electricians',
      'Gardeners',
      'Painters & Decorators',
      'Carpenters'
    ],
    nearbyAreas: [
      'Clifton', 'Southville', 'Bedminster', 'Stokes Croft',
      'Hotwells', 'Kingsdown', 'St Werburghs', 'Ashton',
      'Yate', 'Winterbourne', 'Filton', 'Keynsham'
    ],
    testimonials: [
      {
        name: 'Charlotte Lewis',
        location: 'Clifton',
        text: 'Excellent platform. Found skilled professionals easily.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlotte'
      },
      {
        name: 'Mark Stevens',
        location: 'Southville',
        text: 'Great quotes and professional service. Very happy!',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mark'
      },
      {
        name: 'Jessica Turner',
        location: 'Bedminster',
        text: 'Outstanding experience from start to finish.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica'
      }
    ],
    averageCosts: {
      builder: '£230-£330/day',
      plumber: '£38-£58/hour',
      electrician: '£42-£62/hour',
      carpenter: '£33-£48/hour'
    },
    recentJobs: [
      { title: 'Victorian House Renovation', location: 'Clifton', budget: '£12,000-£18,000', date: '1 day ago' },
      { title: 'Garden Makeover', location: 'Southville', budget: '£2,500-£5,000', date: '3 days ago' },
      { title: 'Electrical Work', location: 'Bedminster', budget: '£1,500-£3,000', date: '5 days ago' }
    ],
    tradespeople: [
      { id: 1, name: "Bristol Electrical Services", category: 'Electrician', baseLocation: 'BS8 1QQ, Clifton', coveringArea: 'Electrician covering Bristol', rating: 4.9, reviewCount: 146, totalReviews: 3300, description: 'Professional electrical installation and maintenance.', latestReview: { title: 'Excellent Work', text: '"Fast and professional"', reviewer: 'Timothy', date: '5th Nov 2025' }, memberSince: 'Feb 2021', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bristolelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop' },
      { id: 2, name: "Bristol Plumbing Pro", category: 'Plumber', baseLocation: 'BS3 4AW, Bedminster', coveringArea: 'Plumber covering Bristol', rating: 4.8, reviewCount: 134, totalReviews: 3020, description: 'Expert plumbing and heating services.', latestReview: { title: 'Great Service', text: '"Professional and reliable"', reviewer: 'Catherine', date: '4th Nov 2025' }, memberSince: 'May 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bristolplumb', profileImage: 'https://images.unsplash.com/photo-1585952868455-b8aad8d4aecc?w=200&h=200&fit=crop' },
      { id: 3, name: "Southwest Builders", category: 'Builder', baseLocation: 'BS2 8UL, Stokes Croft', coveringArea: 'Builder covering Bristol', rating: 4.7, reviewCount: 169, totalReviews: 3600, description: 'Quality building and renovation projects.', latestReview: { title: 'Excellent Builders', text: '"Professional team"', reviewer: 'Vincent', date: '3rd Nov 2025' }, memberSince: 'Oct 2019', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=swbuilders', profileImage: 'https://images.unsplash.com/photo-1503387762519-52582b742d5d?w=200&h=200&fit=crop' },
      { id: 4, name: "Bristol Carpentry", category: 'Carpenter', baseLocation: 'BS5 9AF, Southville', coveringArea: 'Carpenter covering Bristol', rating: 4.8, reviewCount: 142, totalReviews: 3180, description: 'Expert bespoke carpentry and joinery.', latestReview: { title: 'Superb Craftsmanship', text: '"Highly skilled"', reviewer: 'Wendy', date: '2nd Nov 2025' }, memberSince: 'Dec 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bristolcarp', profileImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&h=200&fit=crop' }
    ]
  },

  cardiff: {
    id: 'cardiff',
    slug: 'cardiff',
    name: 'Cardiff',
    region: 'Wales',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
    description: 'Find trusted local tradespeople in Cardiff',
    banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
    heroTitle: 'Find Tradespeople in Cardiff',
    heroDescription: 'Get quotes from vetted local professionals for any project',
    postcode: 'CF10 1AA',
    stats: {
      tradespeople: '1,123',
      reviews: '8,234',
      rating: 4.6
    },
    popularTrades: [
      'Builders',
      'Plumbers',
      'Electricians',
      'Decorators',
      'Gardeners',
      'Roofers'
    ],
    nearbyAreas: [
      'Canton', 'Cathays', 'Cyncoed', 'Llanishen',
      'Radyr', 'Pentrebane', 'Pontcanna', 'Grangetown',
      'Roath', 'Splott', 'Tremorfa', 'Whitchurch'
    ],
    testimonials: [
      {
        name: 'Gareth Williams',
        location: 'Cathays',
        text: 'Great service! Found perfect tradespeople for my needs.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gareth'
      },
      {
        name: 'Siân Jones',
        location: 'Canton',
        text: 'Very professional and helpful. Highly recommend!',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sian'
      },
      {
        name: 'Nigel Evans',
        location: 'Roath',
        text: 'Excellent experience. Will definitely use again.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nigel'
      }
    ],
    averageCosts: {
      builder: '£210-£310/day',
      plumber: '£35-£55/hour',
      electrician: '£40-£60/hour',
      carpenter: '£30-£45/hour'
    },
    recentJobs: [
      { title: 'House Extension', location: 'Cathays', budget: '£7,000-£11,000', date: '2 days ago' },
      { title: 'Bathroom Renovation', location: 'Canton', budget: '£4,000-£7,000', date: '3 days ago' },
      { title: 'Garden Design', location: 'Roath', budget: '£1,500-£3,500', date: '6 days ago' }
    ],
    tradespeople: [
      { id: 1, name: "Cardiff Electrical", category: 'Electrician', baseLocation: 'CF10 3EX, City Centre', coveringArea: 'Electrician covering Cardiff', rating: 4.9, reviewCount: 144, totalReviews: 3260, description: 'Professional electrical services.', latestReview: { title: 'Excellent Work', text: '"Fast and professional"', reviewer: 'Bryn', date: '5th Nov 2025' }, memberSince: 'Jan 2021', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cardiffelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop' },
      { id: 2, name: "Cardiff Plumbing", category: 'Plumber', baseLocation: 'CF11 9AQ, Canton', coveringArea: 'Plumber covering Cardiff', rating: 4.8, reviewCount: 132, totalReviews: 2980, description: 'Expert plumbing and gas engineers.', latestReview: { title: 'Great Service', text: '"Professional"', reviewer: 'Dafydd', date: '4th Nov 2025' }, memberSince: 'Apr 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cardiffplumb', profileImage: 'https://images.unsplash.com/photo-1585952868455-b8aad8d4aecc?w=200&h=200&fit=crop' },
      { id: 3, name: "Wales Builders", category: 'Builder', baseLocation: 'CF5 3LS, Llanishen', coveringArea: 'Builder covering Cardiff', rating: 4.7, reviewCount: 167, totalReviews: 3560, description: 'Quality building and renovation.', latestReview: { title: 'Excellent Builders', text: '"Professional"', reviewer: 'Eluned', date: '3rd Nov 2025' }, memberSince: 'Sep 2019', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=walesbuilders', profileImage: 'https://images.unsplash.com/photo-1503387762519-52582b742d5d?w=200&h=200&fit=crop' },
      { id: 4, name: "Cardiff Carpentry", category: 'Carpenter', baseLocation: 'CF3 2RQ, Radyr', coveringArea: 'Carpenter covering Cardiff', rating: 4.8, reviewCount: 140, totalReviews: 3140, description: 'Expert bespoke carpentry.', latestReview: { title: 'Superb Craftsmanship', text: '"Highly skilled"', reviewer: 'Gareth', date: '2nd Nov 2025' }, memberSince: 'Nov 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cardiffcarp', profileImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&h=200&fit=crop' }
    ]
  },

  glasgow: {
    id: 'glasgow',
    slug: 'glasgow',
    name: 'Glasgow',
    region: 'Scotland',
    image: 'https://images.unsplash.com/photo-1512453575885-12a8aee9f51e?w=1200&h=400&fit=crop',
    description: 'Find trusted local tradespeople in Glasgow',
    banner: 'https://images.unsplash.com/photo-1512453575885-12a8aee9f51e?w=1200&h=400&fit=crop',
    heroTitle: 'Find Tradespeople in Glasgow',
    heroDescription: 'Get quotes from vetted local professionals for any project',
    postcode: 'G1 1AA',
    stats: {
      tradespeople: '1,345',
      reviews: '9,876',
      rating: 4.7
    },
    popularTrades: [
      'Builders',
      'Plumbers',
      'Electricians',
      'Carpenters',
      'Decorators',
      'Gardeners'
    ],
    nearbyAreas: [
      'West End', 'Southside', 'East End', 'Merchant City',
      'Shawlands', 'Bearsden', 'Giffnock', 'Newton Mearns',
      'Maryhill', 'Partick', 'Kinning Park', 'Govan'
    ],
    testimonials: [
      {
        name: 'Stuart Campbell',
        location: 'West End',
        text: 'Fantastic service! Highly professional tradespeople.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Stuart'
      },
      {
        name: 'Helen Murphy',
        location: 'Southside',
        text: 'Great platform. Found excellent builders quickly.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Helen'
      },
      {
        name: 'Duncan MacFarlane',
        location: 'Merchant City',
        text: 'Professional and reliable. Very satisfied!',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Duncan'
      }
    ],
    averageCosts: {
      builder: '£230-£330/day',
      plumber: '£40-£60/hour',
      electrician: '£43-£63/hour',
      carpenter: '£34-£49/hour'
    },
    recentJobs: [
      { title: 'Tenement Renovation', location: 'West End', budget: '£8,000-£12,000', date: '1 day ago' },
      { title: 'Plumbing Work', location: 'Southside', budget: '£1,200-£2,500', date: '2 days ago' },
      { title: 'Electrical Installation', location: 'Merchant City', budget: '£2,000-£4,000', date: '4 days ago' }
    ],
    tradespeople: [
      { id: 1, name: "Glasgow Electrical", category: 'Electrician', baseLocation: 'G2 1HN, City Centre', coveringArea: 'Electrician covering Glasgow', rating: 4.9, reviewCount: 143, totalReviews: 3240, description: 'Professional electrical services.', latestReview: { title: 'Excellent Work', text: '"Fast and professional"', reviewer: 'Liam', date: '5th Nov 2025' }, memberSince: 'Dec 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=glasgowelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop' },
      { id: 2, name: "Glasgow Plumbing", category: 'Plumber', baseLocation: 'G5 8LR, Govan', coveringArea: 'Plumber covering Glasgow', rating: 4.8, reviewCount: 131, totalReviews: 2940, description: 'Expert plumbing and gas.', latestReview: { title: 'Great Service', text: '"Professional"', reviewer: 'Morag', date: '4th Nov 2025' }, memberSince: 'Mar 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=glasgowplumb', profileImage: 'https://images.unsplash.com/photo-1585952868455-b8aad8d4aecc?w=200&h=200&fit=crop' },
      { id: 3, name: "Scottish Builders Glasgow", category: 'Builder', baseLocation: 'G12 8QQ, West End', coveringArea: 'Builder covering Glasgow', rating: 4.7, reviewCount: 166, totalReviews: 3520, description: 'Quality building work.', latestReview: { title: 'Excellent Builders', text: '"Professional"', reviewer: 'Niall', date: '3rd Nov 2025' }, memberSince: 'Aug 2019', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=glasgowbuilders', profileImage: 'https://images.unsplash.com/photo-1503387762519-52582b742d5d?w=200&h=200&fit=crop' },
      { id: 4, name: "Glasgow Carpentry", category: 'Carpenter', baseLocation: 'G41 3UN, Southside', coveringArea: 'Carpenter covering Glasgow', rating: 4.8, reviewCount: 139, totalReviews: 3100, description: 'Expert bespoke carpentry.', latestReview: { title: 'Superb Craftsmanship', text: '"Highly skilled"', reviewer: 'Orla', date: '2nd Nov 2025' }, memberSince: 'Oct 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=glasgowcarp', profileImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&h=200&fit=crop' }
    ]
  },

  liverpool: {
    id: 'liverpool',
    slug: 'liverpool',
    name: 'Liverpool',
    region: 'England',
    image: 'https://images.unsplash.com/photo-1529148091759-24bc1aa33de6?w=1200&h=400&fit=crop',
    description: 'Find trusted local tradespeople in Liverpool',
    banner: 'https://images.unsplash.com/photo-1529148091759-24bc1aa33de6?w=1200&h=400&fit=crop',
    heroTitle: 'Find Tradespeople in Liverpool',
    heroDescription: 'Get quotes from vetted local professionals for any project',
    postcode: 'L1 1AA',
    stats: {
      tradespeople: '1,234',
      reviews: '8,945',
      rating: 4.6
    },
    popularTrades: [
      'Builders',
      'Plumbers',
      'Electricians',
      'Gardeners',
      'Painters & Decorators',
      'Roofers'
    ],
    nearbyAreas: [
      'Aigburth', 'Allerton', 'Mossley Hill', 'Wavertree',
      'Toxteth', 'Dingle', 'Woolton', 'Crosby',
      'Childwall', 'Kirkdale', 'Bootle', 'Walton'
    ],
    testimonials: [
      {
        name: 'Kevin Murphy',
        location: 'Aigburth',
        text: 'Excellent service and professional tradespeople!',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin'
      },
      {
        name: 'Catherine Walsh',
        location: 'Allerton',
        text: 'Great experience from booking to completion.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Catherine'
      },
      {
        name: 'Paul Thompson',
        location: 'Mossley Hill',
        text: 'Very happy with the quotes and workmanship.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Paul'
      }
    ],
    averageCosts: {
      builder: '£220-£320/day',
      plumber: '£38-£58/hour',
      electrician: '£42-£62/hour',
      carpenter: '£32-£47/hour'
    },
    recentJobs: [
      { title: 'Period Property Restoration', location: 'Wavertree', budget: '£9,000-£14,000', date: '1 day ago' },
      { title: 'Kitchen Extension', location: 'Aigburth', budget: '£5,000-£8,000', date: '3 days ago' },
      { title: 'Decorating Service', location: 'Allerton', budget: '£800-£1,500', date: '5 days ago' }
    ],
    tradespeople: [
      { id: 1, name: "Liverpool Electrical Services", category: 'Electrician', baseLocation: 'L1 8DZ, City Centre', coveringArea: 'Electrician covering Liverpool', rating: 4.9, reviewCount: 141, totalReviews: 3200, description: 'Professional electrical services.', latestReview: { title: 'Excellent Work', text: '"Fast and professional"', reviewer: 'Trevor', date: '5th Nov 2025' }, memberSince: 'Nov 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=liverpoolelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop' },
      { id: 2, name: "Liverpool Plumbing", category: 'Plumber', baseLocation: 'L8 2QP, Toxteth', coveringArea: 'Plumber covering Liverpool', rating: 4.8, reviewCount: 130, totalReviews: 2900, description: 'Expert plumbing and gas.', latestReview: { title: 'Great Service', text: '"Professional"', reviewer: 'Ulrike', date: '4th Nov 2025' }, memberSince: 'Feb 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=liverpoolplumb', profileImage: 'https://images.unsplash.com/photo-1585952868455-b8aad8d4aecc?w=200&h=200&fit=crop' },
      { id: 3, name: "Northwest Builders", category: 'Builder', baseLocation: 'L18 1DG, Aigburth', coveringArea: 'Builder covering Liverpool', rating: 4.7, reviewCount: 165, totalReviews: 3480, description: 'Quality building work.', latestReview: { title: 'Excellent Builders', text: '"Professional"', reviewer: 'Vincent', date: '3rd Nov 2025' }, memberSince: 'Jul 2019', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nwbuilders', profileImage: 'https://images.unsplash.com/photo-1503387762519-52582b742d5d?w=200&h=200&fit=crop' },
      { id: 4, name: "Liverpool Carpentry", category: 'Carpenter', baseLocation: 'L17 9LW, Wavertree', coveringArea: 'Carpenter covering Liverpool', rating: 4.8, reviewCount: 138, totalReviews: 3060, description: 'Expert bespoke carpentry.', latestReview: { title: 'Superb Craftsmanship', text: '"Highly skilled"', reviewer: 'Wendy', date: '2nd Nov 2025' }, memberSince: 'Sep 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=liverpoolcarp', profileImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&h=200&fit=crop' }
    ]
  },

  sheffield: { id: 'sheffield', slug: 'sheffield', name: 'Sheffield', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Sheffield', heroDescription: 'Get quotes from vetted local professionals', postcode: 'S1 1AA', stats: { tradespeople: '980', reviews: '7234', rating: 4.6 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Carpenters', 'Decorators', 'Gardeners'], nearbyAreas: ['City Centre', 'Walkley', 'Crookes', 'Darnall', 'Attercliffe', 'Heeley'], testimonials: [{name: 'John Smith', location: 'City Centre', text: 'Great service!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'}], averageCosts: { builder: '£200-£300/day', plumber: '£35-£55/hour', electrician: '£40-£60/hour', carpenter: '£30-£45/hour' }, recentJobs: [{title: 'Kitchen Renovation', location: 'City Centre', budget: '£5,000-£8,000', date: '2 days ago'}], tradespeople: [{id: 1, name: "Sheffield Electrical", category: 'Electrician', baseLocation: 'S1 1AA, City Centre', coveringArea: 'Electrician covering Sheffield', rating: 4.9, reviewCount: 125, totalReviews: 2850, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Fast and professional"', reviewer: 'Paul', date: '5th Nov 2025'}, memberSince: 'Mar 2021', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sheffelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  brighton: { id: 'brighton', slug: 'brighton', name: 'Brighton', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Brighton', heroDescription: 'Get quotes from vetted local professionals', postcode: 'BN1 1AA', stats: { tradespeople: '745', reviews: '5432', rating: 4.7 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Decorators', 'Gardeners', 'Roofers'], nearbyAreas: ['City Centre', 'Hove', 'Portslade', 'Peacehaven', 'Saltdean'], testimonials: [{name: 'Emma Brown', location: 'Hove', text: 'Excellent service!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'}], averageCosts: { builder: '£240-£340/day', plumber: '£40-£60/hour', electrician: '£45-£65/hour', carpenter: '£35-£50/hour' }, recentJobs: [{title: 'Bathroom Refit', location: 'Hove', budget: '£4,000-£6,000', date: '1 day ago'}], tradespeople: [{id: 1, name: "Brighton Electrical", category: 'Electrician', baseLocation: 'BN1 1AA, City Centre', coveringArea: 'Electrician covering Brighton', rating: 4.9, reviewCount: 118, totalReviews: 2650, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Fast and professional"', reviewer: 'Simon', date: '5th Nov 2025'}, memberSince: 'Feb 2021', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=brightonelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  portsmouth: { id: 'portsmouth', slug: 'portsmouth', name: 'Portsmouth', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Portsmouth', heroDescription: 'Get quotes from vetted local professionals', postcode: 'PO1 1AA', stats: { tradespeople: '650', reviews: '4856', rating: 4.6 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Gardeners', 'Decorators', 'Roofers'], nearbyAreas: ['City Centre', 'Southsea', 'Cosham', 'Tipner'], testimonials: [{name: 'Mark Wilson', location: 'Southsea', text: 'Great work!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mark'}], averageCosts: { builder: '£220-£320/day', plumber: '£38-£58/hour', electrician: '£42-£62/hour', carpenter: '£32-£47/hour' }, recentJobs: [{title: 'Garden Landscaping', location: 'Southsea', budget: '£2,000-£4,000', date: '3 days ago'}], tradespeople: [{id: 1, name: "Portsmouth Electrical", category: 'Electrician', baseLocation: 'PO1 1AA, City Centre', coveringArea: 'Electrician covering Portsmouth', rating: 4.8, reviewCount: 112, totalReviews: 2480, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Professional"', reviewer: 'David', date: '5th Nov 2025'}, memberSince: 'Jan 2021', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=portsmouthelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  oxford: { id: 'oxford', slug: 'oxford', name: 'Oxford', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Oxford', heroDescription: 'Get quotes from vetted local professionals', postcode: 'OX1 1AA', stats: { tradespeople: '620', reviews: '4200', rating: 4.7 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Carpenters', 'Decorators'], nearbyAreas: ['City Centre', 'Headington', 'Cowley', 'Summertown'], testimonials: [{name: 'Rachel Green', location: 'Headington', text: 'Professional service!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel'}], averageCosts: { builder: '£230-£330/day', plumber: '£38-£58/hour', electrician: '£42-£62/hour', carpenter: '£33-£48/hour' }, recentJobs: [{title: 'Kitchen Extension', location: 'Headington', budget: '£6,000-£9,000', date: '2 days ago'}], tradespeople: [{id: 1, name: "Oxford Electrical", category: 'Electrician', baseLocation: 'OX1 1AA, City Centre', coveringArea: 'Electrician covering Oxford', rating: 4.9, reviewCount: 108, totalReviews: 2350, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Professional"', reviewer: 'Thomas', date: '5th Nov 2025'}, memberSince: 'Dec 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=oxfordelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  lancaster: { id: 'lancaster', slug: 'lancaster', name: 'Lancaster', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Lancaster', heroDescription: 'Get quotes from vetted local professionals', postcode: 'LA1 1AA', stats: { tradespeople: '450', reviews: '3100', rating: 4.6 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Gardeners', 'Decorators'], nearbyAreas: ['City Centre', 'Scotforth', 'Ellel'], testimonials: [{name: 'Janet Miller', location: 'Scotforth', text: 'Great service!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Janet'}], averageCosts: { builder: '£210-£310/day', plumber: '£35-£55/hour', electrician: '£40-£60/hour', carpenter: '£30-£45/hour' }, recentJobs: [{title: 'Home Renovation', location: 'Scotforth', budget: '£4,000-£7,000', date: '4 days ago'}], tradespeople: [{id: 1, name: "Lancaster Electrical", category: 'Electrician', baseLocation: 'LA1 1AA, City Centre', coveringArea: 'Electrician covering Lancaster', rating: 4.8, reviewCount: 95, totalReviews: 2100, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Professional"', reviewer: 'Kevin', date: '5th Nov 2025'}, memberSince: 'Nov 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lancasterelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  stoke: { id: 'stoke', slug: 'stoke', name: 'Stoke on Trent', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Stoke on Trent', heroDescription: 'Get quotes from vetted local professionals', postcode: 'ST1 1AA', stats: { tradespeople: '580', reviews: '4050', rating: 4.5 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Decorators', 'Roofers'], nearbyAreas: ['City Centre', 'Cobridge', 'Etruria', 'Shelton'], testimonials: [{name: 'Linda Fox', location: 'Cobridge', text: 'Professional work!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linda'}], averageCosts: { builder: '£200-£300/day', plumber: '£35-£55/hour', electrician: '£40-£60/hour', carpenter: '£30-£45/hour' }, recentJobs: [{title: 'Electrical Upgrade', location: 'Cobridge', budget: '£2,000-£4,000', date: '1 day ago'}], tradespeople: [{id: 1, name: "Stoke Electrical", category: 'Electrician', baseLocation: 'ST1 1AA, City Centre', coveringArea: 'Electrician covering Stoke on Trent', rating: 4.8, reviewCount: 102, totalReviews: 2250, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Professional"', reviewer: 'Michael', date: '5th Nov 2025'}, memberSince: 'Oct 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=stokeelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  york: { id: 'york', slug: 'york', name: 'York', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in York', heroDescription: 'Get quotes from vetted local professionals', postcode: 'YO1 1AA', stats: { tradespeople: '520', reviews: '3600', rating: 4.7 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Carpenters', 'Gardeners'], nearbyAreas: ['City Centre', 'Clifton', 'Acomb'], testimonials: [{name: 'Nicholas Brown', location: 'Clifton', text: 'Great service!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nicholas'}], averageCosts: { builder: '£220-£320/day', plumber: '£38-£58/hour', electrician: '£42-£62/hour', carpenter: '£32-£47/hour' }, recentJobs: [{title: 'Garden Design', location: 'Clifton', budget: '£1,500-£3,500', date: '5 days ago'}], tradespeople: [{id: 1, name: "York Electrical", category: 'Electrician', baseLocation: 'YO1 1AA, City Centre', coveringArea: 'Electrician covering York', rating: 4.9, reviewCount: 98, totalReviews: 2150, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Professional"', reviewer: 'Oliver', date: '5th Nov 2025'}, memberSince: 'Sep 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=yorkelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  coventry: { id: 'coventry', slug: 'coventry', name: 'Coventry', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Coventry', heroDescription: 'Get quotes from vetted local professionals', postcode: 'CV1 1AA', stats: { tradespeople: '710', reviews: '5100', rating: 4.6 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Decorators', 'Gardeners'], nearbyAreas: ['City Centre', 'Foleshill', 'Holbrooks', 'Stoke'], testimonials: [{name: 'Patricia Taylor', location: 'Foleshill', text: 'Professional service!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Patricia'}], averageCosts: { builder: '£210-£310/day', plumber: '£35-£55/hour', electrician: '£40-£60/hour', carpenter: '£30-£45/hour' }, recentJobs: [{title: 'Plumbing Work', location: 'Foleshill', budget: '£1,500-£3,000', date: '2 days ago'}], tradespeople: [{id: 1, name: "Coventry Electrical", category: 'Electrician', baseLocation: 'CV1 1AA, City Centre', coveringArea: 'Electrician covering Coventry', rating: 4.8, reviewCount: 104, totalReviews: 2300, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Professional"', reviewer: 'Paul', date: '5th Nov 2025'}, memberSince: 'Aug 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=coventryelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  derby: { id: 'derby', slug: 'derby', name: 'Derby', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Derby', heroDescription: 'Get quotes from vetted local professionals', postcode: 'DE1 1AA', stats: { tradespeople: '580', reviews: '4000', rating: 4.5 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Carpenters', 'Decorators'], nearbyAreas: ['City Centre', 'Alvaston', 'Normanton'], testimonials: [{name: 'Quentin Moore', location: 'Alvaston', text: 'Great work!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Quentin'}], averageCosts: { builder: '£200-£300/day', plumber: '£35-£55/hour', electrician: '£40-£60/hour', carpenter: '£30-£45/hour' }, recentJobs: [{title: 'Bathroom Renovation', location: 'Alvaston', budget: '£3,000-£5,000', date: '3 days ago'}], tradespeople: [{id: 1, name: "Derby Electrical", category: 'Electrician', baseLocation: 'DE1 1AA, City Centre', coveringArea: 'Electrician covering Derby', rating: 4.8, reviewCount: 96, totalReviews: 2100, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Professional"', reviewer: 'Richard', date: '5th Nov 2025'}, memberSince: 'Jul 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=derbyelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  gloucester: { id: 'gloucester', slug: 'gloucester', name: 'Gloucester', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Gloucester', heroDescription: 'Get quotes from vetted local professionals', postcode: 'GL1 1AA', stats: { tradespeople: '480', reviews: '3400', rating: 4.6 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Gardeners', 'Decorators'], nearbyAreas: ['City Centre', 'Westgate Street', 'Tuffley'], testimonials: [{name: 'Sandra Lee', location: 'Westgate Street', text: 'Professional service!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sandra'}], averageCosts: { builder: '£210-£310/day', plumber: '£35-£55/hour', electrician: '£40-£60/hour', carpenter: '£30-£45/hour' }, recentJobs: [{title: 'Kitchen Extension', location: 'Westgate Street', budget: '£5,000-£8,000', date: '1 day ago'}], tradespeople: [{id: 1, name: "Gloucester Electrical", category: 'Electrician', baseLocation: 'GL1 1AA, City Centre', coveringArea: 'Electrician covering Gloucester', rating: 4.8, reviewCount: 88, totalReviews: 1950, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Professional"', reviewer: 'Stephen', date: '5th Nov 2025'}, memberSince: 'Jun 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=gloucesterelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  leeds: { id: 'leeds', slug: 'leeds', name: 'Leeds', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Leeds', heroDescription: 'Get quotes from vetted local professionals', postcode: 'LS1 1AA', stats: { tradespeople: '1200', reviews: '8500', rating: 4.7 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Carpenters', 'Decorators'], nearbyAreas: ['City Centre', 'Beeston', 'Headingley', 'Wetherby'], testimonials: [{name: 'Thomas Wright', location: 'Beeston', text: 'Excellent service!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas'}], averageCosts: { builder: '£230-£330/day', plumber: '£38-£58/hour', electrician: '£42-£62/hour', carpenter: '£33-£48/hour' }, recentJobs: [{title: 'House Extension', location: 'Beeston', budget: '£8,000-£12,000', date: '2 days ago'}], tradespeople: [{id: 1, name: "Leeds Electrical", category: 'Electrician', baseLocation: 'LS1 1AA, City Centre', coveringArea: 'Electrician covering Leeds', rating: 4.9, reviewCount: 135, totalReviews: 3000, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Professional"', reviewer: 'Uma', date: '5th Nov 2025'}, memberSince: 'May 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=leedselectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  nottingham: { id: 'nottingham', slug: 'nottingham', name: 'Nottingham', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Nottingham', heroDescription: 'Get quotes from vetted local professionals', postcode: 'NG1 1AA', stats: { tradespeople: '950', reviews: '6800', rating: 4.6 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Decorators', 'Gardeners'], nearbyAreas: ['City Centre', 'Basford', 'Bulwell'], testimonials: [{name: 'Valerie Adams', location: 'Basford', text: 'Great service!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Valerie'}], averageCosts: { builder: '£220-£320/day', plumber: '£38-£58/hour', electrician: '£42-£62/hour', carpenter: '£32-£47/hour' }, recentJobs: [{title: 'Plumbing Installation', location: 'Basford', budget: '£2,000-£4,000', date: '4 days ago'}], tradespeople: [{id: 1, name: "Nottingham Electrical", category: 'Electrician', baseLocation: 'NG1 1AA, City Centre', coveringArea: 'Electrician covering Nottingham', rating: 4.8, reviewCount: 115, totalReviews: 2550, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Professional"', reviewer: 'Victor', date: '5th Nov 2025'}, memberSince: 'Apr 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nottinghamelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  newcastle: { id: 'newcastle', slug: 'newcastle', name: 'Newcastle upon Tyne', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Newcastle upon Tyne', heroDescription: 'Get quotes from vetted local professionals', postcode: 'NE1 1AA', stats: { tradespeople: '870', reviews: '6200', rating: 4.6 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Carpenters', 'Decorators'], nearbyAreas: ['City Centre', 'Jesmond', 'Gateshead', 'Swalwell'], testimonials: [{name: 'William Davis', location: 'Jesmond', text: 'Professional work!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=William'}], averageCosts: { builder: '£220-£320/day', plumber: '£38-£58/hour', electrician: '£42-£62/hour', carpenter: '£32-£47/hour' }, recentJobs: [{title: 'Roof Repair', location: 'Jesmond', budget: '£2,500-£4,500', date: '3 days ago'}], tradespeople: [{id: 1, name: "Newcastle Electrical", category: 'Electrician', baseLocation: 'NE1 1AA, City Centre', coveringArea: 'Electrician covering Newcastle', rating: 4.8, reviewCount: 110, totalReviews: 2400, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Professional"', reviewer: 'Xavier', date: '5th Nov 2025'}, memberSince: 'Mar 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=newcastleelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  southampton: { id: 'southampton', slug: 'southampton', name: 'Southampton', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Southampton', heroDescription: 'Get quotes from vetted local professionals', postcode: 'SO14 1AA', stats: { tradespeople: '720', reviews: '5300', rating: 4.6 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Gardeners', 'Decorators'], nearbyAreas: ['City Centre', 'Bitterne', 'Millbrook'], testimonials: [{name: 'Yolanda Harris', location: 'Bitterne', text: 'Great service!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yolanda'}], averageCosts: { builder: '£220-£320/day', plumber: '£38-£58/hour', electrician: '£42-£62/hour', carpenter: '£32-£47/hour' }, recentJobs: [{title: 'Garden Design', location: 'Bitterne', budget: '£1,500-£3,500', date: '5 days ago'}], tradespeople: [{id: 1, name: "Southampton Electrical", category: 'Electrician', baseLocation: 'SO14 1AA, City Centre', coveringArea: 'Electrician covering Southampton', rating: 4.8, reviewCount: 106, totalReviews: 2300, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Professional"', reviewer: 'Zoe', date: '5th Nov 2025'}, memberSince: 'Feb 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=southamptonelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  plymouth: { id: 'plymouth', slug: 'plymouth', name: 'Plymouth', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Plymouth', heroDescription: 'Get quotes from vetted local professionals', postcode: 'PL1 1AA', stats: { tradespeople: '680', reviews: '4900', rating: 4.6 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Decorators', 'Roofers'], nearbyAreas: ['City Centre', 'Mutley', 'Plympton'], testimonials: [{name: 'Adrian Clarke', location: 'Mutley', text: 'Professional service!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Adrian'}], averageCosts: { builder: '£220-£320/day', plumber: '£38-£58/hour', electrician: '£42-£62/hour', carpenter: '£32-£47/hour' }, recentJobs: [{title: 'Kitchen Renovation', location: 'Mutley', budget: '£5,000-£8,000', date: '2 days ago'}], tradespeople: [{id: 1, name: "Plymouth Electrical", category: 'Electrician', baseLocation: 'PL1 1AA, City Centre', coveringArea: 'Electrician covering Plymouth', rating: 4.8, reviewCount: 101, totalReviews: 2200, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Professional"', reviewer: 'Amy', date: '5th Nov 2025'}, memberSince: 'Jan 2020', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=plymouthelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  reading: { id: 'reading', slug: 'reading', name: 'Reading', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Reading', heroDescription: 'Get quotes from vetted local professionals', postcode: 'RG1 1AA', stats: { tradespeople: '620', reviews: '4400', rating: 4.6 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Carpenters', 'Decorators'], nearbyAreas: ['City Centre', 'Abbey', 'Katesgrove'], testimonials: [{name: 'Betty Long', location: 'Abbey', text: 'Great work!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Betty'}], averageCosts: { builder: '£230-£330/day', plumber: '£38-£58/hour', electrician: '£42-£62/hour', carpenter: '£33-£48/hour' }, recentJobs: [{title: 'Electrical Upgrade', location: 'Abbey', budget: '£2,000-£4,000', date: '4 days ago'}], tradespeople: [{id: 1, name: "Reading Electrical", category: 'Electrician', baseLocation: 'RG1 1AA, City Centre', coveringArea: 'Electrician covering Reading', rating: 4.8, reviewCount: 93, totalReviews: 2050, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Professional"', reviewer: 'Chris', date: '5th Nov 2025'}, memberSince: 'Dec 2019', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=readingelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  wolverhampton: { id: 'wolverhampton', slug: 'wolverhampton', name: 'Wolverhampton', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Wolverhampton', heroDescription: 'Get quotes from vetted local professionals', postcode: 'WV1 1AA', stats: { tradespeople: '650', reviews: '4700', rating: 4.5 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Decorators', 'Gardeners'], nearbyAreas: ['City Centre', 'Penn', 'Wolverley'], testimonials: [{name: 'Charlotte Elliott', location: 'Penn', text: 'Professional service!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlotte'}], averageCosts: { builder: '£210-£310/day', plumber: '£35-£55/hour', electrician: '£40-£60/hour', carpenter: '£30-£45/hour' }, recentJobs: [{title: 'Bathroom Refit', location: 'Penn', budget: '£3,000-£5,000', date: '1 day ago'}], tradespeople: [{id: 1, name: "Wolverhampton Electrical", category: 'Electrician', baseLocation: 'WV1 1AA, City Centre', coveringArea: 'Electrician covering Wolverhampton', rating: 4.8, reviewCount: 99, totalReviews: 2150, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Professional"', reviewer: 'David', date: '5th Nov 2025'}, memberSince: 'Nov 2019', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wolverhamptonelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  },

  exeter: { id: 'exeter', slug: 'exeter', name: 'Exeter', region: 'England', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop', heroTitle: 'Find Tradespeople in Exeter', heroDescription: 'Get quotes from vetted local professionals', postcode: 'EX1 1AA', stats: { tradespeople: '540', reviews: '3800', rating: 4.6 }, popularTrades: ['Builders', 'Plumbers', 'Electricians', 'Gardeners', 'Decorators'], nearbyAreas: ['City Centre', 'Heavitree', 'Exwick'], testimonials: [{name: 'David Foster', location: 'Heavitree', text: 'Great service!', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'}], averageCosts: { builder: '£210-£310/day', plumber: '£35-£55/hour', electrician: '£40-£60/hour', carpenter: '£30-£45/hour' }, recentJobs: [{title: 'Home Extension', location: 'Heavitree', budget: '£6,000-£9,000', date: '3 days ago'}], tradespeople: [{id: 1, name: "Exeter Electrical", category: 'Electrician', baseLocation: 'EX1 1AA, City Centre', coveringArea: 'Electrician covering Exeter', rating: 4.8, reviewCount: 87, totalReviews: 1900, description: 'Professional electrical services.', latestReview: {title: 'Excellent Work', text: '"Professional"', reviewer: 'Emma', date: '5th Nov 2025'}, memberSince: 'Oct 2019', insurance: 'Public liability insurance', logo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=exeterelectro', profileImage: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=200&h=200&fit=crop'}]
  }
};

export const getLocationBySlug = (slug) => {
  return locationsData[slug];
};

export const getAllLocations = () => {
  return Object.values(locationsData);
};

export const getLocationNames = () => {
  return Object.keys(locationsData).map(key => ({
    slug: key,
    name: locationsData[key].name
  }));
};
