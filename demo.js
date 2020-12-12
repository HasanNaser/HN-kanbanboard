

let lists = [{"id": "todo", "title": "Todo"}, {"id": "doing", "title": "Doing"}, {"id": "done", "title": "Done"}]

let cards_ = [
    {
        "board_id": "todo",
        "card_id": "1",
        "card_title": "Card Drag/drop feature"
    },
    {
        "board_id": "todo",
        "card_id": "2",
        "card_title": "onCardclick function"
    },
    {
        "board_id": "done",
        "card_id": "4",
        "card_title": "setCards function"
    },
    {
        "board_id": "done",
        "card_id": "5",
        "card_title": "onCardAdded function"
    },
    {
        "board_id": "done",
        "card_id": "8",
        "card_title": "add new card feature"
    },
    {
        "board_id": "done",
        "card_id": "34",
        "card_title": ".........."
    },
];

var options = {
    container: "#myDiv",

    lists: lists,
    cards: cards_,

    onCardAdd: function (data) {
        //data.boardId,
        //data.title,
        console.info(data);
    },
    onCardDrgStart: function (evt) {
        //evt.currentList   :current list
        //evt.cardSelf      :card element
        console.info(evt)
    },
    onCardDrgEnd: function (evt) {
        //evt.listTo           : target list
        //evt.boardFrom       : previous list
        //evt.oldIndex        : element's old index within old parent
        //evt.newInde         : element's new index within new parent
        //evt.cardSelf        : card element
        console.info(evt)
    },
    onCardSortChange: function (evt) {
        //evt.currentList     :current list
        //evt.oldIndex        : element's old index within old parent
        //evt.newInde         : element's new index within new parent
        //evt.cardSelf        : card element
        console.info(evt)
    },
    onCardClick: function (data) {
        //data.title,
        //data.currentListId,
        //data.currentList,
        console.info(data);
    }
}


var nesne = HN_kanbanTable(options);


nesne.init();








EnlighterJS.init('pre', 'code', {
    language : 'javascript',
    theme: 'atomic',
    indent : 2
});