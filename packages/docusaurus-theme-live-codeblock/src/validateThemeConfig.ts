/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Joi} from '@docusaurus/utils-validation';
import type {
  ThemeConfig as BaseConfig,
  Validate,
  ValidationResult,
} from '@docusaurus/types';

export interface ThemeConfig extends BaseConfig {
  liveCodeBlock: {
    playgroundPosition: 'bottom' | 'top';
  };
}

const DEFAULT_CONFIG = {
  playgroundPosition: 'bottom',
};

const Schema = Joi.object({
  liveCodeBlock: Joi.object({
    playgroundPosition: Joi.string()
      .equal('top', 'bottom')
      .default(DEFAULT_CONFIG.playgroundPosition),
  })
    .label('themeConfig.liveCodeBlock')
    .default(DEFAULT_CONFIG),
});

export {DEFAULT_CONFIG, Schema};

export function validateThemeConfig({
  validate,
  themeConfig,
}: {
  validate: Validate<ThemeConfig>;
  themeConfig: ThemeConfig;
}): ValidationResult<ThemeConfig> {
  return validate(Schema, themeConfig);
}
