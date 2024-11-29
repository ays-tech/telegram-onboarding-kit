import { defineConfig } from '@tok/generation';

export default defineConfig({
  // Localization options can be added if needed in the future

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'image',
            src: import('./assets/img/snoosleep.webp'),
           
          },
          shape: 'square',
          pagination: 'count',
          title: 'Hello',
          description:
            "I AM SNOO, THE CHILL MEME COIN THAT BRINGS GAINS WHILE YOU RELAX! 💤<br>Call me SNOO.<br><br>" ,
          button: 'Next',
        },

        // image
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/snooanim.tgs'),
          },
          shape: 'square',
          pagination: 'count',
          title: 'WHO IS SNOO?',
          description:
          "Snoo is the laziest, cutest, and most profitable meme coin in the Solana ecosystem. 💤<br>Our lovable mascot Snoo inspires holders to relax, enjoy the journey, and aim for the stars. While Snoo isn’t promising moonshots or instant riches, the magic of holding could lead to incredible opportunities down the line. 🌙✨<br>Chill, hold, and see where Snoo’s cosmic energy takes you—because those who stay for the ride often find themselves winning big!",
          button: 'Next',
        },

        {
          media: {
            type: 'image',
            src: import('./assets/img/relaxsnoo.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'WHERE DOES SNOO CHILL?',
          description:
            "Snoo resides in the Relaxation Realm, a land where degens can unwind and watch their wallets grow through the magical Snore Tax. 🌞💤",
          button: 'Next',
        },

        

        // video
        {
          media: {
            type: 'image',
            src: import('./assets/img/snoomoon.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Are You Ready?',
          description: 'Buckle up! SnooCoin is here to take you to the moon while you chill. 🚀💤',
          button: 'Next',
        },

        // list
        {
          media: {
            type: 'image',
            src: import('./assets/img/snoosocial.webp'),
          },
          shape: 'square',
          pagination: 'count',
          title: 'Stay Connected',
          description:
            'Join the SnooCrew: <br> ',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 30,
              },
              text: '<a href="https://x.com/coinsnoo" target="_blank">Follow us on Twitter 🐦</a>',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: '<a href="#" target="_blank">website(coming soon)</a>',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: '<a href="#" target="_blank">DexScreener(coming soon) 📊</a>',
            },
          ],
          button: 'Next',
        },

        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/workingsnoo.tgs'),
            
          },
          shape: 'square',
          pagination: 'count',
          textAlign: 'center',
          title: 'Exciting Times Ahead... 🚀',
          description:
            "SnooCoin is just getting started! 🎉<br><br>Exciting developments are on the horizon that will take SnooCoin to the next level. 🌟<br><br>Stay tuned for updates and be the first to access exclusive new features that will delight and surprise our community! 🚀",
          button: 'ALL DONE',
        },
      ],
    },
  ],
});
