describe("wordOrder", function() {
  it("takes the phrase hello and returns 1", function() {
    expect(wordOrder("hello")).to.eql([[1, "hello"]]);
  });

  it("takes the phrase hello hello and returns 2", function() {
    expect(wordOrder("hello hello")).to.eql([[2, "hello"]]);
  });

  it("counts each instance of an individual word", function() {
    expect(wordOrder("hello darling hello")).to.eql([[2, "hello"], [1, "darling"]]);
  });

  it("counts each instance of an individual word", function() {
    expect(wordOrder("fun good cool fun fun good cool")).to.eql([[3, "fun"], [2, "good"], [2, "cool"]]);
  });

  it("sorts the words in a phrase based on how many times it occurs in that phrase", function() {
    expect(wordOrder("hello darling hello")).to.eql([[2, "hello"],[1, "darling"]])
  });
});
