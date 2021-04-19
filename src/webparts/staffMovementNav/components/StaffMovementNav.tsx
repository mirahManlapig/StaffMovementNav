import * as React from 'react';
import styles from './StaffMovementNav.module.scss';
import { IStaffMovementNavProps } from './IStaffMovementNavProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Label } from '@fluentui/react';

export default class StaffMovementNav extends React.Component<IStaffMovementNavProps, {}> {
  public render(): React.ReactElement<IStaffMovementNavProps> {
    return (
      <div className={styles.staffMovementNav} style={{background:"#f5f5f5", padding:"0.9375rem", border:"solid 0.5px lightgray" }}>
        <div style={{ fontWeight: 700, fontSize: "1.313rem", marginBottom: "0.5em" }}>SBF Staff Movement</div>
        <Label style={{ fontSize: "1rem" }}><a href={this.props.new} style={{textDecoration:"none", color:"black"}} target="_blank">• New Joiners</a></Label>
        <Label style={{ fontSize: "1rem" }}><a href={this.props.transfer} style={{textDecoration:"none", color:"black"}} target="_blank">• Transfer</a></Label>
        <Label style={{ fontSize: "1rem" }}><a href={this.props.farewell} style={{textDecoration:"none", color:"black"}} target="_blank">• Farewell</a></Label>
      </div>
    );
  }
}
