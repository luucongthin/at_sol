(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('CustomersController', CustomersController);

    CustomersController.$inject = ['$scope', '$uibModal', '$state'];

    function CustomersController ($scope, $uibModal, $state) {
        var vm = this;

        vm.status = '1';
        vm.type = '1';

        vm.totalItems = 175;
        vm.currentPage = 1;

        vm.checkedAllItem = false;
        vm.deleteManyItem = false;

        vm.lstStatus = [];
        vm.lstType = [];
        vm.lstData = [];

        vm.changeCheckAllItem = changeCheckAllItem;
        vm.changeCheckedItem = changeCheckedItem;
        vm.editItem = editItem;
        vm.deleteItem = deleteItem;
        vm.addNewItem = addNewItem;

        vm.lstType = [
            {
                value: 1,
                title: 'All'
            },
            {
                value: 2,
                title: 'Online'
            },
            {
                value: 3,
                title: 'Retail'
            },
            {
                value: 4,
                title: 'Direct'
            },
        ];

        vm.lstStatus = [
            {
                value: 1,
                title: 'All'
            },
            {
                value: 2,
                title: 'Pending'
            },
            {
                value: 3,
                title: 'Delivered'
            },
            {
                value: 4,
                title: 'Canceled'
            },
            {
                value: 5,
                title: 'Success'
            },
            {
                value: 6,
                title: 'Info'
            },
            {
                value: 7,
                title: 'Danger'
            },
        ]

        vm.lstData = [
            {
                id: '49288-0815',
                username: 'Lê Tiến Hoàn',
                create_date: '4/23/2016',
                create_by: 'Admin',
                isActive: 1
            },
            {
                id: '49288-0815',
                username: 'Lưu Công Thìn',
                create_date: '4/23/2016',
                create_by: 'Admin',
                isActive: 1
            },
            {
                id: '49288-0815',
                username: 'Lê Tiến A',
                create_date: '4/23/2016',
                create_by: 'Admin',
                isActive: 0
            },
            {
                id: '49288-0815',
                username: 'Lê Tiến B',
                create_date: '4/23/2016',
                create_by: 'Admin',
                isActive: 0
            },
            {
                id: '49288-0815',
                username: 'Lê Tiến C',
                create_date: '4/23/2016',
                create_by: 'Admin',
                isActive: 0
            },
            {
                id: '49288-0815',
                username: 'Lê Tiến E',
                create_date: '4/23/2016',
                create_by: 'Admin',
                isActive: 0
            }
        ];

        function editItem(item){
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/customers/customers.edit.html',
                controller: 'DeviceEditController',
                controllerAs: 'vm',
                size: 'xl',
                resolve: {
                  dataItem: function () {
                    return item;
                  }
                }
            });
        }

        function addNewItem(){
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/customers/customers.edit.html',
                controller: 'DeviceEditController',
                controllerAs: 'vm',
                size: 'xl',
                resolve: {
                  dataItem: function () {
                    return null;
                  }
                }
            });
        }

        function deleteItem(item){
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/customers/customers.delete.html',
                controller: 'DeviceDeleteController',
                controllerAs: 'vm',
                size: 'md',
                resolve: {
                  dataItem: function () {
                    return item;
                  }
                }
            });
        }

        function changeCheckAllItem(){
            angular.forEach(vm.lstData, function(element){
                element.checked = vm.checkedAllItem
            });

            vm.deleteManyItem = vm.checkedAllItem;
        }

        function changeCheckedItem(){
            var count = 0;
            
            angular.forEach(vm.lstData, function(element){
                if(element.checked ){
                    count ++
                }
            });

            if (count == vm.lstData.length){
                vm.checkedAllItem = true;
            }else{
                vm.checkedAllItem = false;
            }

            vm.deleteManyItem = count > 0 ? true : false;
        }

        $(function () {
            angular.element('#kt_form_status,#kt_form_type').selectpicker();
        });
        
    }
})();
