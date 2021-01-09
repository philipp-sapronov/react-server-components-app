import React from 'react';
import DotsMenu from '../Shared/DotsMenu.client';

export default function Component({ title = 'Header' }) {
  return (
    <header className="header__wrap">
      <h2 className="header__title">{title}</h2>
      <DotsMenu module="header" />
    </header>
  );
}
