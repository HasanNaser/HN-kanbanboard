(function () {

  var Sortable = require("sortablejs")

  this.HN_kanbanTable = function (options) {


    let self = {};
    self.lists = options.lists;
    self.cards = options.cards;
    self.element = document.querySelector(options.container);
    self.cardTemp = '<div id="template" class="card" onclick=""><i id="windows_cover_saving" style="display:none;float: right; padding: 8px; font-size: 17px;" class="fa fa-spinner fa-spin"> </i> <div class="card-drag"> <div class="card-title">     </div> </div> </div>';

    //Methods
    self.onCardAdd = options.onCardAdd;
    self.onCardDrgStart = options.onCardDrgStart;
    self.onCardDrgEnd = options.onCardDrgEnd;
    self.onCardSortChange = options.onCardSortChange;
    self.onCardClick = options.onCardClick;



    let builtBoards = (lists) => {

      var listsHTML = '<div class="kanban-boards">';
      for (var key of Object.keys(lists)) {
        listsHTML += '<div class="board" data-boardid=' + lists[key].id + '>';
        listsHTML += '<div class="board-head">';
        listsHTML += ' <p class="board-title">';
        listsHTML += lists[key].title;
        listsHTML += " </p>";
        listsHTML += "</div>";
        listsHTML += '<div class="board-body"></div> ';
        listsHTML += '<div class="add_new_btn" style="display: block">';
        listsHTML +=
            ' <a style="padding: 9px;font-weight:   900; color: gray;"><i class="fa fa-plus"></i> &nbsp; Add Card</a>';
        listsHTML += "</div>";
        listsHTML += "</div>";
      }
      listsHTML += "</div>";

      self.element.innerHTML = listsHTML;

      let prepareCardInput = function (element) {
        let currentCardCreater = document.querySelector(".kanban-boards .board #card_creater");
        let listId = this.parentElement.getAttribute("data-boardid");
        let templateCardCreater = '<div id="card_creater" class="task_card">' +
            '<input type="text" class="card-input" autocomplete="off" placeholder="Type something">' +
            '<small style="display:block;padding: 1px 0 5px 12px;color: #5f5f5f96;font-size: 11px;"> Press Enter to save</small>' +
            '</div>';

        //clean up boards
        (document.querySelectorAll(".kanban-boards .board #card_creater")).forEach(elem => elem.remove());


        if (currentCardCreater == null)
          document.querySelector(".kanban-boards [data-boardid='" + listId + "']  .board-body").innerHTML += templateCardCreater;
        else
          document.querySelector(".kanban-boards [data-boardid='" + listId + "']  .board-body").appendChild(currentCardCreater);

        document.querySelector(".kanban-boards #card_creater input").focus();


        let getCardInfo = function (event) {
          let pressedKey = event.which || event.keyCode;
          if (pressedKey == 13) {
            let info = {};
            info.title = this.value;
            info.currentListId = this.parentNode.parentNode.parentNode.getAttribute("data-boardid");
            info.currentList = this.parentNode.parentNode.parentNode;
            self.onCardAdd(info);
          }

        }
        document.querySelector(".kanban-boards #card_creater input").onkeypress = getCardInfo;

      };

      // add event listeners to "New Card" buttons
      (document.querySelectorAll(".board .add_new_btn")).forEach(elem => elem.addEventListener("click", prepareCardInput));

      builtCards(self.cards);


      var options = {
        group: 'share',
        animation: 150,
        onStart : function(evt){
          let infos_ = {};
          infos_.currentList =evt.from.parentNode; 
          infos_.cardSelf = evt.item;
          self.onCardDrgStart(infos_);
        },
        onEnd: function (evt){
           let infos_ = {};
           infos_.listFrom =evt.from.parentNode;
           infos_.listTo =evt.to.parentNode;
           infos_.oldIndex = evt.oldIndex;
           infos_.newIndex = evt.newIndex;
           infos_.cardSelf = evt.item;
           self.onCardDrgEnd(infos_);
        },  // Element dragging ended
        onUpdate :function (evt){
          let infos_ = {};
          infos_.currentList =evt.from.parentNode;
          infos_.oldIndex = evt.oldIndex;
          infos_.newIndex = evt.newIndex;
          infos_.cardSelf = evt.item;
          self.onCardSortChange(infos_);
        } , // Changed sorting within list
        store: {
          // Get the order of elements. Called once during initialization.
          get: function (sortable) {
            var order = localStorage.getItem(sortable.options.group.name);
            return order ? order.split("|") : [];
          },
          // Save the order of elements. Called onEnd (when the item is dropped).
          set: function (sortable) {
            var order = sortable.toArray();
            localStorage.setItem(sortable.options.group.name, order.join("|"));
          },
        },
      };
      for (var key of Object.keys(lists)) {
        Sortable.create(document.querySelector(".kanban-boards  [data-boardid='" + lists[key].id + "'] .board-body"), options);
      }

      // var options1 = {
      //   animation: 150,
      // };
      // Sortable.create(document.querySelector(".kanban-boards"), options1);

    };

    let builtCards = (cards) => {
      //clean up boards 
      (document.querySelectorAll(".kanban-boards .board .card")).forEach(elem => elem.remove());

      for (var key of Object.keys(cards)) {
        let cardHTML = '<div data-id="' + cards[key].card_id + '" class="card" onclick=""> <div class="card-drag"> <div class="card-title">' + cards[key].card_title + ' </div> </div> </div>';
        let ggg = ".kanban-boards [data-boardid='" + cards[key].board_id + "'] .board-body";
        document.querySelector(".kanban-boards [data-boardid='" + cards[key].board_id + "'] .board-body").innerHTML += cardHTML;
      }
      (document.querySelectorAll(".board .card")).forEach(elem => elem.addEventListener("click", function (){
        let infos_ = {};
        infos_.cardId =this.getAttribute("data-id");
        infos_.cardSelf = this;
        infos_.currentList =this.parentNode.parentNode;
        self.onCardClick(infos_);
      }));
    }

    let setBoards = (lists) => {
      self.lists = lists;
      init();
    };

    let setCards = (cards) => {
      self.cards = cards;
      builtCards(self.cards);
    };


    var init = function () {
      builtBoards(self.lists);
    };



    return {
      setBoards: setBoards,
      setCards: setCards,
      init: init,
    };
  };


})();