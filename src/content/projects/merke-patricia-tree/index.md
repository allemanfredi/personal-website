---
date: '2020-10-05'
title: 'merkle-patricia-tree'
image: ''
github: 'https://github.com/allemanfredi/merkle-patricia-tree'
external: ''
tech:
  - blockchain
  - eth
  - rust
show: 'true'
---

Simple implementation of Patricia Merkle Tree. All of the merkle tries in Ethereum use a Merkle Patricia Trie.

The modified Merkle Patricia tree (trie) provides a persistent data structure to map between arbitrary-length binary data (byte arrays). It is defined in terms of a mutable data structure to map between 256-bit binary fragments and arbitrary-length binary data. The core of the trie, and its sole requirement in terms of the protocol specification is to provide a single 32-byte value that identifies a given set of key-value pairs.
