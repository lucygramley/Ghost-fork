import { jsx as _jsx } from "react/jsx-runtime";
import { Skeleton, SkeletonTable } from './skeleton';
const meta = {
    title: 'Components / Skeleton',
    component: Skeleton,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        style: { width: 160, height: 16 }
    }
};
export const TableDefault = {
    render: args => _jsx(SkeletonTable, { ...args }),
    args: {
        lines: 5
    },
    parameters: {
        docs: {
            description: {
                story: 'A skeleton table component that renders multiple skeleton lines representing table rows or list items.'
            }
        }
    }
};
export const TableManyLines = {
    render: args => _jsx(SkeletonTable, { ...args }),
    args: {
        lines: 8
    },
    parameters: {
        docs: {
            description: {
                story: 'A skeleton table with many lines to show loading state for longer lists.'
            }
        }
    }
};
export const TableMinimal = {
    render: args => _jsx(SkeletonTable, { ...args }),
    args: {
        lines: 1
    },
    parameters: {
        docs: {
            description: {
                story: 'A minimal skeleton table with just one line.'
            }
        }
    }
};
