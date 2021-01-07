import React from "react";
import Sidebar from "./view/Sidebar";
import { WithScrollbar } from "../../HOCs/WithScrollbar/WithScrollbar";
import Container from "./container";

export default Container(WithScrollbar(Sidebar));
