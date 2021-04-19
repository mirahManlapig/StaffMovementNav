import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'StaffMovementNavWebPartStrings';
import StaffMovementNav from './components/StaffMovementNav';
import { IStaffMovementNavProps } from './components/IStaffMovementNavProps';

export interface IStaffMovementNavWebPartProps {
  new: string;
  transfer: string;
  farewell: string;
}

export default class StaffMovementNavWebPart extends BaseClientSideWebPart<IStaffMovementNavWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IStaffMovementNavProps> = React.createElement(
      StaffMovementNav,
      {
        new: this.properties.new,
        transfer: this.properties.transfer,
        farewell: this.properties.farewell
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('new', {
                  label: "New Link"
                }),
                PropertyPaneTextField('transfer', {
                  label: "Transfer Link"
                }),
                PropertyPaneTextField('farewell', {
                  label: "Farewell Link"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
