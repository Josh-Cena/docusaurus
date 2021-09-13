/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/// <reference types="@docusaurus/theme-classic" />
/// <reference types="@docusaurus/module-type-aliases" />

declare module '@philpl/buble' {
  import type {
    TransformOptions as OriginalOptions,
    TransformOutput,
  } from 'buble';

  // The only option that's not typed :/
  export interface TransformOptions extends OriginalOptions {
    transforms: OriginalOptions['transforms'] & {asyncAwait?: boolean};
  }
  export const features: string[];
  export {TransformOutput};
  export function transform(
    content: string,
    options?: TransformOptions,
  ): TransformOutput;
}

declare module '@theme/Playground' {
  import type {RefObject} from 'react';
  import type {LiveProvider, LiveProviderProps} from 'react-live';

  export interface Props extends LiveProviderProps {
    // Seems a bit hacky, but
    // (props: LiveProviderProps) => <LiveProvider {...props} />
    // doesn't work because ref is contravariant
    ref: RefObject<LiveProvider>;
  }

  export default function Playground(props: LiveProviderProps): JSX.Element;
}

declare module '@theme-init/CodeBlock' {
  import CodeBlock from '@theme/CodeBlock';

  export default CodeBlock;
}
