import { Lesson } from '../types';

export const LESSONS: Lesson[] = [
  {
    id: 'algorithms',
    title: 'The Algorithm',
    sections: [
      {
        heading: 'The Invisible Curator',
        text: "Imagine a librarian who knows exactly what you like and hides everything else. That's an algorithm. It's a set of rules that social media platforms use to decide what content to show you first."
      },
      {
        heading: 'How It Works',
        text: "Algorithms track your clicks, likes, shares, and watch time. If you stare at a cat video for 10 seconds, the algorithm learns you like cats. It then prioritizes similar content to keep you glued to the screen."
      },
      {
        heading: 'The Goal',
        text: "The primary goal isn't always to inform you—it's to keep you engaged. Platforms sell your attention to advertisers, so the longer you stay, the more money they make."
      }
    ],
    questions: [
      {
        id: 1,
        question: "What is the main goal of a social media algorithm?",
        options: [
          "To show you the most important news.",
          "To keep you engaged on the platform.",
          "To help you make friends."
        ],
        correctAnswer: "To keep you engaged on the platform."
      },
      {
        id: 2,
        question: "What data do algorithms use to learn your preferences?",
        options: [
          "Your likes, shares, and watch time.",
          "Your secret thoughts.",
          "Only what you explicitly type."
        ],
        correctAnswer: "Your likes, shares, and watch time."
      },
      {
        id: 3,
        question: "Why might an algorithm hide certain posts from you?",
        options: [
          "The author is banned.",
          "It predicts you won't interact with them.",
          "It ran out of storage space."
        ],
        correctAnswer: "It predicts you won't interact with them."
      },
      {
        id: 4,
        question: "What is 'watch time'?",
        options: [
          "The time of day you log in.",
          "How long you look at a specific post or video.",
          "The total time you've owned your account."
        ],
        correctAnswer: "How long you look at a specific post or video."
      },
      {
        id: 5,
        question: "If you click on many sports videos, what will the algorithm likely do?",
        options: [
          "Show you more cooking videos.",
          "Show you more sports videos.",
          "Delete your account."
        ],
        correctAnswer: "Show you more sports videos."
      },
      {
        id: 6,
        question: "Who are the real 'customers' of most social media platforms?",
        options: [
          "The users (you).",
          "The advertisers.",
          "The content creators."
        ],
        correctAnswer: "The advertisers."
      },
      {
        id: 7,
        question: "What is an 'infinite scroll' designed to do?",
        options: [
          "Help you find the bottom of the page.",
          "Keep you scrolling and consuming content indefinitely.",
          "Save your battery life."
        ],
        correctAnswer: "Keep you scrolling and consuming content indefinitely."
      },
      {
        id: 8,
        question: "Which action usually signals the strongest interest to an algorithm?",
        options: [
          "Scrolling past quickly.",
          "Sharing the post with a friend.",
          "Pausing for 1 second."
        ],
        correctAnswer: "Sharing the post with a friend."
      },
      {
        id: 9,
        question: "Why do algorithms favor controversial content?",
        options: [
          "It is usually more truthful.",
          "It generates more comments and engagement.",
          "It is easier to load."
        ],
        correctAnswer: "It generates more comments and engagement."
      },
      {
        id: 10,
        question: "What is a 'feed'?",
        options: [
          "A meal for your pet.",
          "The stream of content curated for you.",
          "A payment to the platform."
        ],
        correctAnswer: "The stream of content curated for you."
      },
      {
        id: 11,
        question: "Does the algorithm show everyone the same thing?",
        options: [
          "Yes, everyone sees the same news.",
          "No, everyone's feed is personalized.",
          "Only on weekends."
        ],
        correctAnswer: "No, everyone's feed is personalized."
      },
      {
        id: 12,
        question: "How can you 'train' your algorithm?",
        options: [
          "By yelling at your phone.",
          "By engaging with content you actually like and ignoring what you don't.",
          "You cannot change it."
        ],
        correctAnswer: "By engaging with content you actually like and ignoring what you don't."
      },
      {
        id: 13,
        question: "What is 'clickbait'?",
        options: [
          "A fishing tool.",
          "A headline designed to trick you into clicking.",
          "A type of computer mouse."
        ],
        correctAnswer: "A headline designed to trick you into clicking."
      },
      {
        id: 14,
        question: "Why do free apps collect your data?",
        options: [
          "To build a profile to target ads.",
          "To send you birthday cards.",
          "They don't collect data."
        ],
        correctAnswer: "To build a profile to target ads."
      },
      {
        id: 15,
        question: "What happens if you stop engaging with a certain type of content?",
        options: [
          "The algorithm will eventually show you less of it.",
          "It will show you more of it to annoy you.",
          "Nothing changes."
        ],
        correctAnswer: "The algorithm will eventually show you less of it."
      }
    ]
  },
  {
    id: 'echo-chambers',
    title: 'Echo Chambers',
    sections: [
      {
        heading: 'What is an Echo Chamber?',
        text: "In the vast ocean of the internet, it's easy to drift into an 'Echo Chamber'. This happens when algorithms feed you content that reinforces what you already believe, shielding you from opposing viewpoints."
      },
      {
        heading: 'Why does it happen?',
        text: "Engagement is currency. Platforms prioritize content that keeps you clicking. Often, this means showing you what makes you feel validated or sparks immediate outrage, rather than a balanced perspective."
      },
      {
        heading: 'Breaking Free',
        text: "Being in a bubble limits your growth. To break free, you must actively seek out diverse sources, question why a specific post was shown to you, and pause before reacting to emotionally charged content."
      }
    ],
    questions: [
      {
        id: 1,
        question: "What is a 'filter bubble'?",
        options: [
          "A photo editing feature.",
          "A state of isolation where you only see agreeable info.",
          "A type of screen protector."
        ],
        correctAnswer: "A state of isolation where you only see agreeable info."
      },
      {
        id: 2,
        question: "How can you break out of an echo chamber?",
        options: [
          "Delete your account.",
          "Actively follow diverse perspectives.",
          "Only read news from one source."
        ],
        correctAnswer: "Actively follow diverse perspectives."
      },
      {
        id: 3,
        question: "Which emotion tends to travel fastest on social media?",
        options: [
          "Calmness.",
          "Boredom.",
          "Outrage/Anger."
        ],
        correctAnswer: "Outrage/Anger."
      },
      {
        id: 4,
        question: "What is 'confirmation bias'?",
        options: [
          "Believing only information that supports your existing views.",
          "Checking if a website is secure.",
          "Confirming your email address."
        ],
        correctAnswer: "Believing only information that supports your existing views."
      },
      {
        id: 5,
        question: "Why are echo chambers dangerous?",
        options: [
          "They make the internet too loud.",
          "They can lead to polarization and intolerance.",
          "They use too much data."
        ],
        correctAnswer: "They can lead to polarization and intolerance."
      },
      {
        id: 6,
        question: "If you only follow people who agree with you, what are you creating?",
        options: [
          "A debate club.",
          "An echo chamber.",
          "A diverse community."
        ],
        correctAnswer: "An echo chamber."
      },
      {
        id: 7,
        question: "What is 'selective exposure'?",
        options: [
          "Taking photos in the sun.",
          "Choosing to consume only media that aligns with your views.",
          "Exposing fake news."
        ],
        correctAnswer: "Choosing to consume only media that aligns with your views."
      },
      {
        id: 8,
        question: "How does the algorithm contribute to echo chambers?",
        options: [
          "By showing you content you are likely to agree with.",
          "By blocking all news.",
          "By randomly selecting posts."
        ],
        correctAnswer: "By showing you content you are likely to agree with."
      },
      {
        id: 9,
        question: "What is a good way to fact-check a story?",
        options: [
          "Ask your best friend.",
          "Look for the same story on multiple reputable news sites.",
          "Believe the headline immediately."
        ],
        correctAnswer: "Look for the same story on multiple reputable news sites."
      },
      {
        id: 10,
        question: "What is 'polarization'?",
        options: [
          "Melting ice caps.",
          "The division of groups into opposing extremes.",
          "A type of camera lens."
        ],
        correctAnswer: "The division of groups into opposing extremes."
      },
      {
        id: 11,
        question: "Why might you feel smarter in an echo chamber?",
        options: [
          "You are learning new things.",
          "Everyone agrees with you, validating your intelligence.",
          "The content is harder to read."
        ],
        correctAnswer: "Everyone agrees with you, validating your intelligence."
      },
      {
        id: 12,
        question: "What should you do before sharing an emotional post?",
        options: [
          "Pause and verify the information.",
          "Share it immediately.",
          "Add an angry comment."
        ],
        correctAnswer: "Pause and verify the information."
      },
      {
        id: 13,
        question: "Does an echo chamber give you a full picture of reality?",
        options: [
          "Yes, it is very accurate.",
          "No, it presents a distorted or incomplete view.",
          "Only on Tuesdays."
        ],
        correctAnswer: "No, it presents a distorted or incomplete view."
      },
      {
        id: 14,
        question: "What is 'cognitive dissonance'?",
        options: [
          "A musical term.",
          "Discomfort felt when encountering conflicting information.",
          "A brain freeze."
        ],
        correctAnswer: "Discomfort felt when encountering conflicting information."
      },
      {
        id: 15,
        question: "Who benefits from keeping you in an echo chamber?",
        options: [
          "Society as a whole.",
          "Platforms and advertisers seeking your engagement.",
          "Your teachers."
        ],
        correctAnswer: "Platforms and advertisers seeking your engagement."
      }
    ]
  },
  {
    id: 'deepfakes',
    title: 'Deepfakes & AI',
    sections: [
      {
        heading: 'Seeing is No Longer Believing',
        text: "Deepfakes are realistic-looking images, videos, or audio recordings generated by AI. They can make it look like someone said or did something they never actually did."
      },
      {
        heading: 'How to Spot Them',
        text: "Look for unnatural blinking, mismatched lip syncing, weird shadows, or 'glitchy' edges around the face. AI often struggles with hands, teeth, and background text."
      },
      {
        heading: 'The Danger',
        text: "Deepfakes can spread misinformation, damage reputations, and commit fraud. Always verify shocking videos with reputable news sources before sharing."
      }
    ],
    questions: [
      {
        id: 1,
        question: "What is a deepfake?",
        options: [
          "A really deep hole.",
          "AI-generated media that impersonates reality.",
          "A fake news article written by a human."
        ],
        correctAnswer: "AI-generated media that impersonates reality."
      },
      {
        id: 2,
        question: "Which is a common sign of a deepfake video?",
        options: [
          "Unnatural blinking or lip syncing.",
          "The video is in black and white.",
          "The audio is too quiet."
        ],
        correctAnswer: "Unnatural blinking or lip syncing."
      },
      {
        id: 3,
        question: "What should you do if you see a suspicious video of a celebrity?",
        options: [
          "Share it immediately.",
          "Verify it with trusted news sources.",
          "Assume it is 100% real."
        ],
        correctAnswer: "Verify it with trusted news sources."
      },
      {
        id: 4,
        question: "What technology is primarily used to create deepfakes?",
        options: [
          "Photoshop.",
          "Artificial Intelligence (AI).",
          "Microsoft Paint."
        ],
        correctAnswer: "Artificial Intelligence (AI)."
      },
      {
        id: 5,
        question: "Can audio be deepfaked?",
        options: [
          "No, only video.",
          "Yes, AI can clone voices accurately.",
          "Only if the person has a robot voice."
        ],
        correctAnswer: "Yes, AI can clone voices accurately."
      },
      {
        id: 6,
        question: "What is a 'cheapfake'?",
        options: [
          "A deepfake that cost very little money.",
          "Media manipulated with simple editing tools (speeding up/slowing down) rather than AI.",
          "A fake product."
        ],
        correctAnswer: "Media manipulated with simple editing tools (speeding up/slowing down) rather than AI."
      },
      {
        id: 7,
        question: "Why might someone create a deepfake?",
        options: [
          "To spread misinformation or commit fraud.",
          "To help the person become famous.",
          "To improve video quality."
        ],
        correctAnswer: "To spread misinformation or commit fraud."
      },
      {
        id: 8,
        question: "Which part of the body does AI often struggle to render correctly?",
        options: [
          "The eyes.",
          "Hands and fingers.",
          "The hair."
        ],
        correctAnswer: "Hands and fingers."
      },
      {
        id: 9,
        question: "What is 'face swapping'?",
        options: [
          "Trading faces with a friend in real life.",
          "Digitally replacing one person's face with another's.",
          "Changing your makeup."
        ],
        correctAnswer: "Digitally replacing one person's face with another's."
      },
      {
        id: 10,
        question: "Are all deepfakes malicious?",
        options: [
          "Yes, always.",
          "No, they can be used for entertainment or movies.",
          "They don't exist."
        ],
        correctAnswer: "No, they can be used for entertainment or movies."
      },
      {
        id: 11,
        question: "How can you verify an image context?",
        options: [
          "Guess.",
          "Use a reverse image search tool.",
          "Ask the person who posted it."
        ],
        correctAnswer: "Use a reverse image search tool."
      },
      {
        id: 12,
        question: "What is a 'bot'?",
        options: [
          "A robot in real life.",
          "An automated program that runs tasks on the internet.",
          "A boat."
        ],
        correctAnswer: "An automated program that runs tasks on the internet."
      },
      {
        id: 13,
        question: "Why is watermarking AI content important?",
        options: [
          "To make it look cool.",
          "To help identify it as AI-generated.",
          "To prevent it from getting wet."
        ],
        correctAnswer: "To help identify it as AI-generated."
      },
      {
        id: 14,
        question: "Can deepfakes influence elections?",
        options: [
          "No, people are too smart.",
          "Yes, by spreading false information about candidates.",
          "Only in movies."
        ],
        correctAnswer: "Yes, by spreading false information about candidates."
      },
      {
        id: 15,
        question: "What is the best defense against deepfakes?",
        options: [
          "Critical thinking and verification.",
          "Deleting all social media.",
          "Wearing sunglasses."
        ],
        correctAnswer: "Critical thinking and verification."
      }
    ]
  },
  {
    id: 'data-privacy',
    title: 'Data Privacy',
    sections: [
      {
        heading: 'You Are the Product',
        text: "If a service is free, you are likely the product. Companies collect data on your location, browsing history, and contacts to build a profile and sell ads targeting you."
      },
      {
        heading: 'The Cookie Trail',
        text: "Cookies are small files websites save on your device. Some are useful (keeping you logged in), but third-party cookies track you across the web to spy on your habits."
      },
      {
        heading: 'Protecting Yourself',
        text: "Use strong, unique passwords. Enable Two-Factor Authentication (2FA). Review app permissions—does that flashlight app really need your location?"
      }
    ],
    questions: [
      {
        id: 1,
        question: "What does 'If it's free, you are the product' mean?",
        options: [
          "The app is a charity.",
          "Your data is being sold to advertisers.",
          "You have to pay later."
        ],
        correctAnswer: "Your data is being sold to advertisers."
      },
      {
        id: 2,
        question: "What is Two-Factor Authentication (2FA)?",
        options: [
          "Using two passwords.",
          "A second security step, like a code sent to your phone.",
          "Logging in twice."
        ],
        correctAnswer: "A second security step, like a code sent to your phone."
      },
      {
        id: 3,
        question: "Why should you check app permissions?",
        options: [
          "To save battery.",
          "To ensure apps only access necessary data.",
          "To make the app run faster."
        ],
        correctAnswer: "To ensure apps only access necessary data."
      },
      {
        id: 4,
        question: "What is a 'cookie' on the internet?",
        options: [
          "A sweet snack.",
          "A small file that tracks your activity on websites.",
          "A virus."
        ],
        correctAnswer: "A small file that tracks your activity on websites."
      },
      {
        id: 5,
        question: "What is 'phishing'?",
        options: [
          "Catching fish.",
          "A scam where attackers pretend to be a trusted entity to steal data.",
          "A music festival."
        ],
        correctAnswer: "A scam where attackers pretend to be a trusted entity to steal data."
      },
      {
        id: 6,
        question: "Why is using the same password everywhere dangerous?",
        options: [
          "It's hard to remember.",
          "If one account is hacked, all your accounts are at risk.",
          "It's boring."
        ],
        correctAnswer: "If one account is hacked, all your accounts are at risk."
      },
      {
        id: 7,
        question: "What is a Password Manager?",
        options: [
          "A person you hire to remember passwords.",
          "A tool that securely stores and generates complex passwords.",
          "A notebook."
        ],
        correctAnswer: "A tool that securely stores and generates complex passwords."
      },
      {
        id: 8,
        question: "What is 'metadata'?",
        options: [
          "Data about data (e.g., time and location of a photo).",
          "A new social media platform.",
          "Data that is very big."
        ],
        correctAnswer: "Data about data (e.g., time and location of a photo)."
      },
      {
        id: 9,
        question: "What does 'Incognito Mode' do?",
        options: [
          "Makes you invisible to the internet.",
          "Prevents your browser from saving history, but websites can still track you.",
          "Hides your IP address."
        ],
        correctAnswer: "Prevents your browser from saving history, but websites can still track you."
      },
      {
        id: 10,
        question: "What is a VPN?",
        options: [
          "Very Private Network.",
          "Virtual Private Network, which encrypts your internet connection.",
          "Visual Photo Network."
        ],
        correctAnswer: "Virtual Private Network, which encrypts your internet connection."
      },
      {
        id: 11,
        question: "Why is public Wi-Fi risky?",
        options: [
          "It is slow.",
          "Hackers can easily intercept data sent over unsecured networks.",
          "It costs money."
        ],
        correctAnswer: "Hackers can easily intercept data sent over unsecured networks."
      },
      {
        id: 12,
        question: "What is 'end-to-end encryption'?",
        options: [
          "A puzzle.",
          "A method where only the sender and receiver can read the messages.",
          "Deleting messages after reading."
        ],
        correctAnswer: "A method where only the sender and receiver can read the messages."
      },
      {
        id: 13,
        question: "What should you do if you receive a suspicious link?",
        options: [
          "Click it to see what it is.",
          "Do not click it; verify the sender.",
          "Forward it to a friend."
        ],
        correctAnswer: "Do not click it; verify the sender."
      },
      {
        id: 14,
        question: "What is a 'privacy policy'?",
        options: [
          "A secret document.",
          "A statement explaining how a company collects and uses your data.",
          "A rule about being quiet."
        ],
        correctAnswer: "A statement explaining how a company collects and uses your data."
      },
      {
        id: 15,
        question: "Can deleted photos be recovered?",
        options: [
          "Never.",
          "Sometimes, as they may still exist on servers or backups.",
          "Only by magic."
        ],
        correctAnswer: "Sometimes, as they may still exist on servers or backups."
      }
    ]
  }
];
