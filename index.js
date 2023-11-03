const propertyGroups = require('./groups');

module.exports = {
	extends: 'stylelint-config-standard',
	plugins: ['stylelint-order'],
	rules: {
		'order/properties-order': [
			propertyGroups,
			{
				unspecified: 'bottomAlphabetical',
			},
		],
	},
};
