import type {ReactNode} from 'react';

export interface ChildrenProps {
    children?: ReactNode;
}

export type ReadonlyChildrenProps = Readonly<ChildrenProps>;
