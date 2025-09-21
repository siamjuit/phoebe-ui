import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";

export interface CarouselProps{
    children: ReactNode[]
    className?: string
    autoplay?: boolean
    autoplayInterval?: number // in(ms)
    showIndicators?: boolean
}

export function Carousel({
    children,
    className,
    autoplay = false,
    autoplayInterval = 3000,
    showIndicators = true,
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const autoplayRef = useRef<ReturnType<typeof setTimeout>>()

    const totalSlides = children.length

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    const goToPrevious = () => {
        setCurrentIndex(prev => (prev === 0 ? totalSlides - 1 : prev - 1))
    }

    const goToNext = () => {
        setCurrentIndex(prev => (prev === totalSlides - 1 ? 0 : prev + 1))
    }

    useEffect(() => {
        if (autoplay) {
            autoplayRef.current = setInterval(goToNext, autoplayInterval)
            return () => {
                if (autoplayRef.current) {
                    clearInterval(autoplayRef.current)
                }
            }
        }
        return undefined
    }, [autoplay, autoplayInterval])

    const handleMouseLeave = () => {
        if (autoplay) {
            autoplayRef.current = setInterval(goToNext, autoplayInterval)
        }
    }

    const handleMouseEnter = () => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current)
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        switch (event.key) {
            case 'ArrowLeft':
                event.preventDefault()
                goToPrevious()
                break
            case 'ArrowRight':
                event.preventDefault()
                goToNext()
                break
        }
    }

    return (
        <div
            className={cn('relative focus:outline-none', className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Carousel"
            aria-leave="polite"
        >
            <div
                ref={containerRef}
                className="overflow-hidden rounded-lg"
            >
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {children.map((child, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0"
                            aria-hidden={index !== currentIndex}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            
            {/* Navigation buttons */}
            <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Previous slide"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Next slide"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Indicators */}
            {showIndicators && (

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {children.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={cn(
                                'w-2 h-2 rounded-full transition-colors focus:outline-none focus:ring-blue-500 focus:ring-offset-1',
                                index === currentIndex
                                    ? 'bg-white'
                                    : 'bg-white/50 hover:bg-white/75'
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Screen reader announcement */}
            <div className="sr-only" aria-live="assertive">
                Slide {currentIndex + 1} of {totalSlides}
            </div>

        </div>
    )
}