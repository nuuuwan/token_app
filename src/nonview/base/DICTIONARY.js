const DICTIONARY = {
  "A Public Key is required to generate a token.": {
    si: "\u0da7\u0ddd\u0d9a\u0db1\u0dba\u0d9a\u0dca \u0da2\u0db1\u0db1\u0dba \u0d9a\u0dd2\u0dbb\u0dd3\u0db8\u0da7 \u0db4\u0ddc\u0daf\u0dd4 \u0dba\u0dad\u0dd4\u0dbb\u0d9a\u0dca \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba \u0dc0\u0dda.",
    ta: "\u0b9f\u0bcb\u0b95\u0bcd\u0b95\u0ba9\u0bc8 \u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95 \u0baa\u0bca\u0ba4\u0bc1 \u0bb5\u0bbf\u0b9a\u0bc8 \u0ba4\u0bc7\u0bb5\u0bc8.",
  },
  "A Secret Key is required to generate a token.": {
    si: "\u0da7\u0ddd\u0d9a\u0db1\u0dba\u0d9a\u0dca \u0da2\u0db1\u0db1\u0dba \u0d9a\u0dd2\u0dbb\u0dd3\u0db8\u0da7 \u0dbb\u0dc4\u0dc3\u0dca \u0dba\u0dad\u0dd4\u0dbb\u0d9a\u0dca \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba \u0dc0\u0dda.",
    ta: "\u0b9f\u0bcb\u0b95\u0bcd\u0b95\u0ba9\u0bc8 \u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95 \u0b92\u0bb0\u0bc1 \u0bb0\u0b95\u0b9a\u0bbf\u0baf \u0bb5\u0bbf\u0b9a\u0bc8 \u0ba4\u0bc7\u0bb5\u0bc8.",
  },
  "A priority value is required to generate a token.": {
    si: "\u0da7\u0ddd\u0d9a\u0db1\u0dba\u0d9a\u0dca \u0da2\u0db1\u0db1\u0dba \u0d9a\u0dd2\u0dbb\u0dd3\u0db8\u0da7 \u0db4\u0dca\u200d\u0dbb\u0db8\u0dd4\u0d9b\u0dad\u0dcf \u0d85\u0d9c\u0dba\u0d9a\u0dca \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba \u0dc0\u0dda.",
    ta: "\u0b9f\u0bcb\u0b95\u0bcd\u0b95\u0ba9\u0bc8 \u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95 \u0bae\u0bc1\u0ba9\u0bcd\u0ba9\u0bc1\u0bb0\u0bbf\u0bae\u0bc8 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc1 \u0ba4\u0bc7\u0bb5\u0bc8.",
  },
  "A valid CryptoKey value must be 44 characters long.": {
    si: "\u0dc0\u0dbd\u0d82\u0d9c\u0dd4 CryptoKey \u0d85\u0d9c\u0dba\u0d9a\u0dca \u0d85\u0d9a\u0dca\u0dc2\u0dbb 44\u0d9a\u0dca \u0daf\u0dd2\u0d9c \u0dc0\u0dd2\u0dba \u0dba\u0dd4\u0dad\u0dd4\u0dba.",
    ta: "\u0b9a\u0bb0\u0bbf\u0baf\u0bbe\u0ba9 CryptoKey \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc1 44 \u0b8e\u0bb4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bb3\u0bcd \u0ba8\u0bc0\u0bb3\u0bae\u0bbe\u0b95 \u0b87\u0bb0\u0bc1\u0b95\u0bcd\u0b95 \u0bb5\u0bc7\u0ba3\u0bcd\u0b9f\u0bc1\u0bae\u0bcd.",
  },
  "A valid vehicle number is required to generate a token.": {
    si: "\u0da7\u0ddd\u0d9a\u0db1\u0dba\u0d9a\u0dca \u0da2\u0db1\u0db1\u0dba \u0d9a\u0dd2\u0dbb\u0dd3\u0db8\u0da7 \u0dc0\u0dbd\u0d82\u0d9c\u0dd4 \u0dc0\u0dcf\u0dc4\u0db1 \u0d85\u0d82\u0d9a\u0dba\u0d9a\u0dca \u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba \u0dc0\u0dda.",
    ta: "\u0b9f\u0bcb\u0b95\u0bcd\u0b95\u0ba9\u0bc8 \u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95 \u0b9a\u0bb0\u0bbf\u0baf\u0bbe\u0ba9 \u0bb5\u0bbe\u0b95\u0ba9 \u0b8e\u0ba3\u0bcd \u0ba4\u0bc7\u0bb5\u0bc8.",
  },
  "A valid vehicle number should have the format AB-1234 or ABC-1234": {
    si: "\u0dc0\u0dbd\u0d82\u0d9c\u0dd4 \u0dc0\u0dcf\u0dc4\u0db1 \u0d85\u0d82\u0d9a\u0dba\u0d9a AB-1234 \u0dc4\u0ddd ABC-1234 \u0d86\u0d9a\u0dd8\u0dad\u0dd2\u0dba \u0dad\u0dd2\u0db6\u0dd2\u0dba \u0dba\u0dd4\u0dad\u0dd4\u0dba",
    ta: "\u0b9a\u0bc6\u0bb2\u0bcd\u0bb2\u0bc1\u0baa\u0b9f\u0bbf\u0baf\u0bbe\u0b95\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0b95\u0ba9 \u0b8e\u0ba3\u0bcd AB-1234 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 ABC-1234 \u0bb5\u0b9f\u0bbf\u0bb5\u0ba4\u0bcd\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bbf\u0bb0\u0bc1\u0b95\u0bcd\u0b95 \u0bb5\u0bc7\u0ba3\u0bcd\u0b9f\u0bc1\u0bae\u0bcd",
  },
  "Admin Mode": {
    si: "\u0db4\u0dbb\u0dd2\u0db4\u0dcf\u0dbd\u0d9a \u0db8\u0dcf\u0daf\u0dd2\u0dbd\u0dd2\u0dba",
    ta: "\u0ba8\u0bbf\u0bb0\u0bcd\u0bb5\u0bbe\u0b95 \u0bae\u0bc1\u0bb1\u0bc8",
  },
  "Clear Local Cache": {
    si: "\u0daf\u0dda\u0dc1\u0dd3\u0dba \u0dc4\u0dd0\u0db9\u0dd2\u0dbd\u0dd2\u0dba \u0dc4\u0dd2\u0dc3\u0dca \u0d9a\u0dbb\u0db1\u0dca\u0db1",
    ta: "\u0b89\u0bb3\u0bcd\u0bb3\u0bc2\u0bb0\u0bcd \u0ba4\u0bb1\u0bcd\u0b95\u0bbe\u0bb2\u0bbf\u0b95 \u0b9a\u0bc7\u0bae\u0bbf\u0baa\u0bcd\u0baa\u0bc8 \u0b85\u0bb4\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
  },
  "Code Repository": {
    si: "\u0d9a\u0dda\u0dad \u0d9c\u0db6\u0da9\u0dcf\u0dc0",
    ta: "\u0b95\u0bc1\u0bb1\u0bbf\u0baf\u0bc0\u0b9f\u0bc1 \u0b95\u0bb3\u0b9e\u0bcd\u0b9a\u0bbf\u0baf\u0bae\u0bcd",
  },
  "Copy App Link": {
    si: "\u0dba\u0dd9\u0daf\u0dd4\u0db8\u0dca \u0dc3\u0db6\u0dd0\u0db3\u0dd2\u0dba \u0db4\u0dd2\u0da7\u0db4\u0dad\u0dca \u0d9a\u0dbb\u0db1\u0dca\u0db1",
    ta: "\u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bc1 \u0b87\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bc8 \u0ba8\u0b95\u0bb2\u0bc6\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
  },
  "Create Token": {
    si: "\u0da7\u0ddd\u0d9a\u0db1\u0dba \u0dc3\u0dcf\u0daf\u0db1\u0dca\u0db1",
    ta: "\u0b9f\u0bcb\u0b95\u0bcd\u0b95\u0ba9\u0bc8 \u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
  },
  Creation: {
    si: "\u0db1\u0dd2\u0dbb\u0dca\u0db8\u0dcf\u0dab\u0dba",
    ta: "\u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bae\u0bcd",
  },
  "Crypto Keys": {
    si: "\u0d9a\u0dca\u200d\u0dbb\u0dd2\u0db4\u0dca\u0da7\u0ddd \u0dba\u0dad\u0dd4\u0dbb\u0dd4",
    ta: "\u0b95\u0bbf\u0bb0\u0bbf\u0baa\u0bcd\u0b9f\u0bcb \u0bb5\u0bbf\u0b9a\u0bc8\u0b95\u0bb3\u0bcd",
  },
  Expiration: {
    si: "\u0d9a\u0dbd\u0dca \u0d89\u0d9a\u0dd4\u0dad\u0dca\u0dc0\u0dd3\u0db8",
    ta: "\u0b95\u0bbe\u0bb2\u0bbe\u0bb5\u0ba4\u0bbf\u0baf\u0bbe\u0b95\u0bc1\u0bae\u0bcd",
  },
  "Generate New Crypto Keys": {
    si: "\u0db1\u0dc0 \u0d9a\u0dca\u200d\u0dbb\u0dd2\u0db4\u0dca\u0da7\u0ddd \u0dba\u0dad\u0dd4\u0dbb\u0dd4 \u0d8b\u0dad\u0dca\u0db4\u0dcf\u0daf\u0db1\u0dba \u0d9a\u0dbb\u0db1\u0dca\u0db1",
    ta: "\u0baa\u0bc1\u0ba4\u0bbf\u0baf \u0b95\u0bbf\u0bb0\u0bbf\u0baa\u0bcd\u0b9f\u0bcb \u0bb5\u0bbf\u0b9a\u0bc8\u0b95\u0bb3\u0bc8 \u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
  },
  "Help (Google Doc)": {
    si: "\u0d8b\u0daf\u0dc0\u0dca (Google Doc)",
    ta: "\u0b89\u0ba4\u0bb5\u0bbf (Google Doc)",
  },
  "Looks good!": {
    si: "\u0db4\u0dd9\u0db1\u0dd4\u0db8 \u0dc4\u0ddc\u0db3\u0dba\u0dd2!",
    ta: "\u0ba8\u0ba9\u0bcd\u0bb1\u0bbe\u0b95 \u0b87\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1!",
  },
  "Looks good! This is your Public Key. Other people will use this key to verify tokens issued by you. Please share this key in a public place.":
    {
      si: "\u0db4\u0dd9\u0db1\u0dd4\u0db8 \u0dc4\u0ddc\u0db3\u0dba\u0dd2! \u0db8\u0dd9\u0dba \u0d94\u0db6\u0d9c\u0dda \u0db4\u0ddc\u0daf\u0dd4 \u0dba\u0dad\u0dd4\u0dbb\u0dba\u0dd2. \u0d94\u0db6 \u0dc0\u0dd2\u0dc3\u0dd2\u0db1\u0dca \u0db1\u0dd2\u0d9a\u0dd4\u0dad\u0dca \u0d9a\u0dbb\u0db1 \u0dbd\u0daf \u0da7\u0ddd\u0d9a\u0db1 \u0dc3\u0dad\u0dca\u200d\u0dba\u0dcf\u0db4\u0db1\u0dba \u0d9a\u0dd2\u0dbb\u0dd3\u0db8\u0da7 \u0dc0\u0dd9\u0db1\u0dad\u0dca \u0db4\u0dd4\u0daf\u0dca\u0d9c\u0dbd\u0dba\u0dd2\u0db1\u0dca \u0db8\u0dd9\u0db8 \u0dba\u0dad\u0dd4\u0dbb \u0db7\u0dcf\u0dc0\u0dd2\u0dad\u0dcf \u0d9a\u0dbb\u0db1\u0dd4 \u0d87\u0dad. \u0d9a\u0dbb\u0dd4\u0dab\u0dcf\u0d9a\u0dbb \u0db8\u0dd9\u0db8 \u0dba\u0dad\u0dd4\u0dbb \u0db4\u0ddc\u0daf\u0dd4 \u0dc3\u0dca\u0dae\u0dcf\u0db1\u0dba\u0d9a \u0db6\u0dd9\u0daf\u0dcf \u0d9c\u0db1\u0dca\u0db1.",
      ta: "\u0ba8\u0ba9\u0bcd\u0bb1\u0bbe\u0b95 \u0b87\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1! \u0b87\u0ba4\u0bc1 \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bca\u0ba4\u0bc1 \u0bb5\u0bbf\u0b9a\u0bc8. \u0ba8\u0bc0\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bb5\u0bb4\u0b99\u0bcd\u0b95\u0bbf\u0baf \u0b9f\u0bcb\u0b95\u0bcd\u0b95\u0ba9\u0bcd\u0b95\u0bb3\u0bc8 \u0b9a\u0bb0\u0bbf\u0baa\u0bbe\u0bb0\u0bcd\u0b95\u0bcd\u0b95 \u0bae\u0bb1\u0bcd\u0bb1\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bcd \u0b87\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbf\u0b9a\u0bc8\u0baf\u0bc8\u0baa\u0bcd \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bbe\u0bb0\u0bcd\u0b95\u0bb3\u0bcd. \u0b87\u0ba8\u0bcd\u0ba4 \u0b9a\u0bbe\u0bb5\u0bbf\u0baf\u0bc8 \u0baa\u0bca\u0ba4\u0bc1 \u0b87\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0baa\u0b95\u0bbf\u0bb0\u0bb5\u0bc1\u0bae\u0bcd.",
    },
  "Looks good! This is your Secret Key. You will use this key to generate tokens. Please DO NOT SHARE this key with anyone. Copy this key and save it in a SAFE PLACE.":
    {
      si: "\u0db4\u0dd9\u0db1\u0dd4\u0db8 \u0dc4\u0ddc\u0db3\u0dba\u0dd2! \u0db8\u0dd9\u0dba \u0d94\u0db6\u0d9c\u0dda \u0dbb\u0dc4\u0dc3\u0dca \u0dba\u0dad\u0dd4\u0dbb\u0dba\u0dd2. \u0da7\u0ddd\u0d9a\u0db1 \u0d8b\u0dad\u0dca\u0db4\u0dcf\u0daf\u0db1\u0dba \u0d9a\u0dd2\u0dbb\u0dd3\u0db8\u0da7 \u0d94\u0db6 \u0db8\u0dd9\u0db8 \u0dba\u0dad\u0dd4\u0dbb \u0db7\u0dcf\u0dc0\u0dd2\u0dad\u0dcf \u0d9a\u0dbb\u0db1\u0dd4 \u0d87\u0dad. \u0d9a\u0dbb\u0dd4\u0dab\u0dcf\u0d9a\u0dbb \u0db8\u0dd9\u0db8 \u0dba\u0dad\u0dd4\u0dbb \u0d9a\u0dd2\u0dc3\u0dd2\u0dc0\u0dd9\u0d9a\u0dd4 \u0dc3\u0db8\u0d9f \u0db6\u0dd9\u0daf\u0dcf \u0db1\u0ddc\u0d9c\u0db1\u0dca\u0db1. \u0db8\u0dd9\u0db8 \u0dba\u0dad\u0dd4\u0dbb \u0db4\u0dd2\u0da7\u0db4\u0dad\u0dca \u0d9a\u0dbb \u0d91\u0dba \u0d86\u0dbb\u0d9a\u0dca\u0dc2\u0dd2\u0dad \u0dc3\u0dca\u0dae\u0dcf\u0db1\u0dba\u0d9a \u0dc3\u0dd4\u0dbb\u0d9a\u0dd2\u0db1\u0dca\u0db1.",
      ta: "\u0ba8\u0ba9\u0bcd\u0bb1\u0bbe\u0b95 \u0b87\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1! \u0b87\u0ba4\u0bc1 \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bb0\u0b95\u0b9a\u0bbf\u0baf \u0b9a\u0bbe\u0bb5\u0bbf. \u0b9f\u0bcb\u0b95\u0bcd\u0b95\u0ba9\u0bcd\u0b95\u0bb3\u0bc8 \u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95 \u0b87\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbf\u0b9a\u0bc8\u0baf\u0bc8\u0baa\u0bcd \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bc0\u0bb0\u0bcd\u0b95\u0bb3\u0bcd. \u0ba4\u0baf\u0bb5\u0bc1\u0b9a\u0bc6\u0baf\u0bcd\u0ba4\u0bc1 \u0b87\u0ba8\u0bcd\u0ba4 \u0b9a\u0bbe\u0bb5\u0bbf\u0baf\u0bc8 \u0baf\u0bbe\u0bb0\u0bc1\u0b9f\u0ba9\u0bc1\u0bae\u0bcd \u0baa\u0b95\u0bbf\u0bb0 \u0bb5\u0bc7\u0ba3\u0bcd\u0b9f\u0bbe\u0bae\u0bcd. \u0b87\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbf\u0b9a\u0bc8\u0baf\u0bc8 \u0ba8\u0b95\u0bb2\u0bc6\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0baa\u0bbe\u0ba4\u0bc1\u0b95\u0bbe\u0baa\u0bcd\u0baa\u0bbe\u0ba9 \u0b87\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b9a\u0bc7\u0bae\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd.",
    },
  "My Tokens": {
    si: "\u0db8\u0d9c\u0dda \u0da7\u0ddd\u0d9a\u0db1",
    ta: "\u0b8e\u0ba9\u0ba4\u0bc1 \u0b9f\u0bcb\u0b95\u0bcd\u0b95\u0ba9\u0bcd\u0b95\u0bb3\u0bcd",
  },
  Priority: {
    si: "\u0db4\u0dca\u0dbb\u0db8\u0dd4\u0d9b\u0dad\u0dca\u0dc0\u0dba",
    ta: "\u0bae\u0bc1\u0ba9\u0bcd\u0ba9\u0bc1\u0bb0\u0bbf\u0bae\u0bc8",
  },
  "Public Key": {
    si: "\u0db4\u0ddc\u0daf\u0dd4 \u0dba\u0dad\u0dd4\u0dbb",
    ta: "\u0baa\u0bca\u0ba4\u0bc1 \u0bb5\u0bbf\u0b9a\u0bc8",
  },
  "Report Bugs": {
    si: "\u0daf\u0ddd\u0dc2 \u0dc0\u0dcf\u0dbb\u0dca\u0dad\u0dcf \u0d9a\u0dbb\u0db1\u0dca\u0db1",
    ta: "\u0baa\u0bbf\u0bb4\u0bc8\u0b95\u0bb3\u0bc8\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0bbe\u0bb0\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
  },
  "Save to Browser": {
    si: "\u0db6\u0dca\u200d\u0dbb\u0dc0\u0dca\u0dc3\u0dbb\u0dba\u0da7 \u0dc3\u0dd4\u0dbb\u0d9a\u0dd2\u0db1\u0dca\u0db1",
    ta: "\u0b89\u0bb2\u0bbe\u0bb5\u0bbf\u0baf\u0bbf\u0bb2\u0bcd \u0b9a\u0bc7\u0bae\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
  },
  "Scan Token": {
    si: "\u0da7\u0ddd\u0d9a\u0db1\u0dba \u0db4\u0dbb\u0dd2\u0dbd\u0ddd\u0d9a\u0db1\u0dba \u0d9a\u0dbb\u0db1\u0dca\u0db1",
    ta: "\u0b9f\u0bcb\u0b95\u0bcd\u0b95\u0ba9\u0bc8 \u0bb8\u0bcd\u0b95\u0bc7\u0ba9\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb5\u0bc1\u0bae\u0bcd",
  },
  "Secret Key": {
    si: "\u0dbb\u0dc4\u0dc3\u0dca \u0dba\u0dad\u0dd4\u0dbb",
    ta: "\u0b87\u0bb0\u0b95\u0b9a\u0bbf\u0baf \u0bb5\u0bbf\u0b9a\u0bc8",
  },
  "These Keys are saved on your Browser": {
    si: "\u0db8\u0dd9\u0db8 \u0dba\u0dad\u0dd4\u0dbb\u0dd4 \u0d94\u0db6\u0d9c\u0dda \u0db6\u0dca\u200d\u0dbb\u0dc0\u0dd4\u0dc3\u0dbb\u0dba\u0dda \u0dc3\u0dd4\u0dbb\u0dd0\u0d9a\u0dda",
    ta: "\u0b87\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbf\u0b9a\u0bc8\u0b95\u0bb3\u0bcd \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b89\u0bb2\u0bbe\u0bb5\u0bbf\u0baf\u0bbf\u0bb2\u0bcd \u0b9a\u0bc7\u0bae\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd",
  },
  "This token has been generated by a trusted source party:": {
    si: "\u0db8\u0dd9\u0db8 \u0da7\u0ddd\u0d9a\u0db1\u0dba \u0dc0\u0dd2\u0dc1\u0dca\u0dc0\u0dcf\u0dc3\u0daf\u0dcf\u0dba\u0d9a \u0db8\u0dd6\u0dbd\u0dcf\u0dc1\u0dca\u200d\u0dbb \u0db4\u0dcf\u0dbb\u0dca\u0dc1\u0dca\u0dc0\u0dba\u0d9a\u0dca \u0dc0\u0dd2\u0dc3\u0dd2\u0db1\u0dca \u0da2\u0db1\u0db1\u0dba \u0d9a\u0dbb \u0d87\u0dad:",
    ta: "\u0b87\u0ba8\u0bcd\u0ba4 \u0b9f\u0bcb\u0b95\u0bcd\u0b95\u0ba9\u0bcd \u0ba8\u0bae\u0bcd\u0baa\u0b95\u0bae\u0bbe\u0ba9 \u0bae\u0bc2\u0bb2 \u0ba4\u0bb0\u0baa\u0bcd\u0baa\u0bbf\u0ba9\u0bb0\u0bbe\u0bb2\u0bcd \u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1:",
  },
  "This token has been generated by a trusted source:": {
    si: "\u0db8\u0dd9\u0db8 \u0da7\u0ddd\u0d9a\u0db1\u0dba \u0dc0\u0dd2\u0dc1\u0dca\u0dc0\u0dcf\u0dc3\u0daf\u0dcf\u0dba\u0d9a \u0db8\u0dd6\u0dbd\u0dcf\u0dc1\u0dca\u200d\u0dbb\u0dba\u0d9a\u0dd2\u0db1\u0dca \u0da2\u0db1\u0db1\u0dba \u0d9a\u0dbb \u0d87\u0dad:",
    ta: "\u0b87\u0ba8\u0bcd\u0ba4 \u0b9f\u0bcb\u0b95\u0bcd\u0b95\u0ba9\u0bcd \u0ba8\u0bae\u0bcd\u0baa\u0b95\u0bae\u0bbe\u0ba9 \u0bae\u0bc2\u0bb2\u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bcd \u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1:",
  },
  "This token has been generated by a untrusted source.": {
    si: "\u0db8\u0dd9\u0db8 \u0da7\u0ddd\u0d9a\u0db1\u0dba \u0dc0\u0dd2\u0dc1\u0dca\u0dc0\u0dcf\u0dc3 \u0db1\u0ddc\u0d9a\u0dc5 \u0db8\u0dd6\u0dbd\u0dcf\u0dc1\u0dca\u200d\u0dbb\u0dba\u0d9a\u0dca \u0db8\u0d9c\u0dd2\u0db1\u0dca \u0da2\u0db1\u0db1\u0dba \u0d9a\u0dbb \u0d87\u0dad.",
    ta: "\u0b87\u0ba8\u0bcd\u0ba4 \u0b9f\u0bcb\u0b95\u0bcd\u0b95\u0ba9\u0bcd \u0ba8\u0bae\u0bcd\u0baa\u0ba4\u0bcd\u0ba4\u0b95\u0bbe\u0ba4 \u0bae\u0bc2\u0bb2\u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bcd \u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1.",
  },
  "This token has been generated by an untrusted source party.": {
    si: "\u0db8\u0dd9\u0db8 \u0da7\u0ddd\u0d9a\u0db1\u0dba \u0dc0\u0dd2\u0dc1\u0dca\u0dc0\u0dcf\u0dc3 \u0db1\u0ddc\u0d9a\u0dc5 \u0db8\u0dd6\u0dbd\u0dcf\u0dc1\u0dca\u200d\u0dbb \u0db4\u0dcf\u0dbb\u0dca\u0dc1\u0dc0\u0dba\u0d9a\u0dca \u0dc0\u0dd2\u0dc3\u0dd2\u0db1\u0dca \u0da2\u0db1\u0db1\u0dba \u0d9a\u0dbb \u0d87\u0dad.",
    ta: "\u0b87\u0ba8\u0bcd\u0ba4 \u0b9f\u0bcb\u0b95\u0bcd\u0b95\u0ba9\u0bcd \u0ba8\u0bae\u0bcd\u0baa\u0ba4\u0bcd\u0ba4\u0b95\u0bbe\u0ba4 \u0bae\u0bc2\u0bb2 \u0ba4\u0bb0\u0baa\u0bcd\u0baa\u0bbf\u0ba9\u0bb0\u0bbe\u0bb2\u0bcd \u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1.",
  },
  "This token has been generated by an untrusted source.": {
    si: "\u0db8\u0dd9\u0db8 \u0da7\u0ddd\u0d9a\u0db1\u0dba \u0dc0\u0dd2\u0dc1\u0dca\u0dc0\u0dcf\u0dc3 \u0db1\u0ddc\u0d9a\u0dc5 \u0db8\u0dd6\u0dbd\u0dcf\u0dc1\u0dca\u200d\u0dbb\u0dba\u0d9a\u0dca \u0db8\u0d9c\u0dd2\u0db1\u0dca \u0da2\u0db1\u0db1\u0dba \u0d9a\u0dbb \u0d87\u0dad.",
    ta: "\u0b87\u0ba8\u0bcd\u0ba4 \u0b9f\u0bcb\u0b95\u0bcd\u0b95\u0ba9\u0bcd \u0ba8\u0bae\u0bcd\u0baa\u0ba4\u0bcd\u0ba4\u0b95\u0bbe\u0ba4 \u0bae\u0bc2\u0bb2\u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bcd \u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1.",
  },
  "Time Created": {
    si: "\u0d9a\u0dcf\u0dbd\u0dba \u0db1\u0dd2\u0dbb\u0dca\u0db8\u0dcf\u0dab\u0dba \u0d9a\u0dbb \u0d87\u0dad",
    ta: "\u0ba8\u0bc7\u0bb0\u0bae\u0bcd \u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1",
  },
  "Time Expiry": {
    si: "\u0d9a\u0dcf\u0dbd\u0dba \u0d9a\u0dbd\u0dca \u0d89\u0d9a\u0dd4\u0dad\u0dca\u0dc0\u0dd3\u0db8",
    ta: "\u0ba8\u0bc7\u0bb0\u0bae\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0bb5\u0ba4\u0bbf\u0baf\u0bbe\u0b95\u0bc1\u0bae\u0bcd",
  },
  Token: {
    si: "\u0da7\u0ddd\u0d9a\u0db1\u0dba",
    ta: "\u0b9f\u0bcb\u0b95\u0bcd\u0b95\u0ba9\u0bcd",
  },
  "Untrusted Source": {
    si: "\u0dc0\u0dd2\u0dc1\u0dca\u0dc0\u0dcf\u0dc3 \u0db1\u0ddc\u0d9a\u0dc5 \u0db8\u0dd6\u0dbd\u0dcf\u0dc1\u0dca\u0dbb\u0dba",
    ta: "\u0ba8\u0bae\u0bcd\u0baa\u0ba4\u0bcd\u0ba4\u0b95\u0bbe\u0ba4 \u0b86\u0ba4\u0bbe\u0bb0\u0bae\u0bcd",
  },
  "User Mode": {
    si: "\u0db4\u0dbb\u0dd2\u0dc1\u0dd3\u0dbd\u0d9a \u0db8\u0dcf\u0daf\u0dd2\u0dbd\u0dd2\u0dba",
    ta: "\u0baa\u0baf\u0ba9\u0bb0\u0bcd \u0baa\u0baf\u0ba9\u0bcd\u0bae\u0bc1\u0bb1\u0bc8",
  },
  "Vehicle Number": {
    si: "\u0dc0\u0dcf\u0dc4\u0db1 \u0d85\u0d82\u0d9a\u0dba",
    ta: "\u0bb5\u0bbe\u0b95\u0ba9 \u0b8e\u0ba3\u0bcd",
  },
  "You can either generate new crypto keys, or input previously generated and saved crypto keys.":
    {
      si: "\u0d94\u0db6\u0da7 \u0db1\u0dc0 \u0d9a\u0dca\u200d\u0dbb\u0dd2\u0db4\u0dca\u0da7\u0ddd \u0dba\u0dad\u0dd4\u0dbb\u0dd4 \u0da2\u0db1\u0db1\u0dba \u0d9a\u0dc5 \u0dc4\u0dd0\u0d9a\u0dd2\u0dba, \u0db1\u0dd0\u0dad\u0dc4\u0ddc\u0dad\u0dca \u0d9a\u0dbd\u0dd2\u0db1\u0dca \u0da2\u0db1\u0db1\u0dba \u0d9a\u0dbb \u0dc3\u0dd4\u0dbb\u0d9a\u0dd2\u0db1 \u0dbd\u0daf \u0d9a\u0dca\u200d\u0dbb\u0dd2\u0db4\u0dca\u0da7\u0ddd \u0dba\u0dad\u0dd4\u0dbb\u0dd4 \u0d86\u0daf\u0dcf\u0db1\u0dba \u0d9a\u0dc5 \u0dc4\u0dd0\u0d9a\u0dd2\u0dba.",
      ta: "\u0ba8\u0bc0\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc1\u0ba4\u0bbf\u0baf \u0b95\u0bbf\u0bb0\u0bbf\u0baa\u0bcd\u0b9f\u0bcb \u0bb5\u0bbf\u0b9a\u0bc8\u0b95\u0bb3\u0bc8 \u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bb2\u0bbe\u0bae\u0bcd \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1 \u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bc7\u0bae\u0bbf\u0ba4\u0bcd\u0ba4 \u0b95\u0bbf\u0bb0\u0bbf\u0baa\u0bcd\u0b9f\u0bcb \u0bb5\u0bbf\u0b9a\u0bc8\u0b95\u0bb3\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb2\u0bbe\u0bae\u0bcd.",
    },
};
export default DICTIONARY;
