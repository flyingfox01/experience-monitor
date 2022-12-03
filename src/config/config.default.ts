import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';

export default (appInfo: MidwayAppInfo) => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1670041256036_5847',
    egg: {
      port: 7001,
    },
    // security: {
    //   csrf: false,
    // },
    view: {
      defaultViewEngine: 'nunjucks',
    },
  } as MidwayConfig;
};
