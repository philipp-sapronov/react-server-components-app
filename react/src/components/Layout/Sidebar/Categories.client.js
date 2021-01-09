import React from 'react';
import Category from './Category.client';
import constants from '../../../constants/categorySchema';

export default function Categories(props) {
  return (
    <div className="sidebar-category-list__wrap">
      <div className="sidebar-category-list__header">Categories</div>
      {(props.entities || [{ text: 'category' }]).map((category) => (
        <Category category={category} key={category[constants.ID]} />
      ))}
    </div>
  );
}
