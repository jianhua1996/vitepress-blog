import { getPosts, getPostLength } from './theme/serverUtils'
import { buildBlogRSS } from './theme/rss'
import mathjax3 from 'markdown-it-mathjax3'

async function config() {
	return {
		base: '/vitepress-blog',
		title: "jianhua1996's blog",
		head: [
			[
				'meta',
				{
					name: 'author',
					content: 'JianHua & Clark Cui'
				}
			]
		],
		// cleanUrls: "with-subfolders",
		lastUpdated: true,
		themeConfig: {
			// repo: "clark-cui/homeSite",
			avator: 'logo.jpg',
			search: {
				provider: 'local'
			},
			docsDir: '/',
			// docsBranch: "master",
			posts: await getPosts(),
			pageSize: 8,
			postLength: await getPostLength(),
			nav: [
				{
					text: '🏡首页',
					link: '/'
				},
				{
					text: '🔖分类',
					link: '/tags'
				},
				{
					text: '📃归档',
					link: '/archives'
				}
			],
			socialLinks: [{ icon: 'github', link: 'https://github.com/jianhua1996' }],
			// outline: 2, //设置右侧aside显示层级
			aside: false,
			// blogs page show firewokrs animation
			showFireworksAnimation: false,
			lastUpdatedText: '最后更新于'
		},
		buildEnd: buildBlogRSS,
		markdown: {
			theme: {
				light: 'vitesse-light',
				dark: 'vitesse-dark'
			},
			config: md => {
				md.use(mathjax3)
			}
		}
	}
}
export default config()
