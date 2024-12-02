import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

// Define a type for the props
interface BackgroundImageProps {
    url: string;
    className?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    backgroundRepeat?: string;
    opacity?: number;
}

export default function BackgroundImage(props: BackgroundImageProps) {
    const { url, className, backgroundSize, backgroundPosition, backgroundRepeat, opacity } = props;

    if (!url) {
        return null; // If there is no URL, return null to avoid rendering
    }

    return (
        <div
            className={classNames(
                mapStyles({
                    backgroundSize: backgroundSize ?? 'auto',
                    backgroundPosition: backgroundPosition ?? 'center',
                    backgroundRepeat: backgroundRepeat ?? 'no-repeat',
                }),
                className
            )}
            style={{
                backgroundImage: `url('${url}')`,
                opacity: (opacity ?? 100) * 0.01, // Convert opacity to a percentage
            }}
        />
    );
}
