import React, { Component } from 'react';
import styles from './Home.css';
import WorkArea from './WorkArea';
import { music } from '../utils/sounds';

export default class Home extends Component {
  componentDidMount() {
    music.playlist('lesson');
  }

  render() {
    return (
      <WorkArea backgroundImage="home">
        <div className={styles.home}>
          <h2>Интерактивный</h2>
          <hr />
          <h2>Логопед</h2>
        </div>
      </WorkArea>
    );
  }
}
