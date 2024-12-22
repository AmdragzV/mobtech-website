"use client";

import React, { HTMLAttributes, ButtonHTMLAttributes, useState } from "react";

interface BaseProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

interface TabsProps extends BaseProps {
  defaultValue: string;
}

interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

interface TabsTriggerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  value: string;
  className?: string;
  children?: React.ReactNode;
}

interface TabsContentProps extends Omit<BaseProps, 'value'> {
  value: string;
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

const useTabsContext = () => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider');
  }
  return context;
};

export const Card: React.FC<BaseProps> = ({
  className = "",
  children,
  ...props
}) => (
  <div
    className={`rounded-lg border bg-white shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader: React.FC<BaseProps> = ({
  className = "",
  children,
  ...props
}) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<BaseProps> = ({
  className = "",
  children,
  ...props
}) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<BaseProps> = ({
  className = "",
  children,
  ...props
}) => (
  <p className={`text-sm text-gray-500 ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<BaseProps> = ({
  className = "",
  children,
  ...props
}) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  children,
  className = "",
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const TabsList: React.FC<BaseProps> = ({
  children,
  className = "",
  ...props
}) => (
  <div
    className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  className = "",
  ...props
}) => {
  const { activeTab, setActiveTab } = useTabsContext();
  
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all 
        ${
          activeTab === value
            ? "bg-white text-gray-900 shadow-sm"
            : "hover:bg-gray-50"
        } ${className}`}
      onClick={() => setActiveTab(value)}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export const TabsContent: React.FC<TabsContentProps> = ({
  value,
  children,
  className = "",
  ...props
}) => {
  const { activeTab } = useTabsContext();
  
  if (value !== activeTab) return null;

  return (
    <div className={`mt-2 ${className}`} {...props}>
      {children}
    </div>
  );
};