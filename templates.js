module.exports = {
  movie: [
    "<h3><%= title %></h3>",
    "<h6><%= released %></h6>",
    "<img src = '<%= cover %>'>",
    "<h5>Starring: <%= starring %></h5>",
    "<p><%= description %></p>",
    "<ul class='btns'>",
      "<li>",
        "<button class='delete'>DELETE</button>",
      "</li>",
      "<li>",
        "<button class='edit'>EDIT</button>",
      "</li>",
    "</ul>",
    "<form class='editForm hidden'>",
      "<input type='text' placeholder='Movie Title' name='editTitle'>",
      "<input type='text' placeholder='Lead Actors' name='editStarring'>",
      "<input type='text' placeholder='Year Released' name='editReleased'>",
      "<input type='text' placeholder='Movie Image URL' name='editCover'>",
      "<textarea name='editDescription' placeholder='Movie Description'></textarea>",
      "<button type='submit' class='submitEdit' value='Add Movie'>Submit Edit</button>",
    "</form>"
  ].join(''),

  form: [
    "<form class='addForm hidden'>",
      "<input type='text' placeholder='Movie Title' name='title'>",
      "<input type='text' placeholder='Lead Actors' name='starring'>",
      "<input type='text' placeholder='Year Released' name='released'>",
      "<input type='text' placeholder='Movie Image URL' name='cover'>",
      "<textarea name='description' placeholder='Movie Description'></textarea>",
      "<input type='submit' value='Add Movie'>",
    "</form>"
  ].join(''),
  header: [
      "<h2>IMDBACKBONE</h2>",
      "<nav>",
        "<ul>",
          "<li><button>Home</button></li>",
          "<li><button class='revealAdd'>Add Movie</button></li>",
        "</ul>",
      "</nav>"
    ].join(""),
  // ].join(''),
  // footer: [].join(''),
};
