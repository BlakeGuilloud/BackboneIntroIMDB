module.exports = {
  movie: [
    "<img src = '<%= cover %>'>",
    "<h3><%= title %>",
    "<h5><%= starring %>",
    "<h6><%= released %>",
    "<p><%= description %>",
    "<button class='delete'>DELETE</button>"
  ].join(''),

  form: [
    "<form>",
      "<input type='text' placeholder='Movie Title' name='title'>",
      "<input type='text' placeholder='Movie Stars' name='starring'>",
      "<input type='text' placeholder='Year Released' name='released'>",
      "<input type='text' placeholder='Movie Image' name='cover'>",
      "<textarea name='description'></textarea>",
      "<input type='submit' value='Add Movie'>",
    "</form>"
  ].join(''),
  header: [
      "<h2>IMDBACKBONE</h2>",
      "<nav>",
        "<ul>",
          "<li>Home</li>",
          "<li>Add Movie</li>",
        "</ul>",
      "</nav>"
    ].join(""),
  // ].join(''),
  // footer: [].join(''),
};
