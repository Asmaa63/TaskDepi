import React from 'react';

const MyContext = React.createContext();
const ProviderContext = MyContext.Provider;
const ConsumerContext = MyContext.Consumer;

export {ProviderContext, ConsumerContext}