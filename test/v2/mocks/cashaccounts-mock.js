const lookup = {
  identifier: "Jonathan#100;",
  information: {
    emoji: "☯",
    name: "Jonathan",
    number: 100,
    collision: {
      hash: "5876958390",
      count: 0,
      length: 0
    },
    payment: [
      {
        type: "Key Hash",
        address: "bitcoincash:qr4aadjrpu73d2wxwkxkcrt6gqxgu6a7usxfm96fst"
      }
    ]
  }
}

const check = {
  identifier: "Jonathan#100",
  block: 563720,
  results: [
    {
      transaction:
        "01000000017CC04D29109CB43A0BFADE3993B5840B6F68F22E09D4806F26FE9E7D772FC72F010000006A47304402207B0DA3150BF9A44A8FAE7333F4D5B03BA1297DD21C8641880EFEA9EAA9E1E89D022028D2A8D840771D4A87C84F0B217D02F17C3F57832FE0C37AC27B5AFC27004FBE41210355F64F0ED04944EB477B33DCB46BB45453B8988BBA1862698ABE7343C6F0E2C6FFFFFFFF020000000000000000256A0401010101084A6F6E617468616E1501EBDEB6430F3D16A9C6758D6C0D7A400C8E6BBEE4C00C1600000000001976A914EFD03E75F2AEDB19261B39A6C8361C7BCCD9F4F088AC00000000",
      inclusionProof:
        "0000C0204895EF83B69CD64A7901FEE54858461BFC0C09CB74A6B0000000000000000000CDD0C434D6EE0AEE331016D1F9D2BEF0BBCD26E003B784A39F392F2F2A50BFDA6F532E5C6EA304184467D54BD300000009C33356693BC1C8928B96621D832C510E6E239AE52F0EE27AB28A44643313E0C65EB8A4982058BB5E86CF84653C797D51741A90CA6C1A2518C1BA871402CB76E31FAF65208CE05D15D4720CC209C02CEA0270107C59AF586ADD632F128FDE00E16951E442A7AA1FAFE6464AE63CD1797A9C6C0B24128D0EC61EC856B7EF04672036715EAE4E2DF35B3D30295DF5CBBD71198D9EBB94918FE00EAF047EDF1F0D5912B92BD2AFD8911D303D691A7E5B873DAB49E4F7B09B74D83A9025C18AC11F5926AA34A21C258CF49DD10909BEC8C3D603648C2D86F90938DDC39470EE4CA98B1FB673951453599354F1D56D8F710C89D2BDE5835A66B565DF382D04C3E6EAC3F98B52BB82F830A80D718E25F6ADFCB93EC2B89CF2D56D610CE9238373B2CFAB03BB1A00"
    }
  ]
}

const reverseLookup = {
  results: [
    {
      accountEmoji: "🍞",
      nameText: "cgcardona",
      accountNumber: 122,
      accountHash: "6383276713",
      accountCollisionLength: 0,
      payloadType: 1,
      payloadAddress: "bitcoincash:qrhncn6hgkhljqg4fuq4px5qg74sjz9fqqj64s9la9"
    }
  ]
}

module.exports = {
  lookup,
  check,
  reverseLookup
}
