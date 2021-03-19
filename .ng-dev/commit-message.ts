import {CommitMessageConfig} from '@angular/dev-infra-private/commit-message/config';

/**
 * The configuration for `ng-dev commit-message` commands.
 */
export const commitMessage: CommitMessageConfig = {
  maxLineLength: Infinity,
  minBodyLength: 0,
  minBodyLengthTypeExcludes: ['docs'],
  scopes: [
    'cdk-experimental/column-resize',
    'cdk-experimental/combobox',
    'cdk-experimental/dialog',
    'cdk-experimental/listbox',
    'cdk-experimental/menu',
    'cdk-experimental/popover-edit',
    'cdk-experimental/scrolling',
    'cdk-experimental/selection',
    'cdk-experimental/table-scroll-container',
    'cdk/a11y',
    'cdk/accordion',
    'cdk/bidi',
    'cdk/clipboard',
    'cdk/coercion',
    'cdk/collections',
    'cdk/drag-drop',
    'cdk/keycodes',
    'cdk/layout',
    'cdk/observers',
    'cdk/overlay',
    'cdk/platform',
    'cdk/portal',
    'cdk/schematics',
    'cdk/scrolling',
    'cdk/stepper',
    'cdk/table',
    'cdk/testing',
    'cdk/text-field',
    'cdk/tree',
    'google-maps',
    'material-experimental/column-resize',
    'material-experimental/mdc-autocomplete',
    'material-experimental/mdc-button',
    'material-experimental/mdc-card',
    'material-experimental/mdc-checkbox',
    'material-experimental/mdc-chips',
    'material-experimental/mdc-color',
    'material-experimental/mdc-core',
    'material-experimental/mdc-density',
    'material-experimental/mdc-dialog',
    'material-experimental/mdc-form-field',
    'material-experimental/mdc-helpers',
    'material-experimental/mdc-input',
    'material-experimental/mdc-list',
    'material-experimental/mdc-menu',
    'material-experimental/mdc-paginator',
    'material-experimental/mdc-progress-bar',
    'material-experimental/mdc-progress-spinner',
    'material-experimental/mdc-radio',
    'material-experimental/mdc-select',
    'material-experimental/mdc-sidenav',
    'material-experimental/mdc-slide-toggle',
    'material-experimental/mdc-slider',
    'material-experimental/mdc-snack-bar',
    'material-experimental/mdc-table',
    'material-experimental/mdc-tabs',
    'material-experimental/mdc-theming',
    'material-experimental/mdc-typography',
    'material-experimental/menubar',
    'material-experimental/popover-edit',
    'material-experimental/selection',
    'material-moment-adapter',
    'material/autocomplete',
    'material/badge',
    'material/bottom-sheet',
    'material/button',
    'material/button-toggle',
    'material/card',
    'material/checkbox',
    'material/chips',
    'material/core',
    'material/datepicker',
    'material/dialog',
    'material/divider',
    'material/expansion',
    'material/form-field',
    'material/grid-list',
    'material/icon',
    'material/input',
    'material/list',
    'material/menu',
    'material/paginator',
    'material/prebuilt-themes',
    'material/progress-bar',
    'material/progress-spinner',
    'material/radio',
    'material/schematics',
    'material/select',
    'material/sidenav',
    'material/slide-toggle',
    'material/slider',
    'material/snack-bar',
    'material/sort',
    'material/stepper',
    'material/table',
    'material/tabs',
    'material/testing',
    'material/theming',
    'material/toolbar',
    'material/tooltip',
    'material/tree',
    'youtube-player'
  ],
};
