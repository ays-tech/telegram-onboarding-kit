import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          
          
          
          media: {
            type: 'sticker',
            src: import('./assets/stickers/sunmoon.tgs'),
            size: 350,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Hi there!',
          description:
            "I AM 🌟 NANEE PUMP ✨<br><br>THE ANCIENT FAIRY 🧚‍♀️ SUN GODDESS 🌞<br><br>YOU CAN CALL ME 💸 NANEE 💖",
            button: 'Next',
        },

        // image
        {
          media: {
            type: 'image',
            src: import('./assets/img/onboarding_two.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'WHO IS NANEE PUMP',
          description:
            "NANEE PUMP enters the SOLANA Ecosystem via moonshot to babysit and keep the House of Memes in order,<br> by ensuring everyone is well behaved and performing above market standards.<br><br>",
          button: 'Next',
        },

        {
          media: {
            type: 'image',
            src: import('./assets/img/onboarding_two.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'WHERE IS SHE?',
          description:
            "The Ancient Fairy Sun goddess resides in the Solar Kingdom and oversees the entire Sol meme-sphere with a touch of her fairy energy.",
          button: 'Next',
        },

        {
          media: {
            type: 'image',
            src: import('./assets/img/onboarding_3.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'HERE TO STAY!',
          description:
            "The 🐶 Dogs, 🐱 Cats, 🐸 Frogs, 🐷 Pigs, 🐒 Monkeys, 🦛 Hippos, and 🐔 Chickens will now be well-behaved,because the magic-wand-waving 🧚‍♀️✨ Fairy Sun Goddess ☀️ is Here.",
          button: 'Next',
        },


        {
          media: {
            type: 'image',
            src: import('./assets/img/naneedp.webp'),
        
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'GLOBAL?',
          description:
            "The Ultimate Solana Memecoin is here. The Fairy takes centre stage.The SOLANA ecosystem will never be the same again.",
          button: 'Next',
        },




        
       
        // video
        {
          media: {
            type: 'video',
            src: import('./assets/img/final_onbording.gif'),
            poster: import('./assets/img/final_onbording.gif'),
            style: 'aspect-ratio: 780/936', // here we manually set video aspect-ratio (default is 16:9)
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Videos',
          description:
            "find me on social media",
          button: 'Next',
        },

        // list
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_juggling.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Lists',
          description:
            'Lists can be used to showcase <b>features</b> of your product. Items support customizable icons',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 30,
              },
              text: 'Some cool feature',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: 'Some very cool feature',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: 'Some extremely cool feature',
            },
          ],
          button: 'Next',
        },

        // "everything is customizable" slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_xray.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Everything is customizable',
          description: '',
          textAlign: 'center',
          list: [
            '<b>CSS styles</b>: extend primary colors from Telegram or set yours',
            'Button text and actions (look down)',
            'Use our carefully crafted <b>presets</b> or easily create your own',
          ],
          button: 'Super-Duper Next',
        },

        // slide with other features
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_cool.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Some other features:',
          description: '',
          list: [
            'One-click 0$ <b>deploy</b> on GitHub Pages',
            'Language and currency localization',
            'Buttons with <b>haptic</b> feedback',
            'Content pre-loading for high speed',
            '<b>Low-code</b> approach to building onboardings',
            'Many examples/presets',
            "And many more... (see <a href='https://github.com/Easterok/telegram-onboarding-kit' target='_blank'>GitHub</a>)",
          ],
          button: 'Next',
        },

        // go to paywall slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_knife.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          textAlign: 'center',
          title: 'But onboarding slides are not enough...',
          description: "Let's go to Paywall",
          button: {
            content: 'Go to Paywall',
            to: '/paywall',
          },
        },
      ],
    },

    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/duck_money.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Your beautiful Paywall',
      list: [
        'Adjustable product cards',
        '<b>👛 Wallet Pay</b> and <b>Telegram Payments</b> ready. Add custom methods easily',
        'Subscriptions or One-time payments',
      ],
      products: [
        {
          id: '1_month_subscription',
          title: '1 month subscription',
          description: '2$/month',
          discount: '',
          price: 2,
        },
        {
          id: '1_year_subscription',
          title: '1 year subscription',
          description: '1$/month',
          discount: 'Discount 50%',
          price: 12,
        },
        {
          id: 'lifetime_access',
          title: 'Lifetime access',
          description: '20$ once',
          discount: 'Best offer',
          price: 20,
        },
      ],
      mainButtonText: 'Buy for {price}',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});