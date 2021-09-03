/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {ComponentType} from 'react';
import Playground from '@theme/Playground';
import ReactLiveScope from '@theme/ReactLiveScope';
import CodeBlock from '@theme-init/CodeBlock';
import type {Props} from '@theme/CodeBlock';

const withLiveEditor = (Component: ComponentType<Props>) => {
  const WrappedComponent = (props: {live?: boolean} & Props) => {
    return props.live ? (
      <Playground scope={ReactLiveScope} {...props} />
    ) : (
      <Component {...props} />
    );
  };

  return WrappedComponent;
};

export default withLiveEditor(CodeBlock);
