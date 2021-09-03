/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/// <reference types="@docusaurus/module-type-aliases" />

declare module '@philpl/buble' {
  // eslint-disable-next-line import/no-unresolved
  import type {
    TransformOptions as OriginalOptions,
    TransformOutput,
  } from '@types/buble';

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
  // import type {Component, LegacyRef} from 'react';
  import type {LiveProviderProps} from 'react-live';
  import type {Props as CodeBlockProps} from '@theme/CodeBlock';

  export interface Props extends LiveProviderProps {
    children?: CodeBlockProps['children'];
  }

  export default function Playground(props: Props): JSX.Element;
}

declare module '@theme-init/CodeBlock' {
  import CodeBlock from '@theme/CodeBlock';

  export default CodeBlock;
}
