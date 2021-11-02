define(["require", "exports", "./src/chips/index"], function (require, exports, index_1, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var defaultData = [{
            "text": "Apple",
            "cssClass": "e-primary"
        },
        {
            "text": "Microsoft",
            "cssClass": "e-info"
        },
        {
            "text": "Google",
            "cssClass": "e-success"
        },
        {
            "text": "Tesla",
            "cssClass": "e-warning"
        },
        {
            "text": "Intel",
            "cssClass": "e-danger"
        }
    ];
    new index_1.ChipList({
        chips: defaultData,
        enableDelete: true,
        deleted: Deleted
    }, '#chip-default');
    function Deleted(args) {
        document.getElementById("deleteditem").innerHTML = "Deleted item : " + args.text;
    }
    var filterData = [{
            "text": "Extra small"
        },
        {
            "text": "Small"
        },
        {
            "text": "Medium"
        },
        {
            "text": "Large"
        },
        {
            "text": "Extra large"
        }
    ];
    new index_1.ChipList({
        chips: filterData,
        enableDelete: true,
        selection: 'Multiple',
        deleted: Deleted1
    }, '#chip-filter');
    function Deleted1(args) {
        document.getElementById("deleteditem1").innerHTML = "Deleted item : " + args.text;
    }
});
