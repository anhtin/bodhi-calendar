import React, { ReactNode } from 'react';

import { logger } from '../../../services';
import { Container, Heading } from './styled';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  error: Error | null;
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
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
    logger.logError(error);
  }

  render() {
    const { error } = this.state;

    if (error === null) {
      return this.props.children;
    }

    return (
      <Container>
        <Heading title="SOMETHING WENT WRONG" />
        <p>Please try again later.</p>
      </Container>
    );
  }
}
