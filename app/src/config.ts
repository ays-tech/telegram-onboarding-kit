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
            src: import('./assets/img/buringman.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'BurningMen',
          description: 
            "The developer burned 40% of the total supply, boosting scarcity and value for the community. 🔥",
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
          title: 'LFG',
          description:
            "Hope you are ready for whats coming?",
          button: 'Next',
        },

        // list
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/longcat.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'lets connect',
          description:
            'Stay connected with us on: <br> ' +
            '<a href="https://x.com/NANEEpump_SOL" target="_blank">🐦 Twitter</a>, ' +
            '<a href="https://naneepump.com/" target="_blank">🌐 Website</a>, ' +
            '<a href="https://dexscreener.com/solana/gvkx1brjdakwcv57q6a8ajljtbb9ktjxvfesgvopjxml" target="_blank">📊 DexScreener</a>.',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 30,
              },
              text: '<a href="https://x.com/NANEEpump_SOL" target="_blank">Follow us on Twitter 🐦</a>',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: '<a href="https://naneepump.com/" target="_blank">Visit our Website 🌐</a>',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: '<a href="https://dexscreener.com/solana/gvkx1brjdakwcv57q6a8ajljtbb9ktjxvfesgvopjxml" target="_blank">Check us out on DexScreener 📊</a>',
            },
          ],
          button: 'Next',
        },

        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_knife.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          textAlign: 'center',
          title: 'Big Things Are Coming Soon... 🚀',
          description: 
            "Exciting things are on the way for our community! 🎉<br><br>" + 
            "We're gearing up to launch a mini app based entirely on the NANEE ecosystem. 🌟<br><br>" +
            "Stay tuned and follow our handles to be the first to know about updates and exclusive features! 🚀",
            button: 'Next',        },
        
      ],
    },
    
  ],
});