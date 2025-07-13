const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Chapter = require('./models/Chapter');
const Quiz = require('./models/Quiz');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected for seeding');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    await Chapter.deleteMany();
    await Quiz.deleteMany();

    const chapters = [
      { number: 1, title: 'Chapter 1', description: 'Introduction' },
      { number: 2, title: 'Chapter 2', description: 'Advertising Basics' },
      { number: 3, title: 'Chapter 3', description: 'The History of Digital Advertising Technology' },
      { number: 4, title: 'Chapter 4', description: 'The Main Technology Platforms and Intermediaries in the Digital Advertising Ecosystem' },
      { number: 5, title: 'Chapter 5', description: 'The Main Digital Advertising Mediums and Channels' },
      { number: 6, title: 'Chapter 6', description: 'Ad Serving' },
      { number: 7, title: 'Chapter 7', description: 'Ad Targeting and Budget Control' },
      { number: 8, title: 'Chapter 8', description: 'Tracking and Reporting Impressions, Clicks, and Conversions in AdTech Platforms' },
      { number: 9, title: 'Chapter 9', description: 'Media-Buying Methods: Programmatic, Real-Time Bidding (RTB), Header Bidding, and PMP' },
      { number: 10, title: 'Chapter 10', description: 'User Identification' },
      { number: 11, title: 'Chapter 11', description: 'Data Management Platforms (DMPs) and Data Usage' },
      { number: 12, title: 'Chapter 12', description: 'Attribution' },
      { number: 13, title: 'Chapter 13', description: 'Ad Fraud and Viewability' },
      { number: 14, title: 'Chapter 14', description: 'User Privacy in Digital Advertising' },
      { number: 15, title: 'Chapter 15', description: 'AdTech From The Vendors’ And Agencies’ Perspective' },
      { number: 16, title: 'Chapter 16', description: 'Programmatic Advertising and AdTech in 2023: Trends, Challenges and Opportunities' },
    ];

    const quizzes = [
      {
        chapterNumber: 1,
        questions: [{
          questionText: 'What is the primary benefit online advertising offers to content creators?',
          options: ['A. Helps websites rank higher on Google', 'B. Enables free distribution of content by generating revenue', 'C. Increases server speed and load times', 'D. Blocks irrelevant traffic'],
          correctAnswerIndex: 1
        },
    {
          questionText: 'Which of the following privacy changes has significantly disrupted the AdTech industry in recent years?',
          options: ['A. Launch of Google Chrome', 'B. Rise of influencer marketing', 'C. GDPR and browser-based tracking prevention', 'D. Increase in mobile app installations'],
          correctAnswerIndex: 2
        },
    {
          questionText: 'In AdTech, what does the term "inventory" most commonly refer to?',
          options: ['A. A list of available advertisers', 'B. The total user data collected', 'C. Available ad space on a website or app', 'D. A collection of media files for ads'],
          correctAnswerIndex: 2
        },
    {
          questionText: 'What was a major historical event that disrupted the early online advertising industry?',
          options: ['A. Facebook’s IPO', 'B. The dot-com bubble burst (late 1990s/early 2000s)', 'C. The release of iOS', 'D. The launch of HTML5'],
          correctAnswerIndex: 1
        },
    {
          questionText: 'Why is the AdTech ecosystem considered technically complex?',
          options: ['A. It uses blockchain and NFTs extensively', 'B. It relies on outdated technology', 'C. It involves many companies, platforms, and real-time processes working together', 'D. It only operates on mobile devices'],
          correctAnswerIndex: 2
        }]
      },
      {
        chapterNumber: 2,
        questions: [{
          questionText: 'Which of the following best describes the primary role of an advertising agency today?',
          options: ['A. Selling ad space directly to publishers', 'B. Providing only graphic design services', 'C. Planning, creating, executing, and managing ad campaigns', 'D. Supplying hardware and analytics for ads'],
          correctAnswerIndex: 2
        },{
          questionText: 'What is the main difference between a traditional publisher and a modern digital publisher?',
          options: ['A. Traditional publishers use radio; digital publishers use TV', 'B. Digital publishers don’t need to produce content', 'C. Anyone with a website or app can become a publisher today', 'D. Traditional publishers didn’t allow advertising'],
          correctAnswerIndex: 2
        },{
          questionText: 'Which pricing model is best suited for an advertiser focusing on brand awareness rather than conversions?',
          options: ['A. CPA (Cost Per Action)', 'B. CPC (Cost Per Click)', 'C. CPM (Cost Per Mille)', 'D. CPL (Cost Per Lead)'],
          correctAnswerIndex: 2
        },{
          questionText: 'What is the key distinction between an ad slot and ad space on a webpage?',
          options: ['A. Ad slot is for mobile, ad space is for desktop', 'B. Ad slot is where the ad space is hosted', 'C. Ad space refers to the website’s homepage only', 'D. There’s no difference—they’re the same'],
          correctAnswerIndex: 1
        },{
          questionText: 'Why have viewable impressions become a key metric in modern digital advertising?',
          options: ['A. To measure social media likes', 'B. To ensure impressions are actually seen by users', 'C. To calculate bounce rate', 'D. To track page loading speed'],
          correctAnswerIndex: 1
        }]
      },
      {
        chapterNumber: 3,
        questions: [{
          questionText: 'What key problem did ad networks originally solve for publishers?',
          options: ['A. Displaying pop-up ads automatically', 'B. Tracking users across websites', 'C. Selling unsold or remnant inventory without in-house sales teams', 'D. Replacing the need for ad creatives'],
          correctAnswerIndex: 2
        },{
          questionText: 'Which invention laid the foundation for targeted advertising and user tracking online?',
          options: ['A. Ad servers', 'B. Click-through rate (CTR)', 'C. Waterfall system', 'D. Web cookies'],
          correctAnswerIndex: 3
        },{
          questionText: 'Why did network optimizers (now known as SSPs) emerge in the digital advertising ecosystem?',
          options: ['A. To eliminate video ad formats', 'B. To simplify managing multiple ad networks and improve page-load speed', 'C. To block ad blockers entirely', 'D. To send ads to users via email'],
          correctAnswerIndex: 1
        },{
          questionText: 'What was a major downside for advertisers when working with multiple ad networks before ad exchanges were introduced?',
          options: ['A. Ads were always shown in mobile apps', 'B. Advertisers had to manually design HTML5 creatives', 'C. Advertisers often ended up buying the same audience multiple times', 'D. Ad creatives could only be images, not video'],
          correctAnswerIndex: 2
        },{
          questionText: 'What major innovation did real-time bidding (RTB) bring to the digital advertising world around 2007/2008?',
          options: ['A. The ability to serve ads via email', 'B. Buying ad impressions through a real-time auction model', 'C. Paying only for impressions that lead to sales', 'D. Embedding ads inside video games'],
          correctAnswerIndex: 1
        }]
      },
      {
        chapterNumber: 4,
        questions: [{
          questionText: 'What is the primary role of a demand-side platform (DSP) in the AdTech ecosystem?',
          options: ['A. To serve ads on behalf of publishers', 'B. To help agencies write ad copy', 'C. To allow advertisers to buy ad inventory through real-time bidding', 'D. To verify if an ad was displayed properly'],
          correctAnswerIndex: 2
        },{
          questionText: 'What is the key difference between an ad network and a DSP?',
          options: ['A. Ad networks buy impressions through RTB, DSPs dont', 'B. DSPs resell bundled inventory, ad networks sell impressions individually', 'C. DSPs offer real-time bidding for individual impressions; ad networks sell pre-aggregated packages', 'D. There’s no real difference'],
          correctAnswerIndex: 2
        },{
          questionText: 'What major benefit do data-management platforms (DMPs) offer to advertisers?',
          options: ['A. Designing creative assets for campaigns', 'B. Generating real-time bids during auctions', 'C. Collecting and organizing data to create audience segments for targeting', 'D. Replacing supply-side platforms'],
          correctAnswerIndex: 2
        },{
          questionText: 'Why are companies like Google, Facebook, and Amazon referred to as “walled gardens” in advertising?',
          options: ['A. Because they grow their data from organic sources only', 'B. Because they allow any advertiser to access any users data', 'C. Because they restrict access to their user data and require advertisers to use their own platforms', 'D. Because they sell ads only for websites outside their own ecosystem'],
          correctAnswerIndex: 2
        },{
          questionText: 'Which of the following statements about agency trading desks (ATDs) is TRUE?',
          options: ['A. They operate entirely independently from ad agencies', 'B. They focus only on TV commercial placements', 'C. They manage programmatic media buying for agency clients using DSPs and proprietary tech', 'D. They are exclusively used by small businesses'],
          correctAnswerIndex: 2
        }]
      },
     {
  chapterNumber: 5,
  questions: [{
    questionText: 'What is the main difference between an advertising medium and an advertising channel?',
    options: ['A. Medium is where the ad is shown; channel is what the ad contains', 'B. Medium is the form of the ad; channel is how it is delivered', 'C. Medium is the audience; channel is the brand', 'D. Medium is digital; channel is traditional'],
    correctAnswerIndex: 1
  }, {
    questionText: 'Which of the following is NOT considered a type of native advertising as per the IAB Native Advertising Playbook 2019?',
    options: ['A. In-feed ads', 'B. Branded content', 'C. Content recommendation ads', 'D. Search engine ads'],
    correctAnswerIndex: 3
  }, {
    questionText: 'Which video ad protocol allows video content creators to specify ad breaks, timing, and number of ads within a video?',
    options: ['A. VAST', 'B. VPAID', 'C. VMAP', 'D. MRAID'],
    correctAnswerIndex: 2
  }, {
    questionText: 'What technology is commonly used to display rich-media ads inside mobile apps across all devices?',
    options: ['A. SafeFrame', 'B. VPAID', 'C. HTML5', 'D. MRAID'],
    correctAnswerIndex: 3
  }, {
    questionText: 'Which form of TV advertising allows different ads to be shown to different households watching the same program at the same time?',
    options: ['A. Connected TV', 'B. OTT', 'C. Addressable TV', 'D. Linear TV'],
    correctAnswerIndex: 2
  }]
}
,
    {
  chapterNumber: 6,
  questions: [{
    questionText: 'What is the primary function of an ad server in the AdTech ecosystem?',
    options: ['A. To create video ad content', 'B. To display ads and track campaign performance', 'C. To buy ad inventory in real-time auctions', 'D. To sell ad space to publishers'],
    correctAnswerIndex: 1
  }, {
    questionText: 'Which of the following best describes the role of a third-party ad server?',
    options: ['A. It fills ad slots on a publisher’s website', 'B. It serves native ads to social platforms', 'C. It tracks and verifies campaign performance across multiple publishers', 'D. It replaces the DSP in programmatic buying'],
    correctAnswerIndex: 2
  }, {
    questionText: 'In ad serving, what is the difference between AdOps and ad trafficking?',
    options: ['A. AdOps is a platform; ad trafficking is a targeting feature', 'B. AdOps is the process; ad trafficking is the strategy', 'C. AdOps is a person/team; ad trafficking is the campaign setup process', 'D. There is no difference between the two'],
    correctAnswerIndex: 2
  }, {
    questionText: 'Which ad tag format provides strong isolation and protects the publisher’s site but limits ad interactivity and viewability tracking?',
    options: ['A. JavaScript ad tag', 'B. SafeFrame', 'C. Iframe ad tag', 'D. IMG ad tag'],
    correctAnswerIndex: 2
  }, {
    questionText: 'What is the purpose of VAST in video ad serving?',
    options: ['A. To track banner impressions on websites', 'B. To isolate iframe interactions', 'C. To serve and manage rich media ads', 'D. To enable video ads to play across multiple platforms using a standard XML format'],
    correctAnswerIndex: 3
  }]
}
,
      {
  chapterNumber: 7,
  questions: [{
    questionText: 'What is contextual targeting in online advertising?',
    options: ['A. Displaying ads based on the user’s past purchases', 'B. Targeting users based on their demographic data', 'C. Targeting ads based on the content of the webpage', 'D. Using GPS data to show local ads'],
    correctAnswerIndex: 2
  }, {
    questionText: 'Which targeting method uses cookies or device IDs to track users’ past behaviors across websites?',
    options: ['A. Contextual targeting', 'B. Behavioral targeting', 'C. Demographic targeting', 'D. Ad slot targeting'],
    correctAnswerIndex: 1
  }, {
    questionText: 'What is the main purpose of frequency capping in an ad campaign?',
    options: ['A. To increase ad impressions per user', 'B. To display different ads to the same user', 'C. To limit how many times the same ad is shown to a user', 'D. To improve ad placement within a website'],
    correctAnswerIndex: 2
  }, {
    questionText: 'Which of the following statements about ad retargeting is TRUE?',
    options: ['A. It only works for new users who haven’t interacted with the brand', 'B. It uses demographic data to segment users', 'C. It shows ads to users who previously interacted with the brand', 'D. It uses IP address to determine user intent'],
    correctAnswerIndex: 2
  }, {
    questionText: 'What does budget capping in ad campaigns help advertisers control?',
    options: ['A. The type of creatives shown', 'B. The number of publishers used', 'C. The total money spent per day or campaign', 'D. The targeting precision of an ad'],
    correctAnswerIndex: 2
  }]
}
,
      {
  chapterNumber: 8,
  questions: [{
    questionText: 'What is the primary purpose of an impression tracker in AdTech platforms?',
    options: [
      'A. To count conversions',
      'B. To redirect the user to the final landing page',
      'C. To notify the ad server when an ad is displayed',
      'D. To block fraudulent traffic'
    ],
    correctAnswerIndex: 2
  }, {
    questionText: 'What is the formula to calculate Click-Through Conversion (CTC) rate?',
    options: [
      'A. (Impressions ÷ Clicks) × 100',
      'B. (Conversions ÷ Clicks) × 100',
      'C. (Clicks ÷ Impressions) × 100',
      'D. (Conversions ÷ Impressions) × 100'
    ],
    correctAnswerIndex: 1
  }, {
    questionText: 'What does the "e" in eCPM, eCPA, and eCPC stand for?',
    options: [
      'A. Electronic',
      'B. Estimated',
      'C. Effective',
      'D. Enhanced'
    ],
    correctAnswerIndex: 2
  }, {
    questionText: 'Which of the following is a common reason for discrepancies between publisher and advertiser reports?',
    options: [
      'A. Ads being displayed on mobile only',
      'B. Server-to-server integration',
      'C. Poor Internet connectivity and JavaScript errors',
      'D. Low conversion rates'
    ],
    correctAnswerIndex: 2
  }, {
    questionText: 'What is the IAB’s acceptable threshold for impression discrepancy between ad servers?',
    options: [
      'A. 15%',
      'B. 20%',
      'C. 5%',
      'D. 10%'
    ],
    correctAnswerIndex: 3
  }]
}
,
     {
  chapterNumber: 9,
  questions: [
    {
      questionText: 'What format is commonly used for bid requests and bid responses in RTB?',
      options: ['A. XML', 'B. YAML', 'C. JSON', 'D. CSV'],
      correctAnswerIndex: 2
    },
    {
      questionText: 'In a bid response, which field contains the amount the DSP is willing to pay?',
      options: ['A. iurl', 'B. price', 'C. nurl', 'D. crid'],
      correctAnswerIndex: 1
    },
    {
      questionText: 'What does the "Deal ID" represent in a Private Marketplace (PMP)?',
      options: ['A. The bid floor price', 'B. The publisher\'s domain', 'C. An identifier for PMP access', 'D. A user’s device ID'],
      correctAnswerIndex: 2
    },
    {
      questionText: 'Which of the following is a disadvantage of client-side header bidding?',
      options: ['A. Better cookie matching', 'B. Lower page latency', 'C. Poor browser compatibility and increased latency', 'D. Increased transparency'],
      correctAnswerIndex: 2
    },
    {
      questionText: 'What is the purpose of "bid shading" in a first-price auction?',
      options: ['A. To increase CPMs for publishers', 'B. To prevent DSPs from bidding at all', 'C. To help advertisers avoid overpaying', 'D. To track user behavior'],
      correctAnswerIndex: 2
    }
  ]
}

,
      {
  chapterNumber: 10,
  questions: [
    {
      questionText: 'What is the main purpose of user identification in AdTech?',
      options: [
        'A. To verify the age of the user',
        'B. To prevent fraudulent clicks',
        'C. To track users across websites for ad targeting',
        'D. To detect ad blockers'
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: 'Which identifier is commonly stored in a browser cookie to recognize users?',
      options: [
        'A. User-Agent string',
        'B. Session token',
        'C. Hashed email address',
        'D. User ID'
      ],
      correctAnswerIndex: 3
    },
    {
      questionText: 'Why are third-party cookies being phased out by browsers?',
      options: [
        'A. They increase website loading times',
        'B. They interfere with JavaScript functionality',
        'C. They raise privacy concerns and enable cross-site tracking',
        'D. They are difficult to implement'
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: 'What is one major challenge of user identification in mobile in-app environments?',
      options: [
        'A. Apps do not support cookies',
        'B. Apps cannot access the internet',
        'C. Mobile screens are too small',
        'D. IP addresses change too frequently'
      ],
      correctAnswerIndex: 0
    },
    {
      questionText: 'Which of the following is a privacy-friendly alternative to third-party cookies?',
      options: [
        'A. Fingerprinting',
        'B. FLoC (Federated Learning of Cohorts)',
        'C. Third-party JavaScript tracking',
        'D. Session hijacking'
      ],
      correctAnswerIndex: 1
    }
  ]
}
,
      {
  chapterNumber: 11,
  questions: [
    {
      questionText: 'What is the primary reason AdTech companies collect user data?',
      options: [
        'A. To improve search engine rankings',
        'B. To build user profiles for targeting and personalization',
        'C. To reduce website load time',
        'D. To generate website layouts'
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: 'Which of the following is an example of first-party data?',
      options: [
        'A. Data purchased from a DMP',
        'B. User behavior tracked on your own website',
        'C. Third-party cookie data',
        'D. Data from a partner’s website'
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: 'What role does a Data Management Platform (DMP) play in AdTech?',
      options: [
        'A. It displays ads to users',
        'B. It manages payments between advertisers and publishers',
        'C. It collects, stores, and segments data for targeting',
        'D. It blocks non-personalized ads'
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: 'What does data enrichment typically involve?',
      options: [
        'A. Encrypting user identifiers',
        'B. Merging data from multiple sources to add more attributes to a profile',
        'C. Deleting old user records',
        'D. Reducing the size of cookies'
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: 'Which regulation significantly changed how user data can be collected and processed in the EU?',
      options: [
        'A. CAN-SPAM Act',
        'B. ePrivacy Directive',
        'C. GDPR (General Data Protection Regulation)',
        'D. CCPA (California Consumer Privacy Act)'
      ],
      correctAnswerIndex: 2
    }
  ]
}
,{
  chapterNumber: 12,
  questions: [{
    questionText: 'What is attribution in ad tech?',
    options: ['A. A method to block bot traffic', 'B. The process of identifying which touchpoints led to a conversion', 'C. A way to track impressions across devices', 'D. A technique to prevent ad fraud'],
    correctAnswerIndex: 1
  }, {
    questionText: 'Which of the following counts as a "touchpoint" in a customer journey?',
    options: ['A. Only clicks', 'B. Only website visits', 'C. Any interaction including passive impressions', 'D. Only purchases'],
    correctAnswerIndex: 2
  }, {
    questionText: 'What model assigns all conversion credit to the last ad interaction before conversion?',
    options: ['A. First-touch attribution', 'B. Multi-touch attribution', 'C. Last-click (or last view) attribution', 'D. Probabilistic attribution'],
    correctAnswerIndex: 2
  }, {
    questionText: 'Multi-touch attribution differs from single-touch models by:',
    options: ['A. Only using first impression data', 'B. Assigning fractional credit across several touchpoints', 'C. Ignoring any view-through conversions', 'D. Relying solely on offline data'],
    correctAnswerIndex: 1
  }, {
    questionText: 'Why is accurate attribution important for advertisers?',
    options: ['A. It reduces the cost of creative assets', 'B. It helps optimize campaigns by identifying high-value touchpoints', 'C. It eliminates all ad-fraud', 'D. It ensures viewability on all devices'],
    correctAnswerIndex: 1
  }]
}
,
     {
  chapterNumber: 13,
  questions: [
    {
      questionText: 'Which IAB standard helps prevent domain spoofing and ensures publishers authorize their programmatic partners?',
      options: ['A. OpenVV', 'B. ads.txt', 'C. TRAQ rating', 'D. Bid shading'],
      correctAnswerIndex: 1
    },
    {
      questionText: 'Under IAB/MRC standards, when is a display ad considered viewable?',
      options: [
        'A. 30% of pixels visible for 0.5 seconds',
        'B. 50% of pixels visible for at least 1 second',
        'C. 100% of pixels visible for 2 seconds',
        'D. 75% of pixels visible for 0.5 seconds'
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: 'Which form of ad fraud involves layering multiple ads in one placement, but only the top one is actually visible?',
      options: ['A. Invalid traffic (IVT)', 'B. Domain spoofing', 'C. Pixel stuffing', 'D. Ad stacking'],
      correctAnswerIndex: 3
    },
    {
      questionText: 'What is the primary risk posed by bot traffic in ad campaigns?',
      options: [
        'A. Improved human engagement metrics',
        'B. Inflated viewability and wasted spend',
        'C. Better ad delivery performance',
        'D. Higher conversion tracking accuracy'
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: 'Why is viewability measurement critical for advertisers?',
      options: [
        'A. It reduces CPM prices automatically',
        'B. It charges advertisers only for ads actually seen',
        'C. It eliminates need for ad verification tools',
        'D. It guarantees clicks on every impression'
      ],
      correctAnswerIndex: 1
    }
  ]
}
,
    {
  chapterNumber: 14,
  questions: [
    {
      questionText: 'What major EU regulation took effect on May 25, 2018 to strengthen user privacy?',
      options: ['A. COPPA', 'B. CCPA', 'C. GDPR', 'D. HIPAA'],
      correctAnswerIndex: 2
    },
    {
      questionText: 'In GDPR terminology, what is the “data controller”?',
      options: ['A. The user whose data is collected', 'B. The tool that anonymizes data', 'C. The entity that determines how data is used', 'D. The third‑party data broker'],
      correctAnswerIndex: 2
    },
    {
      questionText: 'Which mobile identifier requires user opt‑in under Apple’s AppTrackingTransparency framework?',
      options: ['A. GAID', 'B. MAC address', 'C. IDFA', 'D. IP address'],
      correctAnswerIndex: 2
    },
    {
      questionText: 'What feature in browsers prevents third‑party cookies and limits behavioral tracking?',
      options: ['A. Ad blockers', 'B. Do-Not-Track header', 'C. Third‑party cookie blocking via ITP/ETP', 'D. Cookie syncing'],
      correctAnswerIndex: 2
    },
    {
      questionText: 'Why are companies moving from behavioral targeting to contextual methods?',
      options: [
        'A. Because contextual targeting uses more user data',
        'B. Due to privacy laws and browser restrictions on behavioral tracking',
        'C. Because behavioral targeting is cheaper',
        'D. Because contextual ads don’t rely on keywords'
      ],
      correctAnswerIndex: 1
    }
  ]
}
,
     {
  chapterNumber: 15,
  questions: [
    {
      questionText: 'Which business model is commonly used by AdTech vendors like DSPs and SSPs?',
      options: ['A. Subscription per user seat', 'B. Fixed CPM or percentage of media spend', 'C. Flat monthly fee per campaign', 'D. Revenue-sharing based on conversions'],
      correctAnswerIndex: 1
    },
    {
      questionText: 'What is the main focus of agency trading desks (ATDs) within ad agencies?',
      options: ['A. Designing ad creatives', 'B. Serving as independent ad networks', 'C. Optimizing programmatic media buying for agency clients', 'D. Managing publisher direct deals'],
      correctAnswerIndex: 2
    },
    {
      questionText: 'From a technical standpoint, what is one of the biggest challenges for AdTech vendors?',
      options: ['A. Maintaining creative design consistency', 'B. Handling real-time decisioning at scale under latency constraints', 'C. Writing insertion orders (IOs)', 'D. Managing third-party cookies only'],
      correctAnswerIndex: 1
    },
    {
      questionText: 'Which pricing model charges clients a percentage of media spend?',
      options: ['A. Fixed CPM', 'B. License-based SaaS fee', 'C. Percentage-of-spend fee model', 'D. Flat impression package fee'],
      correctAnswerIndex: 2
    },
    {
      questionText: 'What is the "build vs rent" dilemma faced by brands?',
      options: ['A. Deciding between building creatives in-house or renting them', 'B. Choosing between hiring media agencies or freelance partners', 'C. Whether to develop their own AdTech infrastructure or rent vendor platforms', 'D. Selecting between real-time and direct media buying'],
      correctAnswerIndex: 2
    }
  ]
}
,
      {
  chapterNumber: 16,
  questions: [
    {
      questionText: 'What event in 2022 marked a major shift in US digital ad spend distribution?',
      options: [
        'A. Amazon surpassing Facebook in ad revenue',
        'B. Google and Facebook’s combined share dropping below 50%',
        'C. Meta launching Threads social media',
        'D. Apple announcing a DSP platform'
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: 'What is the purpose of the IAB Tech Lab’s Seller Defined Audiences (SDA) proposal?',
      options: [
        'A. To increase ad viewability metrics',
        'B. To eliminate the need for DSPs',
        'C. To enable publishers to create audiences without passing user identity',
        'D. To bypass consent frameworks'
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: 'Why are digital out-of-home (DOOH) and in-game advertising gaining interest?',
      options: [
        'A. They use third-party cookies more efficiently',
        'B. They are unaffected by GDPR laws',
        'C. They provide non-disruptive and creative advertising formats',
        'D. They offer cheaper CPMs than web ads'
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: 'What major privacy regulation change is expected from Google in 2024?',
      options: [
        'A. Shutting down YouTube ads',
        'B. Ending support for server-to-server bidding',
        'C. Ending support for third-party cookies in Chrome',
        'D. Releasing GA4 as mandatory'
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: 'How do the EU’s DMA and DSA affect big tech “gatekeepers” like Google and Apple?',
      options: [
        'A. They require full shutdown of AdTech platforms',
        'B. They ban all forms of targeted ads',
        'C. They mandate user consent for cross-platform data sharing and open ecosystems to third parties',
        'D. They restrict all mobile app monetization'
      ],
      correctAnswerIndex: 2
    }
  ]
}

    ];

    await Chapter.insertMany(chapters);
    await Quiz.insertMany(quizzes);

    console.log('✅ Real quiz data seeded!');
    process.exit();
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
};

connectDB().then(seedData);
