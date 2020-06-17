/**
    {
        "api":1,
        "name":"Javascript timestamp to human readable",
        "description":"Generates human readable date based on Javascript timestamp (epoch).",
        "author":"Marcin",
        "icon":"html",
        "tags":"generator"
    }
**/

function main(state) {

    var epoch = parseInt(state.text);
    if (isNaN(epoch)) {
        state.postError("Invalid timestamp");
        return;
    }

    var result = new Date(epoch * 1000);
    state.text = result
}

// var result = Math.floor(new Date().getTime()/1000.0);

