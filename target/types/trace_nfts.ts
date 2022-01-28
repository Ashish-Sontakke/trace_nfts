export type TraceNfts = {
  "version": "0.1.0",
  "name": "trace_nfts",
  "instructions": [
    {
      "name": "mintUser",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "parent",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nftData",
          "type": "string"
        },
        {
          "name": "userAddress",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "mintNft",
      "accounts": [
        {
          "name": "nft",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nftData",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "userAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "mainNft",
            "type": {
              "defined": "NFT"
            }
          },
          {
            "name": "nftCount",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "nft",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "parent",
            "type": "publicKey"
          },
          {
            "name": "data",
            "type": "string"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "DATATooLong",
      "msg": "The Provided Nft data is too long"
    }
  ]
};

export const IDL: TraceNfts = {
  "version": "0.1.0",
  "name": "trace_nfts",
  "instructions": [
    {
      "name": "mintUser",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "parent",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nftData",
          "type": "string"
        },
        {
          "name": "userAddress",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "mintNft",
      "accounts": [
        {
          "name": "nft",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nftData",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "userAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "mainNft",
            "type": {
              "defined": "NFT"
            }
          },
          {
            "name": "nftCount",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "nft",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "parent",
            "type": "publicKey"
          },
          {
            "name": "data",
            "type": "string"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "DATATooLong",
      "msg": "The Provided Nft data is too long"
    }
  ]
};
