export default {
  entry: './release/index.js',
  dest: './release/bundles/ngx-notification-bar.umd.js',
  format: 'umd',
  moduleName: 'ngx-notification-bar',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common'
  }
}