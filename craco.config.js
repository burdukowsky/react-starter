const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#2195F2',
              '@link-color': '#1890ff',
              '@success-color': '#52c41a',
              '@warning-color': '#faad14',
              '@error-color': '#f5222d',
              '@font-size-base': '14px',
              '@heading-color': 'rgba(0, 0, 0, 0.8)',
              '@text-color': '#000000DD',
              '@text-color-secondary': '#999999',
              '@disabled-color': 'rgba(0, 0, 0, 0.25)',
              '@border-radius-base': '0px',
              '@border-color-base': '#BDBDBD',
              '@box-shadow-base': '0px 6px 24px #00000014'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
