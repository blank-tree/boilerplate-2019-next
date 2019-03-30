const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
module.exports = withTypescript(withSass({
	wepack: config => {
		config.node = {
			fs: 'empty'
		}
		return config;
	}
}));
