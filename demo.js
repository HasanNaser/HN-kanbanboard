


var options = {
    "container" : "#myDiv",
    "boards" : {
        0:{
             "id":"1",
             "title":"Yapilacak"
         },
         1:{
            "id":"2",
            "title":"Yapiliyor"
        },
        2:{
            "id":"3",
            "title":"Yapildi"
        },
    },
    "onSave" : function(info){
        console.log(info);
    },
}

var nesne = kanbanTable(options).init();


 