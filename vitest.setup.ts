
import { i18n } from './src/plugins/UnnnicSystem.ts';
import { UnnnicSystem } from './src/plugins/UnnnicSystem';
import { config } from '@vue/test-utils';

config.global.plugins = [i18n, UnnnicSystem];
config.global.mocks = {
    $t: (msg: string) => msg,
};
