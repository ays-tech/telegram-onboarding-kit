import { defineConfig } from '@tok/generation';

export default defineConfig({
  pages: [
    {
      slides: [
        // Welcome slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Welcome to the World of $NANEE',
          description:
            "I AM NANEE PUMP 'THE ANCIENT FAIRY 🧚 SUN GODDESS' YOU CAN CALL ME $NANEE.",
          button: 'Next',
          links: [
            {
              text: 'Follow us on Twitter',
              href: 'https://twitter.com/yourtwitterhandle', // Replace with actual Twitter handle
            },
            {
              text: 'Check our DEX Screener',
              href: 'https://www.dexscreener.com/yourcoin', // Replace with your coin's DEX screener link
            },
            {
              text: 'Visit our Website',
              href: 'https://www.yourwebsite.com', // Replace with your website link
            },
          ],
        },

        // Burnt Blessing slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_money.tgs'), // Replace with actual sticker path
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'The Burnt Blessing 🔥',
          description:
            "🔥 **40% of the total supply** has been burnt by the dev – no turning back! <br> 🌟 What does this mean? More value for YOU, our holders. <br> 🚀 A community-focused memecoin with scarcity baked in from Day 1!",
          button: 'Next',
          links: [
            {
              text: 'Follow us on Twitter',
              href: 'https://twitter.com/yourtwitterhandle', // Replace with actual Twitter handle
            },
            {
              text: 'Check our DEX Screener',
              href: 'https://www.dexscreener.com/yourcoin', // Replace with your coin's DEX screener link
            },
            {
              text: 'Visit our Website',
              href: 'https://www.yourwebsite.com', // Replace with your website link
            },
          ],
        },

        // Achievements slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_cool.tgs'), // Replace with actual sticker path
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Achievements in Just 48 Hours ⏳',
          description:
            "🎉 Only **48 hours old**, and here’s what $NANEE has already achieved: <br> 🌌 **All-Time High Market Cap**: $1.3M 🚀 <br> 👥 **Over 1,500 holders** joining the Fairy Goddess movement! <br> 💎 Lightning-fast growth with **hype and momentum unmatched!**",
          button: 'Next',
          links: [
            {
              text: 'Follow us on Twitter',
              href: 'https://twitter.com/yourtwitterhandle', // Replace with actual Twitter handle
            },
            {
              text: 'Check our DEX Screener',
              href: 'https://www.dexscreener.com/yourcoin', // Replace with your coin's DEX screener link
            },
            {
              text: 'Visit our Website',
              href: 'https://www.yourwebsite.com', // Replace with your website link
            },
          ],
        },

        // Why Join slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_love.tgs'), // Replace with actual sticker path
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Why Join the $NANEE Community?',
          description:
            "🌟 **A Memecoin with Magic**: Fun, community, and insane potential. <br> 🔥 **Hyper Deflationary**: Burn mechanism ensures value rises. <br> 🌠 **Community First**: Transparent devs and a growing army of believers. <br> 🎮 **Future Utilities**: Gamification, staking, NFTs – the fairy dust keeps coming!",
          button: 'Next',
          links: [
            {
              text: 'Follow us on Twitter',
              href: 'https://twitter.com/yourtwitterhandle', // Replace with actual Twitter handle
            },
            {
              text: 'Check our DEX Screener',
              href: 'https://www.dexscreener.com/yourcoin', // Replace with your coin's DEX screener link
            },
            {
              text: 'Visit our Website',
              href: 'https://www.yourwebsite.com', // Replace with your website link
            },
          ],
        },

        // Vision and Vibe slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_xray.tgs'), // Replace with actual sticker path
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Our Vision and Vibe',
          description:
            "✨ **$NANEE is More Than a Memecoin** – It’s a movement! <br> 💖 Spread positivity, embrace the hype, and chase those gains. <br> 🌟 Together, we’ll make $NANEE shine brighter than the sun!",
          button: 'Next',
          links: [
            {
              text: 'Follow us on Twitter',
              href: 'https://twitter.com/yourtwitterhandle', // Replace with actual Twitter handle
            },
            {
              text: 'Check our DEX Screener',
              href: 'https://www.dexscreener.com/yourcoin', // Replace with your coin's DEX screener link
            },
            {
              text: 'Visit our Website',
              href: 'https://www.yourwebsite.com', // Replace with your website link
            },
          ],
        },

        // Are You Ready slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'), // Replace with actual sticker path
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Are You Ready? 🌈',
          description:
            "🌞 Be part of history as $NANEE conquers the memecoin universe. <br> 💫 Follow us on social media, join our raids, and spread the word. <br> 🚀 Let’s pump it to the moon and beyond with **$NANEE!**",
          button: 'Join Now',
          links: [
            {
              text: 'Follow us on Twitter',
              href: 'https://twitter.com/yourtwitterhandle', // Replace with actual Twitter handle
            },
            {
              text: 'Check our DEX Screener',
              href: 'https://www.dexscreener.com/yourcoin', // Replace with your coin's DEX screener link
            },
            {
              text: 'Visit our Website',
              href: 'https://www.yourwebsite.com', // Replace with your website link
            },
          ],
        },

        // Amazing Adventures slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_juggling.tgs'), // Replace with actual sticker path
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'The Amazing $NANEE Adventures ✨',
          description:
            "🚀 **$NANEE Adventures** await as we journey through: <br> 🔥 **Tokenomics Reimagined**: Innovating the deflationary model. <br> 🎮 **Gaming Ecosystem**: Coming soon – play to earn and stake $NANEE! <br> 🏆 **Exclusive Events & Airdrops**: Stay tuned for exciting rewards as we grow!",
          button: 'Next',
          links: [
            {
              text: 'Follow us on Twitter',
              href: 'https://twitter.com/yourtwitterhandle', // Replace with actual Twitter handle
            },
            {
              text: 'Check our DEX Screener',
              href: 'https://www.dexscreener.com/yourcoin', // Replace with your coin's DEX screener link
            },
            {
              text: 'Visit our Website',
              href: 'https://www.yourwebsite.com', // Replace with your website link
            },
          ],
        },
      ],
    },
  ],
});
