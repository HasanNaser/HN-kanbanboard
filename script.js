


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



// $(".board-body").sortable({
//     connectWith: ".board-body",
//     handle: ".task_card_fordrag",
//     placeholder: "portlet-placeholder ui-corner-all"
// });
//$(".task-popub").draggable({
//    handle: "#surukleme_divi"
//});
// $(".board-body").on("sortstart", function (event, ui) {
//     placeholderHeight = ui.item.outerHeight();
//     ui.placeholder.height(placeholderHeight + 15);
//     $('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);
// });
// $(".board-body").on("sortstop", function (event, ui) {
//     $(".slide-placeholder-animator").remove();
// });
// $(".board-body").on("sortchange", function (event, ui) {
//     ui.placeholder.stop().height(0).animate({
//         height: ui.item.outerHeight() + 15
//     }, 300);
//     placeholderAnimatorHeight = parseInt($(".slide-placeholder-animator").attr("data-height"));
//     $(".slide-placeholder-animator").stop().height(placeholderAnimatorHeight + 15).animate({
//         height: 0
//     }, 300, function () {
//         $(this).remove();
//         placeholderHeight = ui.item.outerHeight();
//         $('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);
//     });
// });
// $(".board-body").on("sortupdate", function (event, ui) {

//     if (ui.sender !== null) {
//         var dthis = $(this);
//         ui.item.find("#windows_cover_saving").prop("class", "fa fa-spinner fa-spin").fadeIn();
//         let rapor_listele = {};
//         let bilgiler = {};
//         let panoId = $(ui.item).parent().parent().prop("id");
//         let eskiPanoId = $(ui.sender).parent().prop("id");
//         bilgiler["durum"] = panoId;
//         bilgiler["eskiDurum"] = eskiPanoId;
//         bilgiler["task_id"] = $(ui.item).attr("data-taskid");

//         bilgiler["filtre_baslamaTarihi"] = filtre_baslamaTarihi;
//         bilgiler["filtre_bitisTarihi"] = filtre_bitisTarihi;

//         if (filtre_birim !== null) {
//             bilgiler["filtre_birim"] = filtre_birim;
//             if (filtre2_altBirimler !== null) {
//                 bilgiler["filtre2_altBirimler"] = filtre2_altBirimler;
//             }
//         }

//         rapor_listele["req"] = "\\bolumler\\surec\\Istakipi::kanbanTable_task_durumu_guncelle";
//         rapor_listele["array"] = bilgiler;

//         $.ajax({
//             url: '/inc/ajaxv2.php',
//             data: rapor_listele,
//             type: "POST",
//             dataType: 'JSON',
//             success: function (res) {
//                 if (res) {
//                     uyari("İşin durumu güncellendi");
//                     ui.item.find("#windows_cover_saving").prop("class", "fa fa-check").css("color", "green").fadeOut("slow");
//                     $(".task_panolari #" + panoId).find(".taskSayisi").html(res["task_sayisi"] + "/");
//                     $(".task_panolari #" + eskiPanoId).find(".taskSayisi").html(res["eski_pano_task_sayisi"] + "/");
//                     return true;
//                 } else {
//                     uyari("Sadece işi oluşturan kişi durumunu değiştirebilir", "error");
//                     ui.item.find("#windows_cover_saving").prop("class", "fa fa-exclamation").css("color", "red").fadeOut(4000);
//                     $(dthis).sortable('cancel');
//                     return false;
//                 }
//             },
//             error: function () {
//                 ui.item.find("#windows_cover_saving").prop("class", "fa fa-exclamation").css("color", "red");
//             }
//         });

//     }

// }); // DURUM/SİRALAMA DEĞİŞTİRME

