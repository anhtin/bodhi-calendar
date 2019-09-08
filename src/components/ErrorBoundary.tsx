import React, { ReactNode } from 'react';

import { logError } from 'utils/logging';
import Flex from './Flex';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    logError(error);
  }

  render() {
    const { error } = this.state;

    if (error === null) {
      return this.props.children;
    }

    return <GenericErrorView />
  }
}

function GenericErrorView() {
  return (
    <Flex
      direction="column"
      flex={1}
      justifyContent="space-around"
      alignItems="center"
      style={{ height: '45vh', padding: '2vh', textAlign: 'center' }}
      tag='main'
    >
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
       SOMETHING WENT WRONG
      </h1>
      <p>Please try again later.</p>
    </Flex>
  );
}

export default ErrorBoundary;
