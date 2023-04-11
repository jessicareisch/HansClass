function setup() {
  noCanvas();

  createP("The missing word in 'Once _____ a time':");
  firstBox = createInput();

  createP("The second part of the third word in this poem's title:");
  secondBox = createInput();

  createP("The inorganic compound with the chemical formula H₂O:");
  thirdBox = createInput();

  createP("Farm animal (plural) that can lay eggs:");
  fourthBox = createInput();

  phrases = selectAll("input");
  for (i = 0; i < phrases.length; i++) {
    phrases[i].mousePressed(changeInput);
  }

  function changeInput() {
    this.style("background-color", "transparent");
    this.style("border", "2px solid #ffff");
    this.style("border-radius", "10px");
    this.style("color", "white");
    this.style("margin", "0px");
  }

  createP("...............................................");
  createP("The Red Wheelbarrow by William Carlos Williams:");
  createP("so much depends");
  firstPhrase = createP("");
  createP("a red wheel");
  secondPhrase = createP("");
  createP("glazed with rain");
  thirdPhrase = createP("");
  createP("beside the white");

  fourthPhrase = createP("");

  firstBox.input(textUpdate);
  secondBox.input(textUpdate);
  thirdBox.input(textUpdate);
  fourthBox.input(textUpdate);

  function textUpdate() {
    firstPhrase.html(firstBox.value());
    secondPhrase.html(secondBox.value());
    thirdPhrase.html(thirdBox.value());
    fourthPhrase.html(fourthBox.value());
  }
}
