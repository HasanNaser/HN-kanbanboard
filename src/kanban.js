var HN_kanbanTable = function (options) {
  let self = {};
  self.boards = options.boards;
  self.cards = options.cards;
  self.element = document.querySelector(options.container);
  self.cardTemp ='<div id="template" class="card" onclick=""><i id="windows_cover_saving" style="display:none;float: right; padding: 8px; font-size: 17px;" class="fa fa-spinner fa-spin"> </i> <div class="card-drag"> <div class="card-title">     </div> </div> </div>';

  self.onSave = options.onSave;


  let builtCards=(cards)=>{
     //clean up boards 
   (document.querySelectorAll(".kanban-boards .board .card")).forEach(elem=>elem.remove()); 
    for (var key of Object.keys(cards)) {
      let cardHTML = '<div id="'+cards[key].card_id+'" class="card" onclick=""> <div class="card-drag"> <div class="card-title">'+cards[key].card_title+' </div> </div> </div>';
      document.querySelector(".kanban-boards #board_"+cards[key].board_id+" .board-body").innerHTML += cardHTML;  
    }
  }
  let builtBoards = (boards) => {
    var boardsHTML = '<div class="kanban-boards">';
    for (var key of Object.keys(boards)) {
      boardsHTML += '<div class="board" id="board_' + boards[key].id + '">';
      boardsHTML += '<div class="board-head">';
      boardsHTML += ' <p class="board-title">';
      boardsHTML += boards[key].title;
      boardsHTML += " </p>";
      boardsHTML += "</div>";
      boardsHTML += '<div class="board-body"></div> ';
      boardsHTML += '<div class="add_new_btn" style="display: block">';
      boardsHTML +=
        ' <a style="padding: 9px;font-weight:   900; color: gray;"><i class="fa fa-plus"></i> &nbsp; Add Card</a>';
      boardsHTML += "</div>";
      boardsHTML += "</div>";
    }
    boardsHTML += "</div>";

    self.element.innerHTML = boardsHTML;

    let prepareCardInput = function(element){ 
      let currentCardCreater = document.querySelector(".kanban-boards .board #card_creater"); 
      let boardId = this.parentElement.getAttribute("id");
      let templateCardCreater = '<div id="card_creater" class="task_card">'  
                              +   '<input type="text" class="card-input" autocomplete="off" placeholder="Type something">' 
                              +   '<small style="display:block;padding: 1px 0 5px 12px;color: #5f5f5f96;font-size: 11px;"> Press Enter to save</small>'
                              + '</div>';
  
      //clean up boards 
      (document.querySelectorAll(".kanban-boards .board #card_creater")).forEach(elem=>elem.remove()); 

  
      if(currentCardCreater == null)
          document.querySelector(".kanban-boards #"+boardId+" .board-body").innerHTML+=templateCardCreater; 
      else
        document.querySelector(".kanban-boards #"+boardId+" .board-body").appendChild(currentCardCreater);  
  
        document.querySelector(".kanban-boards #card_creater input").focus();
  
        
        let getCardInfo = function(event){
          let pressedKey = event.which || event.keyCode; 
          if(pressedKey  == 13){
            let info ={};
            info.title = this.value;
            info.boardId = this.parentNode.parentNode.parentNode.id;
            self.onCardAdd(info); 
          }
          
        }
        document.querySelector(".kanban-boards #card_creater input").onkeypress=getCardInfo;
        
    }; 
    // add event listeners to "New Card" buttons
    (document.querySelectorAll(".board .add_new_btn")).forEach(elem => elem.addEventListener("click", prepareCardInput));
    builtCards(self.cards);
    
  };

  




  let setBoards = (boards) => {
    self.boards = boards;
    init();
  };

  let setCards = (cards) => {
    self.cards = cards;
    builtCards(self.cards);
  };
    
  var init = function () {
    builtBoards(self.boards); 
  };


  
  return {
    setBoards: setBoards,
    setCards : setCards,
    init: init,
  };
};
