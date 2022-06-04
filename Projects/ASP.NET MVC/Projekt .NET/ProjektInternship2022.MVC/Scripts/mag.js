$("#btn_new").click(function () {
    $.ajax({
        type: "GET",
        url: "/Magazina/Edit/",
        data: {},
        contentType: 'application/html; charset=utf-8',
        datatype: 'html',
        success: function (data) {
            $("#content").html(data);
            window.history.pushState(null, '', '/Magazina/ Edit');
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Ndodhi nje gabim !');
        }
    })
})
$("#btn_edit").click(function () {
    debugger
    var grid = $("#MagGrid").data("kendoGrid");
    var selectedItem = grid.dataItem(grid.select());
    $.ajax({
        type: "GET",
        url: "/Magazina/Edit/",
        data: { Id: selectedItem.Id },
        contentType: 'application/html; charset=utf-8',
        datatype: 'html',
        success: function (data) {
            $("#content").html(data);
            window.history.pushState(null, '', '/Magazina/Edit');
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Ndodhi nje gabim !');
        }
    })
})
$(".btn btn-primary btn-sm").click(function () {
    $.ajax({
        type: "POST",
        url: "/Magazina/Edit/",
        data: { magazina },
        contentType: 'application/html; charset=utf-8',
        datatype: '',
        success: function (data) {
            $("#content").html(data);
            window.history.pushState(null, '', '/Magazina/ Index');
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Ndodhi nje gabim !');
        }
    })
})







