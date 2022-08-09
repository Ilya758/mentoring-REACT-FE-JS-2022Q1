// child component
// handler
// async

import React, { ErrorInfo } from 'react';
import { ErrorBoundaryContext } from '../../context/errorBoundaryContext';

// itself
// handler
// async
// SSR

interface IState {
  error: Error | null;
  errorStack: string;
  hasError: boolean;
}

interface IProps {
  children: React.ReactNode;
}

export default class ErrorBoundary extends React.Component<IProps, IState> {
  public static getDerivedStateFromError = (error: Error) => {
    console.log(error);
    return {
      hasError: true,
    };
  };

  constructor(props: IProps) {
    super(props);

    this.state = {
      error: null,
      errorStack: '',
      hasError: false,
    };
  }

  componentDidCatch = (error: Error, errorStack: ErrorInfo) => {
    console.log(error, errorStack);
  };

  public triggerError = (error: Error) => {
    this.setState(prevState => ({
      ...prevState,
      error,
      hasError: true,
    }));
  };

  private resetError = () => {
    this.setState(prevState => ({
      ...prevState,
      error: null,
      errorStack: '',
      hasError: false,
    }));
  };

  render = () => {
    const { hasError } = this.state;
    const { children } = this.props;
    const { triggerError, resetError } = this;

    if (hasError) {
      return (
        <>
          <h1>Something went wrong</h1>
          <button onClick={resetError}>Reset App</button>
        </>
      );
    }

    return (
      <ErrorBoundaryContext.Provider value={triggerError}>
        {children}
      </ErrorBoundaryContext.Provider>
    );
  };
}
