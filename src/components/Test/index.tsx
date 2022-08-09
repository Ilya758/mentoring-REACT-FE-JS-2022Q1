import { useErrorBoundary } from '../../hooks/useErrorBoundary';

export const Test = () => {
  const triggerError = useErrorBoundary();

  const handleClick = async () => {
    try {
      throw new Error('no data');
    } catch (e) {
      triggerError(e as Error);
    }
  };

  return (
    <div>
      <span>App</span>
      <button onClick={handleClick}>Log</button>
    </div>
  );
};
