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
            type: 'image',
            src: import('./assets/img/snoosleep.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'WHO IS SNOO?',
          description:
            "Snoo is the laziest, cutest, and most profitable meme coin in the Solana ecosystem. 💤<br>Our mascot inspires everyone to chill, hold, and enjoy the ride to the moon! 🌙",
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
            'Join the SnooCrew: <br> ' +
            '<a href="https://x.com/coinsnoo" target="_blank">🐦 Twitter</a>, ' +
            '<a href="#" target="_blank">🌐 Website(coming soon)</a>, ' +
            '<a href="#" target="_blank">📊 DexScreener(coming soon)</a>.',
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
              text: '<a href="https://snoocoin.com/" target="_blank">Visit our Website 🌐</a>',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: '<a href="#" target="_blank">Track us on DexScreener(coming soon) 📊</a>',
            },
          ],
          button: 'Next',
        },

        {
          media: {
            type: 'image',
            src: import('./assets/img/snoosleep.webp'),
            size: 250,
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
