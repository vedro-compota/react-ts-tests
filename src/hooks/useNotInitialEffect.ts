import { useEffect, useRef } from 'react';

export const useNotInitialEffect = (callback: () => void, dependencies: any[]) => {
  const firstUpdate = useRef(true);

  useEffect(
    () => {
      if (firstUpdate.current) {
        console.log('first time1');
        firstUpdate.current = false;

        return;
      }

      console.log('next time!', dependencies);
      callback();
    },
    // eslint-disable-next-line
    dependencies,
  );
};
