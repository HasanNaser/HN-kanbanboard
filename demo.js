
let log = console.log;

var options = {
    container : "#myDiv",
    boards : {
         0:{
             "id":"1",
             "title":"To do"
         },
         1:{
            "id":"2",
            "title":"Doing"
        },
        2:{
            "id":"3",
            "title":"Done"
        },
    },
    cards :{
        0:{
             "board_id":"1",
             "card_id":"1",
             "card_title":"Card Drag/drop feature"
         },
        1:{
            "board_id":"1",
            "card_id":"2",
            "card_title":"onCardclick function"
        }, 
        2:{
            "board_id":"3",
            "card_id":"4",
            "card_title":"setCards function"
        }, 
        3:{
            "board_id":"3",
            "card_id":"5",
            "card_title":"onCardAdded function"
        }, 
        4:{
            "board_id":"3",
            "card_id":"8",
            "card_title":"add new card feature"
        }, 
        5:{
            "board_id":"3",
            "card_id":"34",
            "card_title":".........."
        }, 
    },
    onCardAdd : function(info){
        log(info);
    },
    onCardDrgStart : function (evt){
    },
    onCardDrgEnd : function (evt){
    //     console.log(evt.to,// target list
    //     evt.from, // previous list
    //     evt.oldIndex, // element's old index within old parent
    //     evt.newIndex,// element's new index within new parent
    //     evt.oldDraggableIndex, // element's old index within old parent, only counting draggable elements
    //     evt.newDraggableIndex,// element's new index within new parent, only counting draggable elements
    //     evt.clone, // the clone element
    //     evt.pullMode,// when item is in another sortable: `"clone"` if cloning, `true` if moving
    // )
    },
    onCardSortChange : function (evt){

    },
    onCardClick : function (val_attr){
        log(val_attr);

    }
}

var nesne = HN_kanbanTable(options);
nesne.init();
 