


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
        console.log(info);
    },
    
}

var nesne = HN_kanbanTable(options);
nesne.init();

 