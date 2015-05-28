describe("wordOrder", function() {
  it("takes the phrase hello and returns 1", function() {
    expect(wordOrder("hello")).to.eql(["hello", 1]);
  });

  it("takes the phrase hello hello and returns 2", function() {
    expect(wordOrder("hello hello")).to.eql(["hello", 2]);
  });

  it("counts each instance of an individual word", function() {
    expect(wordOrder("hello hello darling")).to.eql(["darling", 1, "hello", 2]);
  });

  it("counts each instance of an individual word", function() {
    expect(wordOrder("hello darling hello")).to.eql(["darling", 1, "hello", 2]);
  });

  it("counts each instance of an individual word", function() {
    expect(wordOrder("fun good cool fun fun good cool")).to.eql(["cool", 2, "fun", 3, "good", 2]);
  });
});
