import React from 'react';

import ContentLoader from 'react-content-loader';

function MyLoader(props: any) {
  return (
    <ContentLoader
      speed={2}
      width={1700}
      height={480}
      viewBox="0 0 1700 480"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="3" y="125" rx="0" ry="0" width="131" height="307" />
      <rect x="147" y="128" rx="0" ry="0" width="131" height="307" />
      <rect x="293" y="126" rx="0" ry="0" width="131" height="307" />
      <rect x="438" y="127" rx="0" ry="0" width="131" height="307" />
    </ContentLoader>
  );
}

export default MyLoader;
