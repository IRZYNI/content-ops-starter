import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

// Define the BadgeProps interface
interface BadgeProps {
    label: string;
    color?: string;  // Optional color prop
    styles?: {
        self?: object;  // Optional style object
    };
    className?: string;  // Optional className for custom styles
    'data-sb-field-path'?: string;  // Optional field path for accessibility
}

// Define the Badge component with typed props
export default function Badge(props: BadgeProps) {
    const { label, color = 'text-primary', styles, className } = props;
    const fieldPath = props['data-sb-field-path'];

    if (!label) {
        return null;
    }

    return (
        <div
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-badge',
                color,
                className,
                styles?.self ? mapStyles(styles?.self) : undefined
            )}
            data-sb-field-path={fieldPath}
        >
            <span className="uppercase tracking-wider" {...(fieldPath && { 'data-sb-field-path': '.label' })}>
                {label}
            </span>
        </div>
    );
}
