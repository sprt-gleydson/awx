/*************************************************
 * Copyright (c) 2017  Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

 export default ['i18n', function(i18n) {
     return {
        name: 'groups',
        iterator: 'group',
        editTitle: '{{ inventory.name }}',
        well: true,
        wellOverride: true,
        index: false,
        hover: true,
        multiSelect: true,
        trackBy: 'group.id',
        basePath:  'api/v2/inventories/{{$stateParams.inventory_id}}/groups/',

        fields: {
            failed_hosts: {
                label: '',
                nosort: true,
                mode: 'all',
                iconOnly: true,
                awToolTip: "{{ group.hosts_status_tip }}",
                dataPlacement: "top",
                icon: "{{ 'fa icon-job-' + group.hosts_status_class }}",
                columnClass: 'status-column List-staticColumn--smallStatus'
            },
            name: {
                label: i18n._('Groups'),
                key: true,
                uiSref: "inventories.edit.groups.edit({group_id:group.id})",
                columnClass: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
                class: 'InventoryManage-breakWord',
            }
        },

        actions: {
            refresh: {
                mode: 'all',
                awToolTip: i18n._("Refresh the page"),
                ngClick: "refreshGroups()",
                ngShow: "socketStatus == 'error'",
                actionClass: 'btn List-buttonDefault',
                buttonContent: i18n._('REFRESH')
            },
            launch: {
                mode: 'all',
                ngDisabled: '!groupsSelected',
                ngClick: 'setAdhocPattern()',
                awToolTip: i18n._("Select an inventory source by clicking the check box beside it. The inventory source can be a single group or a selection of multiple groups."),
                dataPlacement: 'top',
                actionClass: 'btn List-buttonDefault',
                buttonContent: i18n._('RUN COMMANDS'),
                showTipWhenDisabled: true,
                tooltipInnerClass: "Tooltip-wide",
                ngShow: 'canAdhoc'
                // TODO: set up a tip watcher and change text based on when
                // things are selected/not selected.  This is started and
                // commented out in the inventory controller within the watchers.
                // awToolTip: "{{ adhocButtonTipContents }}",
                // dataTipWatch: "adhocButtonTipContents"
            },
            create: {
                mode: 'all',
                ngClick: "createGroup()",
                awToolTip: i18n._("Create a new group"),
                actionClass: 'at-Button--add',
                actionId: 'button-add',
                ngShow: 'canAdd',
                dataPlacement: "top",
            }
        },

        fieldActions: {

            columnClass: 'col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right',

            edit: {
                //label: 'Edit',
                mode: 'all',
                ngClick: "editGroup(group.id)",
                awToolTip: i18n._('Edit group'),
                dataPlacement: "top",
                ngShow: "group.summary_fields.user_capabilities.edit"
            },
            view: {
                //label: 'Edit',
                mode: 'all',
                ngClick: "editGroup(group.id)",
                awToolTip: i18n._('View group'),
                dataPlacement: "top",
                ngShow: "!group.summary_fields.user_capabilities.edit"
            },
            "delete": {
                //label: 'Delete',
                mode: 'all',
                ngClick: "deleteGroup(group)",
                awToolTip: i18n._('Delete group'),
                dataPlacement: "top",
                ngShow: "group.summary_fields.user_capabilities.delete"
            }
        }
    };
}];
