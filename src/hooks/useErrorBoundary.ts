import { useContext } from 'react';
import { ErrorBoundaryContext } from '../context/errorBoundaryContext';

export const useErrorBoundary = () => useContext(ErrorBoundaryContext);
