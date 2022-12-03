import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import { join } from 'path';
import * as egg from '@midwayjs/web';
import * as view from '@midwayjs/view-nunjucks';

import { WeatherErrorFilter } from './filter/weather';

@Configuration({
  imports: [egg, view],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: koa.Application;

  async onReady() {
    this.app.useFilter([WeatherErrorFilter]);
  }
}
