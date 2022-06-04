
function onActiveChange(e) {
    var statusDd = $("#Status").data("kendoDropDownList");
    statusDd.dataSource.read();
}


function statusParameters() {

    var isActive = $("#IsActive").data("kendoDropDownList").value();
    var isActiveBool = null;

    if (isActive == 1)
        isActiveBool = false;
    else if (isActive == 0)
        isActiveBool = true;

    return {
        isActive: isActiveBool
    }
}


function Test() {

    var grid = $("#StatusGrid").data("kendoGrid");

    var dataItems = grid.dataSource.data();

    for (var i = 0; i < dataItems.length; i++) {
        if (dataItems[i].StatusName == 'Ne progres')
            alert(dataItems[i].StatusId);
    }

}