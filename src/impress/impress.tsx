import { useEffect, useRef } from 'react';

import { Step, StepProps } from './steps/step';

export function Impress(props: ImpressProps): JSX.Element {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const div = divRef.current;
        if (!div) {
            return;
        }
        const bounds = div.getBoundingClientRect();
        div.setAttribute('data-transition-dduration', props.transitionDuration?.toString()!);
        div.setAttribute('data-width', bounds.width.toString());
        div.setAttribute('data-height', bounds.height.toString());
        div.setAttribute('data-max-scale', props.maxScale?.toString()!);
        div.setAttribute('data-min-scale', props.minScale?.toString()!);
        div.setAttribute('data-perspective', props.perspective?.toString()!);

        console.log('impress init');
    }, []);

    return (
      <div ref={divRef}>
        {props.steps.map(step => (
            <Step key={step.id} {...step} />
        ))}
      </div>
    );
}

export interface ImpressProps {
    transitionDuration?: number;
    width?: number;
    height?: number;
    maxScale?: number;
    minScale?: number;
    perspective?: number;
    steps: StepProps[];
}
