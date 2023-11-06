const groups = [
	{
		properties: ['all'],
	},
	{
		groupName: 'position',
		properties: [
			'position',
			'top',
			'right',
			'bottom',
			'left',
			'inset',
			'inset-block',
			'inset-block-start',
			'inset-block-end',
			'inset-inline',
			'inset-inline-start',
			'inset-inline-end',
		],
	},
	{
		groupName: 'Display',
		properties: ['box-sizing', 'display'],
	},
	{
		groupName: 'Grid',
		properties: [
			'grid',
			'grid-area',
			'grid-auto-rows',
			'grid-row',
			'grid-row-start',
			'grid-row-end',
			'grid-auto-columns',
			'grid-column',
			'grid-column-start',
			'grid-column-end',
			'grid-template',
			'grid-template-areas',
			'grid-template-rows',
			'grid-template-columns',
		],
	},
	{
		groupName: 'Flex',
		properties: [
			'flex',
			'flex-basis',
			'flex-direction',
			'flex-flow',
			'flex-grow',
			'flex-shrink',
			'flex-wrap',
		],
	},
	{
		groupName: 'Layout',
		properties: [
			'align-content',
			'align-items',
			'align-self',
			'justify-content',
			'justify-items',
			'justify-self',
			'gap',
			'row-gap',
			'column-gap',
		],
	},
];

module.exports = groups;
