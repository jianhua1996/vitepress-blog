import { getPosts, getPostLength } from './theme/serverUtils'
import { buildBlogRSS } from './theme/rss'

async function config() {
  return {
    base: '/vitepress-blog/',
    lang: 'en-US',
    title: 'jianhua1996的博客',
    description: '',
    head: [
      [
        'link',
        {
          rel: 'icon',
          type: 'image/svg',
          href: '/horse.svg'
        }
      ],
      [
        'meta',
        {
          name: 'author',
          content: 'Clark Cui'
        }
      ],
      [
        'meta',
        {
          property: 'og:title',
          content: 'Home'
        }
      ],
      [
        'meta',
        {
          property: 'og:description',
          content: 'Home of Clark Cui'
        }
      ]
    ],
    // cleanUrls: "with-subfolders",
    lastUpdated: false,
    themeConfig: {
      // repo: "clark-cui/homeSite",
      logo: '/horse.svg',
      avator: '/logo.jpg',
      search: {
        provider: 'local'
      },
      docsDir: '/',
      // docsBranch: "master",
      posts: await getPosts(),
      pageSize: 5,
      postLength: await getPostLength(),
      nav: [
        {
          text: '🏡Blogs',
          link: '/'
        },
        {
          text: '🔖Tags',
          link: '/tags'
        },
        {
          text: '📃Archives',
          link: '/archives'
        }
      ],
      socialLinks: [{ icon: 'github', link: 'https://github.com/jianhua1996' }],
      // outline: 2, //设置右侧aside显示层级
      aside: false,
      // blogs page show firewokrs animation
      showFireworksAnimation: false
    },
    buildEnd: buildBlogRSS,
    markdown: {
      config: md => {
        md.use(require('markdown-it-mathjax3'))
      }
    }
  }
}
export default config()
