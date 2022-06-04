$("#btn_new").click(function () {
    $.ajax({
        type: "GET",
        url: "/Task/Edit/",
        data: {},
        contentType: 'application/html; charset=utf-8',
        datatype: 'html',
        success: function (data) {
            $("#content").html(data);
            window.history.pushState(null, '', '/Task/Edit');
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Ndodhi nje gabim !');
        }
    })
})

function calcIndex(dataItem) {
    var data = $("#TaskClients").data("kendoGrid").dataSource.data();
    return data.indexOf(dataItem);
}


$("#btn_edit").click(function () {
    debugger
    var grid = $("#TaskGrid").data("kendoGrid");
    var selectedItem = grid.dataItem(grid.select());

    $.ajax({
        type: "GET",
        url: "/Task/Edit/",
        data: { TaskId: selectedItem.TaskId },
        contentType: 'application/html; charset=utf-8',
        datatype: 'html',
        success: function (data) {
            $("#content").html(data);
            window.history.pushState(null, '', '/Task/Edit');
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Ndodhi nje gabim !');
        }
    })
})
