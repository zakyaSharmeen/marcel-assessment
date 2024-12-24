// import React from 'react';
// import MyComponent from './MyComponent';

// export default {
//   title: 'MyComponent',
//   component: MyComponent,
// };

// export const Default = () => <MyComponent />;
// MyComponent.stories.tsx

import React from 'react';
import MyComponent from './MyComponent';

export default {
  title: 'MyComponent',   // Story title
  component: MyComponent,   // The component to document
};

export const Default = () => <MyComponent />;
