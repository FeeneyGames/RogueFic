function load_room(id)
{
    $("#room-text").load("rooms.html #" + id + " .text");
    $("#room-list").load("rooms.html #" + id + " .list");
}

function load_event(id)
{
    $("#event-text").load("events.html #" + id)
    $("#room-text").css("display", 'none');
    $("#event").css("display", '');
}

function close_event()
{
    $("#room-text").css("display", '');
    $("#event").css("display", 'none');
}