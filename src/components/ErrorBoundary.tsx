import React, { ReactNode } from 'react';

import Flex from './Flex';
import { logError, initializeLogging } from 'utils/logging';
import { resetLocal, navigateTo } from 'utils/browser';
import { InvalidAppVersion } from 'store';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  error: Error | null;
};

class ErrorBoundary extends React.Component<
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

  componentDidMount() {
    initializeLogging();
  }

  componentDidCatch(error: Error) {
    logError(error);
  }

  render() {
    const { error } = this.state;

    if (error === null) {
      return this.props.children;
    }

    if (error instanceof InvalidAppVersion) {
      resetLocal();
      return <RedirectionErrorView />;
    }

    return <GenericErrorView />;
  }
}

function GenericErrorView() {
  return (
    <Container>
      <Header title="SOMETHING WENT WRONG" />
      <p>Please try again later.</p>
    </Container>
  );
}

type RedirectionErrorViewProps = {
  targetUrl?: string;
};

function RedirectionErrorView({ targetUrl = '.' }: RedirectionErrorViewProps) {
  navigateTo(targetUrl);

  return (
    <Container>
      <Header title="PLEASE WAIT" />
      <p>Currently redirecting you...</p>
    </Container>
  );
}

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <Flex
      direction="column"
      flex={1}
      justifyContent="space-around"
      alignItems="center"
      style={{ height: '45vh', padding: '2vh', textAlign: 'center' }}
      tag="main"
    >
      {children}
    </Flex>
  );
}

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{title}</h1>;
}

export default ErrorBoundary;
