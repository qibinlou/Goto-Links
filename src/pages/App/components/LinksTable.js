/* @flow */
import React, { Component } from 'react';


type LinkMap = {
  namespace: string,
  url: string,
  shortName: string
};

type Props = {|
  +links: Array<LinkMap>
|};


class LinksTable extends Component<Props> {

  render() {
    const { links } = this.props;
    return (
      <div>
        {links.map(link => (
          <li>
            <span>{link.namespace}/{link.shortName}</span>
            <span><a href={link.url}>{link.url}</a></span>
          </li>
        ))}
      </div>

    );

  }
}

export default LinksTable;
