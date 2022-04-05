$(document).ready(function () {
  numri = parseInt(localStorage.getItem("numri"));

  for (let index = 1; index < numri + 1; index++) {
    if (localStorage.getItem("key" + index) != null) {
      let objekti = JSON.parse(localStorage.getItem("key" + index));

      $("#tabela").append(
        "<tr class='gg'><td class='okk' id='kodi" +
          index +
          "'>" +
          index +
          "</td><td id='emri" +
          index +
          "'>" +
          objekti.emri +
          "</td><td id='faqe" +
          index +
          "'>" +
          objekti.faqe +
          "</td><td class='glyphicon glyphicon-pencil' id=" +
          index +
          "></td> <td class='autori' id='autori" +
          index +
          "'>" +
          objekti.autori +
          "</td><td class='viti' id='viti" +
          index +
          "'>" +
          objekti.viti +
          "</td></tr>"
      );
      $(".autori").hide();
      $(".viti").hide();
    }
  }

  $(".glyphicon").click(function () {
    let i = $(this).attr("id");
    $(".well").append(
      '<div class="modal fade"  "role="dialog" id="myModal" data-backdrop="static" data-keyboard="false"><div class="modal-dialog"><!-- Modal content--><div class="modal-content"><div class="modal-header"><button type="button" class="close" id="x" data-dismiss="modal">&times;</button><h4 class="modal-title">Modal Header</h4></div><div class="modal-body"><span>' +
        $("#faqe" + i).text() +
        " dhe  " +
        $("#emri" + i).text() +
        " dhe " +
        $("#autori" + i).text() +
        " dhe " +
        $("#viti" + i).text() +
        '</span></div><div class="modal-footer"><button type="button" class="btn btn-default" id="closebtn" data-dismiss="modal">Close</button></div></div></div></div>'
    );
    $("#" + i).attr("data-toggle", "modal");
    $("#" + i).attr("data-target", "#myModal");
    $(".autori").hide();
    $(".viti").hide();
    $("#x").click(function () {
      console.log("u shtyp close");
      $("#myModal").remove();
    });
    $("#closebtn").click(function () {
      console.log("u shtyp butoni");
      $("#myModal").remove();
    });
  });
});
