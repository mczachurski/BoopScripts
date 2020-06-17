/**
    {
        "api":1,
        "name":"UUID generator",
        "description":"Generates random UUID numbers.",
        "author":"Marcin",
        "icon":"html",
        "tags":"generator"
    }
**/

function main(state) {
    state.text = uuidv4()
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }