module.exports = {
	// 其它配置
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			{ text: 'HTML', link: '/html/' },
			{ text: 'CSS', link: '/CSS/' },
			{ text: 'JavaScript', link: '/JavaScript/' }
		],
		sidebar: [
			{
				title: '前端三剑客',
				collapsable: false,
				children: [
					'/CSS/',
					'/HTML/',
					'/JavaScript/'
				]
			}
		]
	}
	
	
};