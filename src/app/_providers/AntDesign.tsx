'use client';

import { antdConfig } from '@/theme/themeConfig';
import faIR from 'antd/locale/fa_IR';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import { FC, PropsWithChildren, useMemo, useRef } from 'react';
import Entity from '@ant-design/cssinjs/es/Cache';
import { useServerInsertedHTML } from 'next/navigation';

const AntDesign: FC<PropsWithChildren> = ({ children }) => {
  const cache = useMemo<Entity>(() => createCache(), []);
  
  const isServerInserted = useRef<boolean>(false);
  
  useServerInsertedHTML(() => {
    // avoid duplicate css insert
    if (isServerInserted.current) {
      return;
    }
    isServerInserted.current = true;
    return <style id="antd" dangerouslySetInnerHTML={ { __html: extractStyle(cache, true) } } />;
  });
  
  return (
    <StyleProvider
      cache={ cache }
    >
      <ConfigProvider
        theme={ antdConfig }
        locale={ faIR }
        direction={ 'rtl' }
      >
        { children }
      </ConfigProvider>
    </StyleProvider>
  );
};

export default AntDesign;
