import React from 'react';
import { cn } from '../../lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean; // Set to true for above-the-fold images (hero, logo)
}

/**
 * OptimizedImage component with built-in lazy loading and async decoding.
 * 
 * Usage:
 * - For hero images or logos visible immediately: <OptimizedImage priority src="..." alt="..." />
 * - For all other images: <OptimizedImage src="..." alt="..." />
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    className,
    priority = false,
    ...props
}) => {
    return (
        <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            className={cn(className)}
            {...props}
        />
    );
};
