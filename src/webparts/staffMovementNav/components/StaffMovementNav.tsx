import * as React from 'react';
import styles from './StaffMovementNav.module.scss';
import { IStaffMovementNavProps } from './IStaffMovementNavProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Label, Icon } from '@fluentui/react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';


export default class StaffMovementNav extends React.Component<IStaffMovementNavProps, {}> {
  public render(): React.ReactElement<IStaffMovementNavProps> {
    initializeIcons();
    return (
      <div className={styles.staffMovementNav} style={{ padding: "0.9375rem", border: "solid 0.5px lightgray" }}>
        <div style={{ fontWeight: 700, fontSize: "1.313rem", marginBottom: "0.5em" }}>SBF Staff Movement <Icon style={{ display: 'inline' }} iconName="Rotate90Clockwise"></Icon></div>
        <div>
          <Icon className={styles.inline} style={{ fontWeight: 600, fontSize: "1.313rem", marginRight: '10px' }} iconName="PeopleAdd"></Icon><Label className={styles.inline} style={{ fontSize: "1rem" }}><a href={this.props.new} style={{ textDecoration: "none", color: "black" }} target="_blank">  New Joiners</a></Label>
        </div>
        <div>
          <Icon className={styles.inline} style={{ fontWeight: 600, fontSize: "1.313rem", marginRight: '10px' }} iconName="PeopleRepeat"></Icon><Label className={styles.inline} style={{ fontSize: "1rem" }}><a href={this.props.transfer} style={{ textDecoration: "none", color: "black" }} target="_blank">  Transfer</a></Label>
        </div>
        <div>
          <Icon className={styles.inline} style={{ fontWeight: 600, fontSize: "1.313rem", marginRight: '10px' }} iconName="PeopleBlock"></Icon><Label className={styles.inline} style={{ fontSize: "1rem" }}><a href={this.props.farewell} style={{ textDecoration: "none", color: "black" }} target="_blank">  Farewell</a></Label>
        </div>
      </div>
    );
  }
}
