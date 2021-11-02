import { ChipList, DeleteEventArgs , ChipDeletedEventArgs} from './src/chips/index';

let defaultData = [{
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

// initialize default chip
new ChipList({ 
    chips: defaultData, 
    enableDelete: true,
    deleted: Deleted
}, '#chip-default');

function Deleted(args :ChipDeletedEventArgs){
    document.getElementById("deleteditem").innerHTML = "Deleted item : " + args.text;
}

let filterData = [{
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

new ChipList({ 
    chips:filterData,
    enableDelete: true,
    selection: 'Multiple',
    deleted: Deleted1
}, '#chip-filter');

function Deleted1(args :ChipDeletedEventArgs){
    document.getElementById("deleteditem1").innerHTML = "Deleted item : " + args.text;
}