"use strict";

$(document).ready(function () {
    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];

    $('#add-names-btn').click(function () {
        var namesData = $();
        for (var i = 0; i < people.length; i++) {
            namesData = namesData.add('<ul class="personColor"><li>' + people[i].name +
                '\'s favorite color: ' + people[i].favColor + '</li></ul>');
        }

        $('#names-list').append(namesData);
    });

    $('#add-names-btn').click(function () {
        $('.personColor').each(function (i, e) {
            $(this).css('color', people[i].favColor);
        });
    });

    $.ajax({
        url: "https://swapi.co/api/films",
        type: "GET",
        data: {
            search: "revenge of the sith"
        }
    }).done(function(data) {
        console.log(data.results[0].opening_crawl);
    }).fail(function() {
        console.log("Request failed");
    });



});