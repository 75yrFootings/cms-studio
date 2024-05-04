import { DocumentIcon, CogIcon, ControlsIcon } from '@sanity/icons';
import ContentStructure from './content.js'
import SettingsStructure from './settings.js';
import ManagementStructure from './management.js';

export const structureMain = (S: any) =>
  S.list()
    .title('Site')
    .items([
        S.listItem()
            .title('Content')
            .icon(DocumentIcon)
            .child(
                ContentStructure(S)
            ),
        S.listItem()
            .title('Management')
            .icon(ControlsIcon)
            .child(
                ManagementStructure(S)
            ),
        S.listItem()
            .title('Settings')
            .icon(CogIcon)
            .child(
                SettingsStructure(S)
            ),
    ])