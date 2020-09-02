var kanbanTable = function (options) {
  let self = {};
  self.boards = options.boards;
  self.element = document.querySelector(options.container);

  self.cardTemp =
    '<div id="template" class="card" onclick=""><i id="windows_cover_saving" style="display:none;float: right; padding: 8px; font-size: 17px;" class="fa fa-spinner fa-spin"> </i> <div class="card-drag"> <div class="card-title">     </div> </div> </div>';

  let builtBoards = (boards) => {
    var boardsHTML = '<div class="kanban-boards">';
    for (var key of Object.keys(boards)) {
      boardsHTML += '<div class="board" id="' + key + '">';
      boardsHTML += '<div class="board-head">';
      boardsHTML += ' <p class="board-title">';
      boardsHTML += boards[key].title;
      boardsHTML += " </p>";
      boardsHTML += "</div>";
      boardsHTML += '<div class="board-body"></div> ';
      boardsHTML += '<div class="add_new_btn" style="display: block">';
      boardsHTML +=
        ' <a style="padding: 9px;font-weight: 900; color: gray;"><i class="fa fa-plus"></i> &nbsp; Yeni İş</a>';
      boardsHTML += "</div>";
      boardsHTML += "</div>";
    }
    boardsHTML += "</div>";
    self.element.innerHTML = boardsHTML;
  };

  let setBoards = (boards) => {
    self.boards = boards;
    init();
  };

  let prepareCardInput = (element) => {
    console.log("hello"); 
  }; 

  var init = function () {
    builtBoards(self.boards);
    (document.querySelectorAll(".board .add_new_btn")).forEach(elem => elem.addEventListener("click", prepareCardInput))
  };

  return {
    setBoards: setBoards,
    init: init,
  };
};
