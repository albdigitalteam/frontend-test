module.exports = {
	presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./'],
				extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
				alias: {
					'#root': '.',
					'#animations': './src/animations',
					"#actions": './src/store/modules',
					'#interfaces': './src/interfaces',
					'#config': './src/config',
					'#theme': './src/theme',
					'#hooks': './src/hooks',
					'#store': './src/store',
					'#locale': './src/locale',
					'#components': './src/components',
					'#services': './src/services',
				},
			},
		],
	],
};
