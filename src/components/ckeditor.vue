<template>
    <div class="ckeditor"><textarea :id="id" :value="value"></textarea></div>
</template>
<script>
    
    export default{
        props: {
        value: {
            type: String
        },
        height: {
            type: String,
            default: '400px',
        },
        toolbar: {
            type: Array,
            default: function () {
                return [{
                    name: "clipboard",
                    items: ["Undo", "Redo", "Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "Undo", "Redo", "oembed"]
                }, {
                    name: "styles",
                    items: ["Styles", "Format"]
                }, {
                    name: "basicstyles",
                    items: ["Bold", "Italic", "Strike", "-", "RemoveFormat"]
                }, {
                    name: "paragraph",
                    items: ["NumberedList", "BulletedList", "-", "Outdent", "Indent", "-", "Blockquote"]
                }, {
                    name: "links",
                    items: ["Link", "Unlink", "Gallery"]
                }, {
                    name: "insert",
                    items: ["Image", "EmbedSemantic", "Table"]
                }, {
                    name: "tools",
                    items: ["Maximize"]
                }, {
                    name: "editing",
                    items: ["Scayt"]
                }]
            }
        },


        language: {
            type: String,
            default: 'vi'
        },
        extraplugins: [{
            type: String,
            default: ''
        },
        {
            default: 'imagepaste'
        }


        ],
    },
    data() {
        return {
            id: this.createId(),
            editor: {},
        }
    },
    beforeUpdate() {
        var vm = this;
        const ckeditorId = vm.id;
        if (vm.value !== CKEDITOR.instances[ckeditorId].getData()) {
            CKEDITOR.instances[ckeditorId].setData(vm.value);
        }
        ;
    },
    mounted() {
        var vm = this;
        const ckeditorId = vm.id;
        const ckeditorConfig = {
            toolbar: vm.toolbar,
            language: vm.language,
            height: vm.height,
            extraPlugins: vm.extraplugins,
            image_removeLinkByEmptyURL: false,
            removePlugins: "colorbutton,colordialog,copyformatting,font,indentblock,image,justify,liststyle,print,sourcedialog,tableresize",
        };
        CKEDITOR.replace(ckeditorId, ckeditorConfig);
        CKEDITOR.instances[ckeditorId].setData(vm.value);
        CKEDITOR.instances[ckeditorId].on('change', () => {
            let ckeditorData = CKEDITOR.instances[ckeditorId].getData()
            if (ckeditorData !== vm.value) {
                vm.$emit('input', ckeditorData)
            }
        });
    },
    methods: {
         createId() {
        var idStrLen = 32;
        var idStr = (Math.floor((Math.random() * 25)) + 10).toString(36) + "_";
        idStr += (new Date()).getTime().toString(36) + "_";
        do {
            idStr += (Math.floor((Math.random() * 35))).toString(36);
        } while (idStr.length < idStrLen);

        return (idStr);
    }
    },
    destroyed() {
        var vm = this;
        const ckeditorId = vm.id;
        if (CKEDITOR.instances[ckeditorId]) {
            CKEDITOR.instances[ckeditorId].destroy();
        }
        ;
    }
    }
</script>