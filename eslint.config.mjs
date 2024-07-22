// eslint.config.mjs
import antfu from '@antfu/eslint-config';

export default antfu({
    stylistic: {
        indent: 4, // 4, or 'tab'
        quotes: 'single', // or 'double'
        semi: true,
    },
    vue: {
        overrides: {
            'vue/block-order': ['error', { order: ['template', 'script', 'style'],
            }],
        },
    },
});
