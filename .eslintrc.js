module.exports = {
    'extends': [
        'react-app',
        'plugin:prettier/recommended',
        'prettier/react'
    ],
    'plugins': [
        'react-hooks',
        'unused-imports'
    ],
    'settings': {
        'react': {
            'pragma': 'React',
            'version': '16.9.0'
        }
    },
    'globals': {
        'window': true,
        'define': true,
        'RELEASE_TIME': true,
        'DEPLOY_ENV': true,
        'REM_RATIO': true,
        'IS_DEV_ENV': true,
        'IS_MASTER_ENV': true,
        'IS_TEST_ENV': true,
        'DEPLOY_HTTP_URL': true,
        'DEPLOY_MASTER_HTTP_URL': true,
        'DEPLOY_TEST_HTTP_URL': true,
        'GIT_ADDRESS': true,
        'IS_WEBP_IMAGE_CONVERSION_ON': true,
        'APP_SETTINGS': true
    },
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
        'sourceType': 'module'
    },
    'rules': {
        'no-unused-vars': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'indent': [
            'error',
            2,
            {
                'SwitchCase': 1
            }
        ],
        'quotes': [
            'error',
            'single'
        ],
        'prettier/prettier': [
            'error',
            {
                'singleQuote': true
            }
        ],
        'semi': [
            'error',
            'always'
        ],
        'jsx-a11y/href-no-hash': 0,
        'react-hooks/rules-of-hooks': 0,
        'react-hooks/exhaustive-deps': 0,
        'unused-imports/no-unused-imports': 'error'
    }
};
