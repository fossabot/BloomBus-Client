import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Accordion, Drawer, List } from 'antd-mobile';
import { geoJSONFeatureShape } from '../../utils/constants';

import './StationsDrawer.css';

class StationsDrawer extends Component {
  render() {
    const lists = this.props.stations
      && Object.entries(this.props.stations).map(
        ([loopKey, loopGeoJSON]) => (
          <Accordion key={loopGeoJSON.properties.name}>
            <Accordion.Panel
              header={loopGeoJSON.properties.name}
              className="stations-drawer__loop"
            >
              <List className="stations-drawer__station">
                {loopGeoJSON.features.map(loopStation => (
                  <List.Item
                    key={loopStation.properties.name}
                    onClick={() => this.props.onSelect(
                      loopKey,
                      loopStation.properties.name,
                    )}
                  >
                    {loopStation.properties.name}
                  </List.Item>
                ))}
              </List>
            </Accordion.Panel>
          </Accordion>
        ),
      );

    return (
      <Drawer
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: '42px' }}
        sidebar={lists}
        open={this.props.isOpen}
      />
    );
  }
}

StationsDrawer.propTypes = {
  stations: PropTypes.shape({
    features: PropTypes.arrayOf(geoJSONFeatureShape),
    properties: PropTypes.shape({
      name: PropTypes.string,
    }),
    type: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default StationsDrawer;
