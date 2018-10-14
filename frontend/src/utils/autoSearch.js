export default class AutoSearch {
  constructor(input, vocab) {
    this.input = input;
    this.vocab = vocab;
    this.result = [];
  }
  predict() {
    for (let i = 0; i < this.input.length; i++) {
      for (let j = 0; j < this.vocab.length; j++) {
        if (
          this.input[i].length > 3 &&
          !this.input[i]
            .trim()
            .toLowerCase()
            .includes("pain")
        ) {
          if (
            this.vocab[j].Name.toLowerCase().includes(
              this.input[i].trim().toLowerCase()
            )
          ) {
            let obj = { label: this.vocab[j].Name, value: this.vocab[j].ID };
            this.result.push(obj);
          }
        }
      }
    }
    return this.result;
  }
}
