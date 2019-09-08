import React, { ReactNode } from 'react';

import { logError } from 'utils/logging';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    logError(error);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorView />;
    }

    return this.props.children;
  }
}

function ErrorView() {
  return (
    <>
      <h1>Something went wrong.</h1>
      <p>Please try again later.</p>
    </>
  );
}

export default ErrorBoundary;
