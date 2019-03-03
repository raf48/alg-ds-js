/**
 * Implement a trie with insert, search, and startsWith methods.
 * 
 * Example:
 * 
 * Trie trie = new Trie();
 * 
 * trie.insert("apple");
 * trie.search("apple");   // returns true
 * trie.search("app");     // returns false
 * trie.startsWith("app"); // returns true
 * trie.insert("app");   
 * trie.search("app");     // returns true
 */
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.trie = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let curr = this.trie;
  // one liner:
  // word.split('').forEach(ch => curr = curr[ch] = curr[ch] || {});

  for (let i = 0; i < word.length; i++) {
    if (!currentNode[word[i]]) {
      currentNode[word[i]] = {};
    }
    currentNode = currentNode[word[i]];
  }
  curr.final = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const node = this._search(word);
  return (node) ? !!node.final : false;
};

Trie.prototype._search = function(word) {
  let currentNode = this.trie;
  for (let i = 0; i < word.length; i++) {
    if (!currentNode[word[i]]) {
      return false;
    }
    currentNode = currentNode[word[i]];
  }
  return currentNode;
}

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return !!this._search(prefix);
};