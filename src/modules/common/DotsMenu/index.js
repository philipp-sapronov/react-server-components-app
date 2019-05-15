import React from 'react';
import DotsMenu from './view/DotsMenu';
import Container from './container';
import WithBoundaryRect from '../../../HOCs/WithBoundaryRect/WithBoundaryRect';

export default Container(WithBoundaryRect(DotsMenu));
