export type Language = 'en' | 'id';

export interface Translations {
  common: {
    all: string;
    search: string;
    filter: string;
    close: string;
    apply: string;
    remove: string;
    save: string;
    back: string;
    continue: string;
    loading: string;
    sku: string;
    sale: string;
    newDrop: string;
    trending: string;
    vaultIcon: string;
    lowStock: string;
    inStock: string;
    pairsRemaining: string;
    readyToShip: string;
    selectSize: string;
    sizeGuide: string;
    colorway: string;
    quantity: string;
    addToBag: string;
    quickSelect: string;
    quickInspect: string;
    viewDossier: string;
    exploreSneakers: string;
    trueToSize: string;
    allSneakers: string;
    viewAllHouses: string;
    currencySymbol: string;
  };
  nav: {
    newArrivals: string;
    sneakers: string;
    brands: string;
    collections: string;
    sale: string;
    wishlist: string;
    about: string;
    searchPlaceholder: string;
    bag: string;
    themeToggle: string;
    languageSelect: string;
    allSneakers?: string;
    saleArchive?: string;
  };
  announcement: {
    badge: string;
    highlight: string;
    message: string;
    action: string;
    dismiss: string;
    shipping?: string;
  };
  hero: {
    tagHero: string;
    tagGrail: string;
    tagTech: string;
    pill: string;
    title1: string;
    title2: string;
    subtitle: string;
    exploreCta: string;
    dropsCta: string;
    statVerified: string;
    statVerifiedDesc: string;
    statShipped: string;
    statShippedDesc: string;
    statSatisfaction: string;
    statSatisfactionDesc: string;
    season?: string;
    titleHighlight?: string;
    stat1Label?: string;
    stat2Label?: string;
    stat3Label?: string;
    scrollExplore?: string;
  };
  catalog: {
    badge: string;
    title: string;
    subtitle: string;
    filterTitle: string;
    clearAll: string;
    categories: string;
    brands: string;
    priceRange: string;
    under150: string;
    from150to200: string;
    above200: string;
    sizeUsMen: string;
    sortLabel: string;
    sortNewest: string;
    sortPriceAsc: string;
    sortPriceDesc: string;
    sortTrending: string;
    sortName: string;
    searchFor: string;
    showing: string;
    of: string;
    items: string;
    noResults: string;
    noResultsDesc: string;
    resetFilters: string;
    filterCatalog?: string;
    refineSelection?: string;
    resetAll?: string;
    brandHouse?: string;
    silhouetteCategory?: string;
    maxPrice?: string;
    colorTone?: string;
    inStockOnly?: string;
    onSaleOnly?: string;
    applyFilters?: string;
    filterButton?: string;
    results?: string;
    noResultsTitle?: string;
    resetCriteria?: string;
  };
  product: {
    breadcrumbHome: string;
    breadcrumbSneakers: string;
    archivalHeritage: string;
    materialSpecs: string;
    shippingProtocol: string;
    authGuarantee: string;
    similarArchives: string;
    similarTitle: string;
    sessionMemory: string;
    recentlyInspected: string;
    upper: string;
    outsole: string;
    cushioning: string;
    origin: string;
    shippingInfo1: string;
    shippingInfo2: string;
    authInfo: string;
    save: string;
    selectSize?: string;
    sizeGuide?: string;
    addToBag?: string;
    authenticated?: string;
    authenticityDesc?: string;
    specs?: string;
    authenticityGuarantee?: string;
    shippingReturns?: string;
    relatedTitle?: string;
  };
  cart: {
    title: string;
    emptyTitle: string;
    emptyDesc: string;
    freeShippingUnlocked: string;
    addForFreeShipping: string;
    forFreeExpress: string;
    promoPlaceholder: string;
    subtotal: string;
    discount: string;
    shipping: string;
    freeShipping: string;
    total: string;
    checkoutBtn: string;
    checkout?: string;
    continueBrowsing: string;
    escrowGuarantee: string;
    apply?: string;
    remove?: string;
    estimatedShipping?: string;
    exploreSneakers?: string;
  };
  checkout: {
    title: string;
    stepShipping: string;
    stepPayment: string;
    stepReview: string;
    contactInfo: string;
    fullName: string;
    email: string;
    phone: string;
    shippingAddress: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    deliveryMethod: string;
    expressAir: string;
    standardGround: string;
    free: string;
    paymentMethod: string;
    cardPayment: string;
    escrowNotice: string;
    cardNumber: string;
    cardExpiry: string;
    cardCvc: string;
    orderSummary: string;
    placeOrder: string;
    processing: string;
    successTitle: string;
    successSubtitle: string;
    orderNumber: string;
    estimatedArrival: string;
    returnHome: string;
    badge?: string;
    step1?: string;
    step2?: string;
    step3?: string;
    step4?: string;
    quickFill?: string;
    standardShipping?: string;
    expressShipping?: string;
    priorityShipping?: string;
    simulationNotice?: string;
    payAndConfirm?: string;
    orderConfirmed?: string;
    orderSubtext?: string;
    backToCatalog?: string;
  };
  footer: {
    authenticityTitle: string;
    authenticityDesc: string;
    expressTitle: string;
    expressDesc: string;
    returnsTitle: string;
    returnsDesc: string;
    secureTitle: string;
    secureDesc: string;
    colCatalog: string;
    colHouses: string;
    colEditorial: string;
    colCare: string;
    colNetwork: string;
    networkDesc: string;
    newsletterLink: string;
    trackOrder: string;
    shippingSpecs: string;
    exchangeProtocol: string;
    sizeConversion: string;
    rightsReserved: string;
    demoDisclaimer: string;
    deployedWith: string;
    authTitle?: string;
    authSub?: string;
    deliveryTitle?: string;
    deliverySub?: string;
    returnsSub?: string;
    vaultTitle?: string;
    vaultSub?: string;
    catalogCol?: string;
    brandsCol?: string;
    editorialCol?: string;
    careCol?: string;
    rights?: string;
  };
  homeBrands: {
    curatedHouses: string;
    selectByBrand: string;
    subtext: string;
    house: string;
    exploreDrops: string;
  };
  trendingSection: {
    badge: string;
    title: string;
    allTrending: string;
    viewAllPairs: string;
  };
  editorial: {
    tag: string;
    title1: string;
    title2: string;
    desc: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    cta: string;
    campaign: string;
  };
  newDropsSection: {
    badge: string;
    title: string;
    viewAll: string;
    dropActive: string;
    pairsRemaining: string;
    quickCop: string;
  };
  manifesto: {
    badge: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    promiseTitle: string;
    promiseDesc: string;
    curatedIn: string;
    globalEdit: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    aboutLink: string;
  };
  newsletter: {
    badge: string;
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    verifying: string;
    successTitle: string;
    successDesc: string;
    registerAnother: string;
    disclaimer: string;
    errorInvalid: string;
  };
  sizeGuideModal: {
    title: string;
    subtitle: string;
    trueToSizeTitle: string;
    trueToSizeDesc: string;
    usMen: string;
    usWomen: string;
    uk: string;
    eu: string;
    cmLength: string;
    closeBtn: string;
  };
  wishlistPage: {
    badge: string;
    title: string;
    clearBtn: string;
    emptyTitle: string;
    emptyDesc: string;
    exploreBtn: string;
    removeAria: string;
    initializing: string;
  };
  aboutPage: {
    badge: string;
    title: string;
    subtitle: string;
    statement1: string;
    statement2: string;
    p1: string;
    p2: string;
    verificationStat: string;
    verificationLabel: string;
    spacesStat: string;
    spacesLabel: string;
    studioTag: string;
    authBadge: string;
    authTitle: string;
    authSubtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    step5Title: string;
    step5Desc: string;
    step6Title: string;
    step6Desc: string;
    spacesBadge: string;
    spacesTitle: string;
    spaceTokyoFocus: string;
    spaceLondonFocus: string;
    spaceNyFocus: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    common: {
      all: 'All',
      search: 'Search',
      filter: 'Filter',
      close: 'Close',
      apply: 'Apply',
      remove: 'Remove',
      save: 'Save',
      back: 'Back',
      continue: 'Continue',
      loading: 'Loading...',
      sku: 'SKU',
      sale: 'SALE',
      newDrop: 'NEW DROP',
      trending: 'POPULAR',
      vaultIcon: 'VAULT ICON',
      lowStock: 'Low Stock',
      inStock: 'In Stock',
      pairsRemaining: 'pairs remaining',
      readyToShip: 'ready to ship',
      selectSize: 'Select Size',
      sizeGuide: 'Size Guide',
      colorway: 'Colorway',
      quantity: 'Quantity',
      addToBag: 'Add to Cart',
      quickSelect: 'Quick Select',
      quickInspect: 'Quick Inspect',
      viewDossier: 'Full Details',
      exploreSneakers: 'Explore Sneakers',
      trueToSize: 'True to Size',
      allSneakers: 'All Sneakers',
      viewAllHouses: 'View All Brands',
      currencySymbol: '$',
    },
    nav: {
      newArrivals: 'New Arrivals',
      sneakers: 'Sneakers',
      brands: 'Brands',
      collections: 'Collections',
      sale: 'SALE',
      wishlist: 'Wishlist',
      about: 'About',
      searchPlaceholder: 'Search silhouettes, brands, colorways...',
      bag: 'Cart',
      themeToggle: 'Toggle Theme',
      languageSelect: 'Language',
      allSneakers: 'All Sneakers',
      saleArchive: 'Archive Sale',
    },
    announcement: {
      badge: 'ARCHIVE RELEASE',
      highlight: 'SPRING DROP 2026',
      message: 'Exclusive Jordan 1, New Balance 9060, and ASICS Kayano now available in limited quantities.',
      action: 'EXPLORE VAULT',
      dismiss: 'Dismiss banner',
      shipping: 'FREE EXPRESS SHIPPING ON ORDERS OVER $200',
    },
    hero: {
      tagHero: 'HERO DROP',
      tagGrail: 'OG GRAIL',
      tagTech: 'Y2K TECH',
      pill: 'AUTHENTIC ARCHIVE REPOSITORY',
      title1: 'COVETED',
      title2: 'SILHOUETTES.',
      subtitle: 'Verified archival footwear, iconic retros, and modern tech runners. Authenticated by specialists, delivered securely worldwide.',
      exploreCta: 'EXPLORE VAULT',
      dropsCta: 'VIEW NEW DROPS',
      statVerified: '100% AUTHENTIC',
      statVerifiedDesc: 'Multi-stage specialist inspection',
      statShipped: '24HR EXPRESS',
      statShippedDesc: 'Double-boxed air freight dispatch',
      statSatisfaction: '99.8% TRUSTED',
      statSatisfactionDesc: 'Verified collector satisfaction rating',
      season: 'SPRING / SUMMER 2026 ARCHIVE',
      titleHighlight: 'ERA.',
      stat1Label: 'Verified Authentic',
      stat2Label: 'Curated Brands',
      stat3Label: 'Active Vault',
      scrollExplore: 'SCROLL TO EXPLORE',
    },
    catalog: {
      badge: 'CURATED ARCHIVE',
      title: 'ALL SILHOUETTES',
      subtitle: 'Explore our verified inventory spanning hardwood royalty, retro running icons, and contemporary streetwear grails.',
      filterTitle: 'Filter Archive',
      clearAll: 'Clear All',
      categories: 'Categories',
      brands: 'Brands & Lineages',
      priceRange: 'Price Range',
      under150: 'Under $150',
      from150to200: '$150 - $200',
      above200: 'Over $200',
      sizeUsMen: 'US Men Size',
      sortLabel: 'Sort by',
      sortNewest: 'Newest Arrivals',
      sortPriceAsc: 'Price: Low to High',
      sortPriceDesc: 'Price: High to Low',
      sortTrending: 'Most Popular',
      sortName: 'Alphabetical',
      searchFor: 'Search results for',
      showing: 'Showing',
      of: 'of',
      items: 'silhouettes',
      noResults: 'No Silhouettes Found',
      noResultsDesc: 'Try adjusting your search criteria, searching for another model, or resetting applied filters.',
      resetFilters: 'Reset All Filters',
      filterCatalog: 'Filter Catalog',
      refineSelection: 'Refine Selection',
      resetAll: 'Reset All',
      brandHouse: 'Brand / House',
      silhouetteCategory: 'Silhouette Category',
      maxPrice: 'Maximum Price',
      colorTone: 'Color Tone',
      inStockOnly: 'In Stock Only',
      onSaleOnly: 'On Sale Only',
      applyFilters: 'Apply Filters',
      filterButton: 'Filter',
      results: 'silhouettes',
      noResultsTitle: 'NO GRAILS FOUND',
      resetCriteria: 'RESET ALL FILTERS',
    },
    product: {
      breadcrumbHome: 'HOME',
      breadcrumbSneakers: 'SNEAKERS',
      archivalHeritage: 'HERITAGE & ARCHIVE CONTEXT',
      materialSpecs: 'Material & Construction Specs',
      shippingProtocol: 'Shipping & White-Glove Handling',
      authGuarantee: 'Multi-Stage Verification Guarantee',
      similarArchives: 'SIMILAR SILHOUETTES',
      similarTitle: 'Complete Your Rotation',
      sessionMemory: 'SESSION MEMORY',
      recentlyInspected: 'Recently Inspected Silhouettes',
      upper: 'Upper Material',
      outsole: 'Outsole & Tread',
      cushioning: 'Cushioning Technology',
      origin: 'Country of Origin',
      shippingInfo1: 'Orders dispatched in signature double-box protection within 24 hours of verification.',
      shippingInfo2: 'Complimentary expedited delivery on all orders over $200 with real-time tracking.',
      authInfo: 'Every sneaker is physically inspected for stitch density, blacklight verification, and material integrity.',
      save: 'Save to Wishlist',
      selectSize: 'Select Size (US Men)',
      sizeGuide: 'Sizing & Fit Guide',
      addToBag: 'ADD TO CART',
      authenticated: '100% AUTHENTICITY GUARANTEED',
      authenticityDesc: 'Inspected physically and authenticated by specialists before shipment.',
      specs: 'Material Specifications',
      authenticityGuarantee: 'Physical Inspection Guarantee',
      shippingReturns: 'White-Glove Shipping & Returns',
      relatedTitle: 'COMPLETE YOUR ROTATION',
    },
    cart: {
      title: 'Shopping Cart',
      emptyTitle: 'Your Cart is Empty',
      emptyDesc: 'Explore our curated archive of limited releases, iconic retros, and modern tech runners.',
      freeShippingUnlocked: 'Free Express Shipping Unlocked',
      addForFreeShipping: 'Add',
      forFreeExpress: 'more for Free Shipping',
      promoPlaceholder: 'PROMO CODE (e.g. VAULT10)',
      subtotal: 'Subtotal',
      discount: 'Discount',
      shipping: 'Estimated Shipping',
      freeShipping: 'FREE',
      total: 'Total Amount',
      checkoutBtn: 'Proceed to Checkout',
      checkout: 'Proceed to Checkout',
      continueBrowsing: 'Continue Shopping',
      escrowGuarantee: 'Authenticity & Secure Escrow Guarantee',
      apply: 'Apply',
      remove: 'Remove',
      estimatedShipping: 'Estimated Shipping',
      exploreSneakers: 'Explore Sneakers',
    },
    checkout: {
      title: 'SECURE ESCROW CHECKOUT',
      stepShipping: '1. SHIPPING',
      stepPayment: '2. PAYMENT',
      stepReview: '3. REVIEW',
      contactInfo: 'Contact Information',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone / WhatsApp Number',
      shippingAddress: 'Shipping Destination',
      address: 'Street Address',
      city: 'City / District',
      postalCode: 'Postal Code',
      country: 'Country',
      deliveryMethod: 'Shipping Speed',
      expressAir: 'Express Air Courier (1-2 business days)',
      standardGround: 'Standard Ground Delivery (3-5 business days)',
      free: 'FREE',
      paymentMethod: 'Payment Method',
      cardPayment: 'Credit / Debit Card (Simulation)',
      escrowNotice: 'Simulated Environment — No actual funds will be charged to your card.',
      cardNumber: 'Card Number',
      cardExpiry: 'MM / YY',
      cardCvc: 'CVC',
      orderSummary: 'Order Summary',
      placeOrder: 'AUTHORIZE & PLACE ORDER',
      processing: 'PROCESSING ENCRYPTION...',
      successTitle: 'TRANSACTION VERIFIED',
      successSubtitle: 'Order placed successfully. Your digital authentication certificate is being generated.',
      orderNumber: 'VAULT ORDER NUMBER',
      estimatedArrival: 'Estimated Delivery',
      returnHome: 'RETURN TO CATALOG',
      badge: 'SECURE CHECKOUT // SIMULATION',
      step1: 'Contact Info',
      step2: 'Shipping Address',
      step3: 'Shipping Speed',
      step4: 'Payment Method',
      quickFill: '1-Click Demo Fill',
      standardShipping: 'Standard White-Glove (3-5 Business Days)',
      expressShipping: 'Express Priority Courier (1-2 Business Days)',
      priorityShipping: 'Same-Day Vault Courier (Select Metro Areas)',
      simulationNotice: 'This is a functional checkout demonstration. No actual monetary transactions will be processed.',
      payAndConfirm: 'Authorize Vault Dispatch',
      orderConfirmed: 'ORDER CONFIRMED // DISPATCH SCHEDULED',
      orderSubtext: 'Your curated silhouettes have been reserved in the vault. A tracking manifest will be delivered to your inbox.',
      backToCatalog: 'Return to Catalog',
    },
    footer: {
      authenticityTitle: '100% Authenticity',
      authenticityDesc: 'Multistage inspection',
      expressTitle: 'Express Delivery',
      expressDesc: 'Free over $200',
      returnsTitle: '30-Day Returns',
      returnsDesc: 'Hassle-free guarantee',
      secureTitle: 'Secure Vault',
      secureDesc: 'Encrypted checkout',
      colCatalog: 'Catalog',
      colHouses: 'Brands',
      colEditorial: 'Editorial',
      colCare: 'Client Care',
      colNetwork: 'The Vault Network',
      networkDesc: 'Curated drops, editorial essays, and preview links broadcast directly from our Tokyo and London studios.',
      newsletterLink: 'Newsletter',
      trackOrder: 'Track Order',
      shippingSpecs: 'Shipping Specs',
      exchangeProtocol: 'Exchange Protocol',
      sizeConversion: 'Size Conversion',
      rightsReserved: 'All rights reserved. Built for sneaker enthusiasts.',
      demoDisclaimer: 'Demonstration E-Commerce Experience',
      deployedWith: 'Deployed with Vercel',
      authTitle: '100% Authenticity',
      authSub: 'Multistage physical inspection',
      deliveryTitle: 'Express Delivery',
      deliverySub: 'Free over $200',
      returnsSub: 'Hassle-free guarantee',
      vaultTitle: 'Secure Vault',
      vaultSub: 'Encrypted checkout',
      catalogCol: 'Catalog',
      brandsCol: 'Brands',
      editorialCol: 'Editorial',
      careCol: 'Client Care',
      rights: 'All rights reserved. Dedicated to sneaker enthusiasts.',
    },
    homeBrands: {
      curatedHouses: 'CURATED BRANDS',
      selectByBrand: 'Select By Brand',
      subtext: 'Official archival silhouettes curated for contemporary rotation.',
      house: 'BRAND',
      exploreDrops: 'Explore Drops',
    },
    trendingSection: {
      badge: 'HIGH ROTATION',
      title: 'Trending Sneakers',
      allTrending: 'All Trending',
      viewAllPairs: 'VIEW ALL SNEAKERS',
    },
    editorial: {
      tag: 'EDITORIAL DROP 04',
      title1: 'BUILT FOR',
      title2: 'THE STREETS.',
      desc: 'Crafted for the concrete. From low-profile terrace icons to high-cushioned Y2K tech runners, our SS26 curation explores the intersections between raw subculture and modern luxury.',
      bullet1: 'Selected premium full-grain leathers & vintage suedes',
      bullet2: 'Archival color blocking engineered for rotation versatility',
      bullet3: 'Limited allocations authenticated in-house',
      cta: 'DISCOVER THE COLLECTION',
      campaign: 'CAMPAIGN // SS26 STREET WEARAGE',
    },
    newDropsSection: {
      badge: 'FRESH FROM THE VAULT',
      title: 'New Drops & Recent Releases',
      viewAll: 'View All Recent Drops',
      dropActive: 'DROP ACTIVE',
      pairsRemaining: 'pairs remaining',
      quickCop: 'Quick Select',
    },
    manifesto: {
      badge: 'OUR MANIFESTO',
      title1: 'MORE THAN A PAIR.',
      title2: "IT'S A STATEMENT.",
      p1: 'At SOLEVAULT, we treat sneaker collecting as an architectural art form and a cultural dialect. We curate iconic silhouettes, everyday rotation essentials, and rare statement sneakers for every wardrobe philosophy.',
      p2: 'Whether you are hunting for archival 1985 Chicago high-tops, terrace-ready gum soles, or cutting-edge Japanese tech runners, each model in our vault has been hand-selected for its heritage, material integrity, and timeless street resonance.',
      promiseTitle: 'The Vault Authentication Promise',
      promiseDesc: 'Every pair undergoes UV stitching verification, boxed scent analysis, and structural inspection.',
      curatedIn: 'CURATED IN',
      globalEdit: 'GLOBAL STREET EDIT',
      pillar1Title: 'Uncompromising Curation',
      pillar1Desc: 'Zero generic fill. Only culturally significant footwear and verified classics.',
      pillar2Title: 'Fair Transparent Access',
      pillar2Desc: 'Transparent market pricing, verified stock levels, and instant order tracking.',
      aboutLink: 'Read The Full Brand Story & Concept Spaces',
    },
    newsletter: {
      badge: 'VAULT PRIORITY ACCESS',
      title: 'FIRST IN LINE.',
      subtitle: 'Get early access to new drops, exclusive edits, and members-only offers.',
      placeholder: 'ENTER YOUR EMAIL FOR EARLY ACCESS',
      button: 'JOIN DROP LIST',
      verifying: 'VERIFYING...',
      successTitle: "You're On The VIP List",
      successDesc: 'Demo confirmation: You will receive drop broadcasts before public releases.',
      registerAnother: 'Register another email →',
      disclaimer: 'Frontend demonstration. Zero spam. Unsubscribe at any time.',
      errorInvalid: 'Please enter a valid email address.',
    },
    sizeGuideModal: {
      title: 'Sizing & Fit Specification',
      subtitle: 'INTERNATIONAL CONVERSION MATRIX',
      trueToSizeTitle: 'True to Size:',
      trueToSizeDesc: 'Most Jordan, Nike, and ASICS models fit true to size. For Adidas Samba and Gazelle, wide-foot wearers often size up by 0.5.',
      usMen: 'US Men',
      usWomen: 'US Women',
      uk: 'UK',
      eu: 'EU',
      cmLength: 'CM Length',
      closeBtn: 'Close Guide',
    },
    wishlistPage: {
      badge: 'SAVED ROTATION',
      title: 'My Wishlist',
      clearBtn: 'Clear Entire Wishlist',
      emptyTitle: 'No Silhouettes Saved Yet',
      emptyDesc: 'Explore our curated archive of Nike, Jordan, Adidas, ASICS, and New Balance silhouettes. Save your favorites to track stock and size availability.',
      exploreBtn: 'EXPLORE SNEAKER ARCHIVE',
      removeAria: 'Remove from wishlist',
      initializing: 'INITIALIZING VAULT WISHLIST...',
    },
    aboutPage: {
      badge: 'MANIFESTO & CULTURE',
      title: 'About SOLEVAULT',
      subtitle: 'Founded with a singular mission: to eliminate the friction and uncertainty of modern sneaker culture while celebrating the design genius of footwear engineering.',
      statement1: 'MORE THAN A PAIR.',
      statement2: "IT'S A STATEMENT.",
      p1: 'Footwear is the foundation of contemporary personal style. A single silhouette carries decades of athletic triumph, subcultural rebellion, musical counterculture, and industrial design evolution.',
      p2: 'At SOLEVAULT, we reject generic algorithm-driven storefronts. Our team meticulously curates every silhouette across Nike, Jordan, Adidas, New Balance, ASICS, Puma, and Converse. We prioritize timeless design over fleeting internet hype, giving collectors and casual dressers alike the confidence to build a rotation that stands the test of time.',
      verificationStat: '100%',
      verificationLabel: 'Physical Verification',
      spacesStat: '3',
      spacesLabel: 'Global Concept Spaces',
      studioTag: 'SOLEVAULT DESIGN STUDIO // EST. 2024',
      authBadge: 'INSPECTION PROTOCOL',
      authTitle: 'The 6-Point Vault Authentication',
      authSubtitle: 'Every sneaker in our vault undergoes a rigorous physical examination prior to receiving the SOLEVAULT tamper-evident hologram seal.',
      step1Title: '01 // UV FLUORESCENCE',
      step1Desc: 'Ultraviolet light screening to detect glue bleed, factory production stamps, and thread inconsistencies.',
      step2Title: '02 // STITCH DENSITY',
      step2Desc: 'Microscopic measurement of stitches per inch against master brand specification databases.',
      step3Title: '03 // FOAM DUROMETRY',
      step3Desc: 'Tactile and mechanical testing of midsole compound elasticity and weight tolerances.',
      step4Title: '04 // BOX & LABEL KERNING',
      step4Desc: 'Typography inspection of retail barcode labels, UPC fonts, and box fold patterns.',
      step5Title: '05 // MATERIAL PURITY',
      step5Desc: 'Verifying genuine full-grain leather texture, pigskin suede nap, and engineered mesh weaves.',
      step6Title: '06 // TAMPER-EVIDENT SEAL',
      step6Desc: 'Serialized hologram tags locked onto each pair before double-boxed secure dispatch.',
      spacesBadge: 'GLOBAL ARCHIVE SPACES',
      spacesTitle: 'Concept Gallery Destinations',
      spaceTokyoFocus: 'Tech Runner Archives & Japanese Exclusives',
      spaceLondonFocus: 'Terrace Heritage, Suede Gum Soles & Britpop Relics',
      spaceNyFocus: 'Hardwood Royalty, 80s High-Tops & Original Air Grails',
      ctaTitle: 'Ready to Upgrade Your Rotation?',
      ctaSubtitle: 'Explore 24 handpicked silhouettes across retro basketball, vintage terrace, and high-tech running.',
      ctaButton: 'ENTER THE SNEAKER VAULT',
    },
  },
  id: {
    common: {
      all: 'Semua',
      search: 'Cari',
      filter: 'Filter',
      close: 'Tutup',
      apply: 'Terapkan',
      remove: 'Hapus',
      save: 'Simpan',
      back: 'Kembali',
      continue: 'Lanjutkan',
      loading: 'Memuat...',
      sku: 'SKU',
      sale: 'DISKON',
      newDrop: 'RILIS BARU',
      trending: 'POPULER',
      vaultIcon: 'IKON VAULT',
      lowStock: 'Stok Terbatas',
      inStock: 'Stok Tersedia',
      pairsRemaining: 'pasang tersisa',
      readyToShip: 'siap kirim',
      selectSize: 'Pilih Ukuran',
      sizeGuide: 'Panduan Ukuran',
      colorway: 'Pilihan Warna',
      quantity: 'Jumlah',
      addToBag: 'Tambah ke Keranjang',
      quickSelect: 'Pilih Cepat',
      quickInspect: 'Lihat Cepat',
      viewDossier: 'Detail Lengkap',
      exploreSneakers: 'Jelajahi Sneaker',
      trueToSize: 'Sesuai Ukuran Asli',
      allSneakers: 'Semua Sneaker',
      viewAllHouses: 'Lihat Semua Brand',
      currencySymbol: '$',
    },
    nav: {
      newArrivals: 'Rilis Baru',
      sneakers: 'Sneakers',
      brands: 'Merek',
      collections: 'Koleksi',
      sale: 'DISKON',
      wishlist: 'Favorit',
      about: 'Tentang',
      searchPlaceholder: 'Cari siluet, brand, warna...',
      bag: 'Keranjang',
      themeToggle: 'Ganti Mode Tema',
      languageSelect: 'Bahasa',
      allSneakers: 'Semua Sneaker',
      saleArchive: 'Diskon Arsip',
    },
    announcement: {
      badge: 'RILISAN TERBATAS',
      highlight: 'SPRING DROP 2026',
      message: 'Koleksi eksklusif Jordan 1, New Balance 9060, dan ASICS Kayano kini tersedia dalam kuota terbatas.',
      action: 'JELAJAHI KOLEKSI',
      dismiss: 'Tutup pengumuman',
      shipping: 'GRATIS PENGIRIMAN KILAT UNTUK PESANAN DI ATAS $200',
    },
    hero: {
      tagHero: 'RILIS UTAMA',
      tagGrail: 'OG GRAIL',
      tagTech: 'TEKNOLOGI Y2K',
      pill: 'REPOSITORI SNEAKER OTENTIK',
      title1: 'KURASI SNEAKER.',
      title2: 'SILUET IKONIK.',
      subtitle: 'Koleksi sneaker pilihan, siluet retro legendaris, dan seri tech runner modern. 100% otentik, diverifikasi oleh kurator ahli, dan dikirim aman ke seluruh dunia.',
      exploreCta: 'JELAJAHI KOLEKSI',
      dropsCta: 'LIHAT RILISAN BARU',
      statVerified: '100% OTENTIK',
      statVerifiedDesc: 'Inspeksi fisik bertahap oleh kurator',
      statShipped: 'EKSPRES 24 JAM',
      statShippedDesc: 'Pengiriman udara double-boxed',
      statSatisfaction: '99.8% TERPERCAYA',
      statSatisfactionDesc: 'Rating kepuasan kolektor terverifikasi',
      season: 'ARSIP MUSIM SEMI / PANAS 2026',
      titleHighlight: 'ERA BARU.',
      stat1Label: '100% Terverifikasi',
      stat2Label: '7 Brand Pilihan',
      stat3Label: 'Koleksi Aktif',
      scrollExplore: 'GULIR KE BAWAH',
    },
    catalog: {
      badge: 'ARSIP TERKURASI',
      title: 'SEMUA SILUET',
      subtitle: 'Jelajahi inventaris terverifikasi kami mulai dari sepatu basket legendaris, ikon lari retro, hingga siluet streetwear modern.',
      filterTitle: 'Filter Koleksi',
      clearAll: 'Hapus Semua',
      categories: 'Kategori',
      brands: 'Brand & Merek',
      priceRange: 'Rentang Harga',
      under150: 'Di bawah $150',
      from150to200: '$150 - $200',
      above200: 'Di atas $200',
      sizeUsMen: 'Ukuran US Pria',
      sortLabel: 'Urutkan',
      sortNewest: 'Rilis Terbaru',
      sortPriceAsc: 'Harga: Termurah ke Termahal',
      sortPriceDesc: 'Harga: Termahal ke Termurah',
      sortTrending: 'Paling Populer',
      sortName: 'Sesuai Abjad',
      searchFor: 'Hasil pencarian untuk',
      showing: 'Menampilkan',
      of: 'dari',
      items: 'siluet sneaker',
      noResults: 'Siluet Tidak Ditemukan',
      noResultsDesc: 'Coba ubah filter pencarian, gunakan kata kunci lain, atau atur ulang semua filter.',
      resetFilters: 'Atur Ulang Filter',
      filterCatalog: 'Filter Katalog',
      refineSelection: 'Saring Pilihan',
      resetAll: 'Reset Semua',
      brandHouse: 'Brand Pilihan',
      silhouetteCategory: 'Kategori Sepatu',
      maxPrice: 'Harga Maksimum',
      colorTone: 'Warna Utama',
      inStockOnly: 'Hanya Stok Tersedia',
      onSaleOnly: 'Hanya Diskon',
      applyFilters: 'Terapkan Filter',
      filterButton: 'Filter',
      results: 'siluet',
      noResultsTitle: 'SNEAKER TIDAK DITEMUKAN',
      resetCriteria: 'RESET SEMUA FILTER',
    },
    product: {
      breadcrumbHome: 'BERANDA',
      breadcrumbSneakers: 'SNEAKERS',
      archivalHeritage: 'SEJARAH & WARISAN ARSIP',
      materialSpecs: 'Spesifikasi Material & Konstruksi',
      shippingProtocol: 'Protokol Pengiriman & Penanganan',
      authGuarantee: 'Jaminan Verifikasi Multi-Tahap',
      similarArchives: 'SILUET SERUPA',
      similarTitle: 'Lengkapi Rotasi Anda',
      sessionMemory: 'TERAKHIR DILIHAT',
      recentlyInspected: 'Siluet yang Baru Saja Dilihat',
      upper: 'Material Upper',
      outsole: 'Sol Luar & Grip',
      cushioning: 'Teknologi Bantalan',
      origin: 'Negara Asal',
      shippingInfo1: 'Pesanan dikirim dalam proteksi double-box khusus dalam 24 jam setelah verifikasi.',
      shippingInfo2: 'Gratis pengiriman kilat untuk pesanan di atas $200 dengan pelacakan langsung.',
      authInfo: 'Setiap pasang diinspeksi kerapatan jahitan, respon sinar UV, dan keaslian material.',
      save: 'Simpan ke Favorit',
      selectSize: 'Pilih Ukuran (US Pria)',
      sizeGuide: 'Panduan Ukuran & Fit',
      addToBag: 'TAMBAH KE KERANJANG',
      authenticated: '100% KEASLIAN TERJAMIN',
      authenticityDesc: 'Diinspeksi manual dan diverifikasi oleh kurator ahli sebelum dikirim.',
      specs: 'Spesifikasi Material',
      authenticityGuarantee: 'Jaminan Inspeksi Fisik',
      shippingReturns: 'Pengiriman & Retur Aman',
      relatedTitle: 'LENGKAPI ROTASI ANDA',
    },
    cart: {
      title: 'Keranjang Belanja',
      emptyTitle: 'Keranjang Masih Kosong',
      emptyDesc: 'Temukan rilis terbatas, siluet retro ikonik, dan tech runner modern untuk melengkapi rotasi gaya Anda.',
      freeShippingUnlocked: 'Gratis Pengiriman Kilat Aktif',
      addForFreeShipping: 'Tambah',
      forFreeExpress: 'lagi untuk Bebas Ongkir',
      promoPlaceholder: 'KODE PROMO (contoh: VAULT10)',
      subtotal: 'Subtotal',
      discount: 'Diskon',
      shipping: 'Estimasi Pengiriman',
      freeShipping: 'GRATIS',
      total: 'Total Pembayaran',
      checkoutBtn: 'Lanjut ke Checkout',
      checkout: 'Lanjut ke Checkout',
      continueBrowsing: 'Lanjut Belanja',
      escrowGuarantee: 'Jaminan Keaslian & Escrow Terverifikasi',
      apply: 'Terapkan',
      remove: 'Hapus',
      estimatedShipping: 'Estimasi Pengiriman',
      exploreSneakers: 'Jelajahi Sepatu',
    },
    checkout: {
      title: 'CHECKOUT ESCROW AMAN',
      stepShipping: '1. PENGIRIMAN',
      stepPayment: '2. PEMBAYARAN',
      stepReview: '3. KONFIRMASI',
      contactInfo: 'Informasi Kontak',
      fullName: 'Nama Lengkap',
      email: 'Alamat Email',
      phone: 'Nomor WhatsApp / Telepon',
      shippingAddress: 'Alamat Pengiriman',
      address: 'Alamat Lengkap',
      city: 'Kota / Wilayah',
      postalCode: 'Kode Pos',
      country: 'Negara',
      deliveryMethod: 'Pilihan Pengiriman',
      expressAir: 'Pengiriman Kilat Udara (1-2 hari kerja)',
      standardGround: 'Pengiriman Reguler (3-5 hari kerja)',
      free: 'GRATIS',
      paymentMethod: 'Metode Pembayaran',
      cardPayment: 'Kartu Kredit / Debit (Simulasi)',
      escrowNotice: 'Lingkungan Demonstrasi Simulasi — Tidak ada saldo yang akan dipotong dari rekening atau kartu Anda.',
      cardNumber: 'Nomor Kartu',
      cardExpiry: 'Bulan / Tahun (MM/YY)',
      cardCvc: 'Kode CVC',
      orderSummary: 'Ringkasan Pesanan',
      placeOrder: 'KONFIRMASI PESANAN',
      processing: 'MEMPROSES TRANSAKSI...',
      successTitle: 'TRANSAKSI TERVERIFIKASI',
      successSubtitle: 'Pesanan berhasil dibuat. Sertifikat keaslian digital Anda sedang diproses.',
      orderNumber: 'NOMOR PESANAN',
      estimatedArrival: 'Estimasi Tiba',
      returnHome: 'KEMBALI KE KATALOG',
      badge: 'PEMBAYARAN AMAN // SIMULASI',
      step1: 'Kontak',
      step2: 'Alamat',
      step3: 'Kurir',
      step4: 'Pembayaran',
      quickFill: '1-Klik Isi Data Demo',
      standardShipping: 'Standar White-Glove (3-5 Hari Kerja)',
      expressShipping: 'Kurir Prioritas Ekspres (1-2 Hari Kerja)',
      priorityShipping: 'Kurir Vault Hari Ini (Area Metro)',
      simulationNotice: 'Ini adalah demonstrasi checkout simulasi. Tidak ada transaksi riil yang diproses.',
      payAndConfirm: 'Konfirmasi Pengiriman',
      orderConfirmed: 'PESANAN BERHASIL // PENGIRIMAN DIJADWALKAN',
      orderSubtext: 'Siluet pilihan Anda telah diamankan di vault. Bukti resi pelacakan akan dikirimkan ke email Anda.',
      backToCatalog: 'Kembali ke Katalog',
    },
    footer: {
      authenticityTitle: '100% Autentik',
      authenticityDesc: 'Inspeksi berlapis',
      expressTitle: 'Pengiriman Kilat',
      expressDesc: 'Gratis di atas $200',
      returnsTitle: 'Garansi 30 Hari',
      returnsDesc: 'Proses retur mudah',
      secureTitle: 'Transaksi Aman',
      secureDesc: 'Checkout terenkripsi',
      colCatalog: 'Katalog',
      colHouses: 'Brand',
      colEditorial: 'Editorial',
      colCare: 'Layanan',
      colNetwork: 'Jaringan Vault',
      networkDesc: 'Rilis pilihan, esai editorial, dan kabar akses awal langsung dari studio Tokyo dan London.',
      newsletterLink: 'Buletin',
      trackOrder: 'Lacak Pesanan',
      shippingSpecs: 'Ketentuan Pengiriman',
      exchangeProtocol: 'Garansi Retur 30 Hari',
      sizeConversion: 'Konversi Ukuran Sepatu',
      rightsReserved: 'Hak cipta dilindungi. Didedikasikan untuk pencinta sneaker.',
      demoDisclaimer: 'Pengalaman E-Commerce Demonstrasi',
      deployedWith: 'Dideploy dengan Vercel',
      authTitle: '100% Keaslian Terjamin',
      authSub: 'Inspeksi manual berlapis',
      deliveryTitle: 'Pengiriman Ekspres',
      deliverySub: 'Gratis di atas $200',
      returnsSub: 'Jaminan tanpa ribet',
      vaultTitle: 'Vault Terenkripsi',
      vaultSub: 'Pembayaran terenkripsi',
      catalogCol: 'Katalog',
      brandsCol: 'Brand Pilihan',
      editorialCol: 'Editorial',
      careCol: 'Bantuan Pelanggan',
      rights: 'Hak cipta dilindungi. Didedikasikan untuk pencinta sneaker.',
    },
    homeBrands: {
      curatedHouses: 'BRAND PILIHAN',
      selectByBrand: 'Pilih Berdasarkan Brand',
      subtext: 'Koleksi siluet legendaris yang dikurasi khusus untuk gaya harian Anda.',
      house: 'BRAND',
      exploreDrops: 'Lihat Koleksi',
    },
    trendingSection: {
      badge: 'POPULER SAAT INI',
      title: 'Sneaker Terpopuler',
      allTrending: 'Semua Tren',
      viewAllPairs: 'LIHAT SEMUA SNEAKER',
    },
    editorial: {
      tag: 'DROP EDITORIAL 04',
      title1: 'DIDESAIN UNTUK',
      title2: 'GAYA JALANAN.',
      desc: 'Diciptakan untuk aspal perkotaan. Dari siluet terrace kasual hingga tech runner Y2K berdaya redam tinggi, kurasi SS26 kami memadukan subkultur otentik dengan kemewahan modern.',
      bullet1: 'Material kulit premium full-grain & suede klasik pilihan',
      bullet2: 'Kombinasi warna arsip yang serbaguna untuk rotasi harian',
      bullet3: 'Alokasi terbatas dengan verifikasi keaslian langsung',
      cta: 'JELAJAHI KOLEKSI',
      campaign: 'KAMPANYE // GAYA STREETWEAR SS26',
    },
    newDropsSection: {
      badge: 'RILISAN TERBARU',
      title: 'Koleksi & Rilisan Anyar',
      viewAll: 'Lihat Semua Rilisan',
      dropActive: 'TERSEDIA',
      pairsRemaining: 'pasang tersisa',
      quickCop: 'Pilih Cepat',
    },
    manifesto: {
      badge: 'MANIFESTO KAMI',
      title1: 'LEBIH DARI SEPATU.',
      title2: 'INI PERNYATAAN GAYA.',
      p1: 'Di SOLEVAULT, kami memandang koleksi sneaker sebagai karya seni arsitektur dan bahasa ekspresi budaya. Kami mengurasi siluet ikonik, perlengkapan rotasi harian, dan rilisan langka untuk setiap gaya personal Anda.',
      p2: 'Baik Anda mencari model legendaris Chicago 1985, sol gum kasual, hingga seri tech runner Jepang terkini, setiap pasang di SOLEVAULT telah dipilih cermat demi warisan sejarah, kualitas bahan, dan daya tarik abadi.',
      promiseTitle: 'Jaminan Otentisitas Vault',
      promiseDesc: 'Setiap pasang melalui verifikasi jahitan sinar UV, aroma boks pabrikan, dan uji struktural fisik.',
      curatedIn: 'DIKURASI DI',
      globalEdit: 'EDISI STREETWEAR GLOBAL',
      pillar1Title: 'Kurasi Tanpa Kompromi',
      pillar1Desc: 'Bukan sekadar sepatu biasa. Hanya sneaker bernilai kultural tinggi dan model klasik teruji.',
      pillar2Title: 'Akses Adil & Transparan',
      pillar2Desc: 'Harga pasar yang transparan, jumlah stok nyata, dan sistem lacak pesanan terintegrasi.',
      aboutLink: 'Baca Kisah Lengkap Brand & Galeri Konsep',
    },
    newsletter: {
      badge: 'AKSES PRIORITAS VAULT',
      title: 'DAPATKAN INFO PERDANA.',
      subtitle: 'Jadilah yang pertama mengetahui rilis baru, koleksi edisi terbatas, dan penawaran khusus anggota.',
      placeholder: 'MASUKKAN EMAIL UNTUK AKSES AWAL',
      button: 'GABUNG DAFTAR DROP',
      verifying: 'MEMVERIFIKASI...',
      successTitle: 'Anda Masuk Daftar VIP',
      successDesc: 'Konfirmasi demo: Anda akan menerima kabar rilis sebelum peluncuran untuk umum.',
      registerAnother: 'Daftarkan email lain →',
      disclaimer: 'Simulasi antarmuka frontend. Bebas spam. Berhenti berlangganan kapan saja.',
      errorInvalid: 'Silakan masukkan alamat email yang valid.',
    },
    sizeGuideModal: {
      title: 'Panduan Ukuran & Fit',
      subtitle: 'MATRIKS KONVERSI INTERNASIONAL',
      trueToSizeTitle: 'Sesuai Ukuran Asli:',
      trueToSizeDesc: 'Sebagian besar siluet Nike, Jordan, dan ASICS pas sesuai ukuran asli (true to size). Untuk Adidas Samba dan Gazelle, pemilik kaki lebar disarankan naik 0.5 ukuran.',
      usMen: 'US Pria',
      usWomen: 'US Wanita',
      uk: 'UK',
      eu: 'EU',
      cmLength: 'Panjang CM',
      closeBtn: 'Tutup Panduan',
    },
    wishlistPage: {
      badge: 'ROTASI TERSIMPAN',
      title: 'Wishlist Saya',
      clearBtn: 'Hapus Semua Wishlist',
      emptyTitle: 'Belum Ada Sneaker yang Disimpan',
      emptyDesc: 'Jelajahi arsip sneaker pilihan dari Nike, Jordan, Adidas, ASICS, dan New Balance. Simpan favorit Anda untuk memantau ketersediaan stok.',
      exploreBtn: 'JELAJAHI KATALOG SNEAKER',
      removeAria: 'Hapus dari wishlist',
      initializing: 'MEMUAT WISHLIST...',
    },
    aboutPage: {
      badge: 'MANIFESTO & BUDAYA SNEAKER',
      title: 'Tentang SOLEVAULT',
      subtitle: 'Didirikan dengan satu misi: menghapuskan keraguan dan kepalsuan dalam kultur sneaker modern, sembari merayakan mahakarya desain dan rekayasa alas kaki.',
      statement1: 'LEBIH DARI SEPASANG SEPATU.',
      statement2: 'INI ADALAH IDENTITAS.',
      p1: 'Sepatu adalah fondasi dari gaya personal kontemporer. Satu siluet menyimpan dekade kejayaan atletik, pemberontakan subkultur, skena musik, dan evolusi desain industri.',
      p2: 'Di SOLEVAULT, kami menolak toko online instan berbasis algoritma. Kurator kami memilah setiap siluet secara mendalam dari Nike, Jordan, Adidas, New Balance, ASICS, Puma, hingga Converse. Kami memprioritaskan desain abadi di atas sekadar sensasi internet singkat, memberi kepercayaan penuh bagi kolektor maupun penikmat gaya untuk membangun koleksi yang bertahan lintas zaman.',
      verificationStat: '100%',
      verificationLabel: 'Inspeksi Fisik Berlapis',
      spacesStat: '3',
      spacesLabel: 'Galeri Konsep Global',
      studioTag: 'STUDIO DESAIN SOLEVAULT // EST. 2024',
      authBadge: 'PROTOKOL PEMERIKSAAN',
      authTitle: '6 Tahap Autentikasi SOLEVAULT',
      authSubtitle: 'Setiap pasang sneaker di vault kami melalui uji fisik ketat oleh spesialis sebelum disegel dengan stempel hologram anti-rusak resmi.',
      step1Title: '01 // UJI FLUORESENSI UV',
      step1Desc: 'Pemindaian sinar ultraviolet untuk mendeteksi residu lem pabrik, nomor cap produksi batch, dan ketepatan alur benang.',
      step2Title: '02 // KERAPATAN JAHITAN',
      step2Desc: 'Pengukuran mikroskopis jumlah jahitan per inci sesuai database spesifikasi resmi pabrikan asli.',
      step3Title: '03 // DUROMETRI BUSA SOL',
      step3Desc: 'Pengujian mekanis kelenturan kompon midsole, bantalan unit udara, dan toleransi berat gramatur resmi.',
      step4Title: '04 // TIPOGRAFI & LABEL BOKS',
      step4Desc: 'Pemeriksaan presisi font barcode ritel internasional, cetakan kode UPC, dan lipatan karton boks pabrikan.',
      step5Title: '05 // KEMURNIAN MATERIAL',
      step5Desc: 'Verifikasi serat kulit asli full-grain, tekstur suede premium, dan tenunan engineered mesh berpori.',
      step6Title: '06 // SEGEL HOLOGRAM VAULT',
      step6Desc: 'Tag hologram bernomor seri unik dikunci pada sneaker sebelum dikemas double-box dengan segel tamper-evident.',
      spacesBadge: 'GALERI ARSIP GLOBAL',
      spacesTitle: 'Destinasi Galeri Konsep',
      spaceTokyoFocus: 'Arsip Tech Runner & Rilisan Eksklusif Jepang',
      spaceLondonFocus: 'Heritage Terrace, Sol Karet Suede & Relik Britpop',
      spaceNyFocus: 'Legenda Lapangan Basket, High-Top Era 80-an & Grail Air Original',
      ctaTitle: 'Siap Meningkatkan Rotasi Sneaker Anda?',
      ctaSubtitle: 'Jelajahi 24 siluet pilihan dari retro basket legendaris, vintage terrace, hingga running berteknologi tinggi.',
      ctaButton: 'MASUK KE SNEAKER VAULT',
    },
  },
};
