const path = require('path');
const ResolverFactory = require('enhanced-resolve/lib/ResolverFactory');
const NodeJsInputFileSystem = require('enhanced-resolve/lib/NodeJsInputFileSystem');
const CachedInputFileSystem = require('enhanced-resolve/lib/CachedInputFileSystem');

/**
 * postcss-import 实验功能
 * 请忽略
 */
const resolver = ResolverFactory.createResolver({
  alias: {
    '@src': path.resolve(process.cwd(), 'src'),
  },
  extensions: ['.less'],
  modules: ['src', 'node_modules'],
  useSyncFileSystemCalls: true,
  fileSystem: new CachedInputFileSystem(
    new NodeJsInputFileSystem(),
    60000 /* CACHED_DURATION */
  ),
});

module.exports = {
  plugins: {
    /**
     * 修复 flex 书写中可能带来的 bug,
     * 这样有助于兼容更多浏览器
     */
    'postcss-flexbugs-fixes': {},
    /**
     * 自动加前缀
     */
    autoprefixer: {
      browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
      flexbox: 'no-2009',
    },
    /**
     * 将指定的 px 转换成 rem,
     * 也可以通过该工具转换成 viewpoint
     */
    // 'postcss-px-to-viewport': {
    //   viewportWidth: 19200,
    //   viewportUnit: 'rem'
    // },
    /**
     * 实验性功能, 暂不需要了解
     * https://github.com/postcss/postcss-import/issues/190
     */
    'postcss-import': false && {
      resolve: (id, basedir) => resolver.resolveSync({}, basedir, id),
    },
    '@xfe-team/webp-in-css/postcss-plugin': {
      cssModule: true,
    },
  },
};
