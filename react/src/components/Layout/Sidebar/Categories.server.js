import React from 'react';
import NavLink from '../../ServerRouter/navlink.client';
import { useCategories } from '../../../api/categories.server';

export default function Categories() {
  const categories = useCategories();

  return (
    <div className="sidebar-category-list__wrap">
      <div className="sidebar-category-list__header">Categories</div>
      {(categories || [{ text: 'category' }]).map((category) => (
        <NavLink
          exact
          activeClassName="active"
          className="main-menu__list-item menu-item"
          to={`/categories/${category.id}`}>
          <div className="wrap">
            <div className="sidebar-category__item">
              <p className="sidebar-category__text">{category.name}</p>
            </div>
            <div className="sidebar-category__hover" />
          </div>
        </NavLink>
      ))}
    </div>
  );
}
