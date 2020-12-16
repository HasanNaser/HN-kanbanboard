 
# hn-kanbanboard &nbsp;[![npm](https://img.shields.io/npm/v/hn-kanbanboard-npm)](https://www.npmjs.com/package/hn-kanbanboard-npm)
 JavaScript library help you to build and manage a Kanban Board easily in your project, no jQuery required
 
 
### Demo 
https://hasannaser.github.io/HN-kanbanboard/index.html

### Getting Started

Install via command line using `npm`.

```bash 
npm install hn-kanbanboard-npm
```
Or

Clone the repo and use the javascript and the css files in the `dist` folder. 

include css file 
```html 
 <link rel="stylesheet" href="../dist/hn_kanbanboard.css"> 
```
include js file 
```html 
 <script src="../dist/hn_kanbanboard.js"></script> 
```

<hr>

### Usage

```html
<div id="myDiv">

</div>
```


```js 
let cards_ = [
    {"board_id": "1", "card_id": "1", "card_title": "Hello People" },
    {"board_id": "2", "card_id": "2",  "card_title": "Hello People" },
    {"board_id": "3", "card_id": "4", "card_title": "Hello People"}, 
];

var knbn = HN_kanbanTable({
    container: "#myDiv",
    lists:  [{"id": "1", "title": "Todo"}, {"id": "2", "title": "Doing"}, {"id": "3", "title": "Done"}],
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
});

knbn.init();



```
 ## Thanks
hn-kanbanboard use [sortablejs](https://github.com/SortableJS/sortablejs) for drag&drop


 License
----------------------------------------------

hn-kanbanboard is OpenSource and licensed under the Terms of [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0). You're welcome to contribute
