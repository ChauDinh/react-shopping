import React, { Component } from 'react';

import AwesomeImage from "../components/Display/AwesomeImage";
import HoverOpacity from "../components/Display/HoverOpacity";

export class Index extends Component {
  render() {
    return (
      <div>
        <HoverOpacity>
          <AwesomeImage src="https://picsum.photos/200/300" />
        </HoverOpacity>
      </div>
    )
  }
}

export default Index
