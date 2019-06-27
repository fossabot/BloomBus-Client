import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import StopsList from '../StopsList/StopsList';
import List, {
  ListItem,
  ListHeader,
  ListItemTitle,
  ListItemSubtitle
} from 'calcite-react/List';
import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  // need to change this to use the calcite-react
  render() {
    return (
      <Fragment>
        {/* List */}
        <div className="loops-sidebar-wrapper">
          {
            this.props.loops.map(loop => (
              <div
                key={loop.properties.name}
                className="sidebar__card"
                role="button"
                tabIndex="0"
                onClick={this.onLoopClick}
                onKeyDown={this.onLoopClick}
              >
                {/*  */}
                <div className="sidebar__card__head">
                  <div className="sidebar__card__notch" />
                  {/* List Header */}
                  <span className="sidebar__card__name">{loop.properties.name}</span>
                </div>
                <StopsList stops={this.props.stops} />
              </div>
            ))
          }
        </div>
      </Fragment>
    );
  }
}

Sidebar.propTypes = {
  loops: PropTypes.arrayOf(PropTypes.object).isRequired,
  stops: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectedLoopChanged: PropTypes.func.isRequired,
};

export default Sidebar;
