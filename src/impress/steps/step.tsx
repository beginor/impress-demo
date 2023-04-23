import { useRef, useEffect } from 'react';

export function Step(props: StepProps) : JSX.Element {
    const stepRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const step = stepRef.current;
        if (!step) {
            return;
        }
        step.setAttribute('data-x', props.x?.toString()!);
        step.setAttribute('data-y', props.y?.toString()!);
        step.setAttribute('data-z', props.z?.toString()!);
        step.setAttribute('data-scale', props.scale?.toString()!);
        step.setAttribute('data-rotate', props.rotate?.toString()!);
        step.setAttribute('data-rotate-x', props.rotateX?.toString()!);
        step.setAttribute('data-rotate-y', props.rotateY?.toString()!);
        step.setAttribute('data-rotate-z', props.rotateZ?.toString()!);
        console.log(`step ${props.id} init.`);
    }, []);

    return (
        <div ref={stepRef} className={props.className} data-x={props.x}></div>
    );
}

export interface StepProps {
    type: string;
    id: string;
    className?: string;
    x?: number;
    y?: number;
    z?: number;
    scale?: number;
    rotate?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
}
