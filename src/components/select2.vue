<template>
    <select class="form-control" ></select>
</template>
<script>
export default {
    props:{
        'default' : {
            type : Array,
        },
        value: {
            required: true,
        },
        options: {
            type: Array,
        },
        placeholder: {
            type: String,
        },
        notfound: {
            type: String,
            default: 'Không tìm thấy',
        },
        search: {
            type: Boolean,
            default: true,
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        change: {
            type: Function,
        },
        allowclear: {
            type: Boolean,
            default: false,
        },
        max: {
            type: Number,
            default: 10,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        position: {
            type: String,
            default: 'left'
        },
        icon: {
            type: String,
        },
        width: {
            type: String,
            default: 'resolve'
        },
        labels: {
            type: Array,
        }
    },
    data(){
        return {
            data: [],
            config: {},
            selected: this.value,
            select2: null,
        }
    },
    created: function () {
        this.convert();

    },
    mounted() {
        var vm = this;
        var config = {
            disabled: this.disabled,
            multiple: this.multiple,
            minimumResultsForSearch: this.search ? 0 : -1,
            allowClear: this.allowclear,
            data: this.data,
            language: {
                noResults: function () {
                    return vm.notfound;
                }
            },
            escapeMarkup: function (markup) {
                return markup;
            }
        };
        if (this.placeholder != undefined) {
            config['placeholder'] = this.placeholder;
        }
        this.config = config;
        this.init();

    },
    methods: {
        convert: function () {
            var vm = this;
            var data = [];
            if (typeof vm.options == 'object') {

                if (vm.labels != undefined && vm.labels.length == 2) {
                    data = vm.options.map(function (item) {
                        var el = {};
                        el['id'] = item[vm.labels[0]];
                        var text = '';
                        if (item.hasOwnProperty(vm.labels[1])) {
                            text = item[vm.labels[1]];
                        }
                        el['text'] = String(text).capitalize();
                        return el;
                    })
                } else {
                    data = vm.options.map(function (item) {
                        var el = {};
                        el['id'] = item.hasOwnProperty('id') ? item['id'] : (item.hasOwnProperty('_id') ? item['_id'] : '');
                        var text = '';
                        if (item.hasOwnProperty('text')) {
                            text = item['text'];
                        } else if (item.hasOwnProperty('name')) {
                            text = item['name'];
                        } else if (item.hasOwnProperty('code')) {
                            text = item['code'];
                        }
                        el['text'] = String(text).capitalize()
                        return el;
                    })
                }
            }
            if(typeof this.default == 'object' && this.default.length == 2){
                data.unshift({
                    'id' : this.default[0],
                    'text' : this.default[1]
                })
            }

            vm.data = data;
        },
        init: function () {
            var vm = this;
            vm.config['data'] = vm.data;
            if (vm.placeholder != undefined && !vm.multiple) {
                $(vm.$el).append("<option></option>")
            }

            if (vm.multiple) {
                vm.select2 = $(vm.$el).select2(vm.config).on('change', function (e) {
                    vm.$emit('input', $(this).val());
                    if (vm.change != undefined && typeof vm.change == 'function') {
                        vm.change();
                    }
                });
            } else {
                vm.select2 = $(vm.$el).select2(vm.config).on('select2:select', function (e) {
                    vm.$emit('input', e.params.data.id);
                    if (vm.change != undefined && typeof vm.change == 'function') {
                        vm.change();
                    }
                });
            }
            if (vm.value != undefined && vm.value != '') {
                vm.select2.val(vm.value).trigger("change.select2");
            } else {
                if (_.find(vm.data, {
                    id: vm.value
                }) == undefined && !vm.multiple) {
                    vm.$emit('input', '');
                }
            }
        },
        destroy: function () {
            if ($(this.$el).data('select2')) {
                this.select2.select2('destroy');
                $(this.$el).empty();
                this.init();
            }
        },
    },
    watch: {
        'options': function (newval) {
            this.convert();
            this.destroy();
        },
        'value': function (newval) {
            this.select2.val(newval).trigger('change.select2');
        },
        'disabled': function (newval) {
            $(this.$el).attr('disabled', newval);
        }
    },
}
</script>

