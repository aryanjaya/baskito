/// <reference types="ziggy-js" />

import route, { Config } from "ziggy-js";

export const Ziggy: Config;

export type ZiggyRoute = typeof route;

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $route: ZiggyRoute;
  }
}
