import { useEffect, useRef, useState } from 'react';

import { Impress, ImpressProps } from './impress/impress';

import './app.css';

export default function App(props: AppProps): JSX.Element {

    const appRef = useRef<HTMLDivElement>(null);
    const [impressProps, setImpressProps] = useState<ImpressProps>();

    useEffect(() => {
        if (!appRef.current) {
            return;
        }
        fetch('assets/impress.json').then(res => res.json()).then(json => {
            const config = json as ImpressProps;
            setImpressProps(config);
        });
    }, []);

    return (
      <div className='page-wrapper app' ref={appRef}>
        {!!impressProps && (
          <Impress {...impressProps} />
        )}
      </div>
    );
}

export interface AppProps {
    message?: string;
}
