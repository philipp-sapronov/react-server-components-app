import withFragment from '../../../HOCs/WithFragment/WithFragment';
import WithBoundaryRect from '../../../HOCs/WithBoundaryRect/WithBoundaryRect';
import DotsMenu from './view/DotsMenu';
import Container from './container';
import withRoute from './HOCs/withRoute';

const { contact, header } = Container;
const { contactRoute, categoryRoute } = withRoute;

export default {
  ContactBtn: contact(WithBoundaryRect(DotsMenu)),
  HeaderBtn: withFragment(
    contactRoute(header(WithBoundaryRect(DotsMenu))),
    categoryRoute(header(WithBoundaryRect(DotsMenu)))
  ),
};
