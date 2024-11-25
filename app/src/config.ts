import { defineConfig } from '@tok/generation';

export default defineConfig({
  pages: [
    {
      slides: [
        // Welcome slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/naneed.png'), // Updated sticker
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Welcome to the World of $NANEE',
          description:
            "I AM NANEE PUMP, 'THE ANCIENT FAIRY SUN ☀ GODDESS'. <br> YOU CAN CALL ME $NANEE. <br> BUY $NANEE NOW!",
          button: 'LFG',
          links: [
            {
              text: 'Follow us on Twitter',
              href: 'https://twitter.com/yourtwitterhandle',
            },
            {
              text: 'Check our DEX Screener',
              href: 'https://www.dexscreener.com/yourcoin',
            },
            {
              text: 'Visit our Website',
              href: 'https://www.yourwebsite.com',
            },
          ],
        },

        // Burnt Blessing slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_fire.tgs'), // Updated sticker
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Who Is NANEE PUMP?',
          description:
            "NANEE PUMP enters the SOLANA Ecosystem via moonshot to babysit and keep the House of Memes in order, by ensuring everyone is well behaved and performing above market standards. <br> The Ancient Fairy Sun goddess resides in the Solar Kingdom and oversees the entire Sol meme-sphere with a touch of her fairy energy.",
          button: 'Next',
          links: [
            {
              text: 'Follow us on Twitter',
              href: 'https://twitter.com/yourtwitterhandle',
            },
            {
              text: 'Check our DEX Screener',
              href: 'https://www.dexscreener.com/yourcoin',
            },
            {
              text: 'Visit our Website',
              href: 'https://www.yourwebsite.com',
            },
          ],
        },

        // Achievements slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_thumbs_up.tgs'), // Updated sticker
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'The Fairy Sun Goddess',
          description:
            "The Dogs, Cats, Frogs, Pigs, Monkeys, Hippos, and Chickens will now be well behaved, because the magic-wand-waving Fairy Sun Goddess is Here. <br> Inspired by Nanny Plum, a major character in 'Ben & Holly's Little Kingdom'. She is a Fairy residing in the Little Kingdom, working as a housekeeper for the Little Castle, and is also Holly's Nanny.",
          button: 'Next',
          links: [
            {
              text: 'Follow us on Twitter',
              href: 'https://twitter.com/yourtwitterhandle',
            },
            {
              text: 'Check our DEX Screener',
              href: 'https://www.dexscreener.com/yourcoin',
            },
            {
              text: 'Visit our Website',
              href: 'https://www.yourwebsite.com',
            },
          ],
        },

        // Why Join slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_love.tgs'), // Updated sticker
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'The Ultimate Solana Memecoin',
          description:
            "The Ultimate Solana Memecoin is here. <br> The Fairy takes center stage, and the SOLANA ecosystem will never be the same again. <br> Contract Address: GVKx1BrjdaKwcV57q6a8aJLjtbb9KtjXVfESGvopJXML <br> Copy Address and Join the Movement!",
          button: 'Join Now',
          links: [
            {
              text: 'Follow us on Twitter',
              href: 'https://twitter.com/yourtwitterhandle',
            },
            {
              text: 'Check our DEX Screener',
              href: 'https://www.dexscreener.com/yourcoin',
            },
            {
              text: 'Visit our Website',
              href: 'https://www.yourwebsite.com',
            },
          ],
        },

        // Vision and Vibe slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_xray.tgs'), // Updated sticker
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Find NANEE on Social Media',
          description: "Follow NANEE PUMP on social media for the latest updates and join the $NANEE community for more amazing adventures!",
          button: 'Explore',
          links: [
            {
              text: 'Follow us on Twitter',
              href: 'https://twitter.com/yourtwitterhandle',
            },
            {
              text: 'Check our DEX Screener',
              href: 'https://www.dexscreener.com/yourcoin',
            },
            {
              text: 'Visit our Website',
              href: 'https://www.yourwebsite.com',
            },
          ],
        },
      ],
    },
  ],
});
