import React, { FC, PropsWithChildren } from 'react';
import AntDesign from '@/app/_providers/AntDesign';

const CombineProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AntDesign>
      { children }
    </AntDesign>
  );
};

export default CombineProviders;