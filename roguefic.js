function load_room(id)
{
    $("#room-text").load("rooms.html #" + id + " .text");
    $("#room-list").load("rooms.html #" + id + " .list");
}