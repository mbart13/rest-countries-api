import { Suspense, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';
import Spinner from 'components/Spinner';

const AllProviders: React.FC = ({ children }) => {
  return (
    <RecoilRoot>
      <MemoryRouter>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<Spinner />}>{children}</Suspense>
        </ErrorBoundary>
      </MemoryRouter>
    </RecoilRoot>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
