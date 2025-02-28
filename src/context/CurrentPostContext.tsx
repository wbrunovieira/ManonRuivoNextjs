'use client';
import React, { createContext, useContext } from 'react';

interface CurrentPostContextValue {
  currentPostId?: string;
}

const CurrentPostContext =
  createContext<CurrentPostContextValue>({});

export function CurrentPostProvider({
  children,
  currentPostId,
}: {
  children: React.ReactNode;
  currentPostId?: string;
}) {
  console.log(
    '[CurrentPostProvider] Providing currentPostId:',
    currentPostId
  );
  return (
    <CurrentPostContext.Provider value={{ currentPostId }}>
      {children}
    </CurrentPostContext.Provider>
  );
}

export function useCurrentPost() {
  const contextValue = useContext(CurrentPostContext);
  console.log(
    '[useCurrentPost] Retrieved currentPostId:',
    contextValue.currentPostId
  );
  return contextValue;
}
