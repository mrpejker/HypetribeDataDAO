# Hypetribe DataDAO: A New Frontier for Web3-powered Data Unions for AI Training 

The Filecoin Virtual Machine (FVM) unlocks the potential for a revolutionary form of organization dedicated to data: User-Generated Content (UGC) and Creators' Data DAOs. These DAOs specialize in aggregating, curating, enhancing, and distributing datasets contributed by creators and micro-influencers, making them a powerhouse for AI training purposes and social media marketing strategies for brands.
In SMM and UGC interactions, the raw data that is created in the process is often overlooked and not rewarded. Filecoin tools provide an opportunity to bring the creator economy to a new level and monetize all types of content created for brands.

At the core,  Hypetribe Data DAO focuses on collecting raw data from a myriad of creators across platform. In the traditional Web2 case, brands fund only the final piece of content that gets posted on socials. The raw data collection can help brands train various models, automate further creation processes, and choose collaborators and influencers better. This data could range from video content, images, texts, and any digital format that creators produce. 

The unique feature of  Data DAOs is the ability to tokenize stake in the data and participate in the decision making on how it will be used in the future. Backed by cryptographic proofs, it allows for the objective valuation of data and an ethical approach to ownership. 

Hypetribe paves the way for a more democratic and transparent data market, where the value of data is recognized and rewarded accordingly.

# Solution for HypeTribe based on BiscuitDAO repo

This repo is based on the example  of the BscuitDAO. For further development of the project, it has to be significantly changed to reflect the data market of the described case.

## Results of Deploy & Upload of the UGC
### Smart contracts deployed on Calibration testnet 
DAO Deal address: "0xE28303aB1DDfAA05caad98f0197A20ebB82BF4d7",

Governor Contract address: "0xA38282f67527F9e10262F7F9A85ec83d17219900",

HypeTribeTKN address: "0xD596081aBa4D708AD1182911834764B72fc80195",

TimeLock address: "0x741452c631B718074fC2B1398EbF78cA962B2030",
### Example of raw data unit upload
{
  data: {
    Name: 'reel1.png',
    Hash: 'QmQnCjNcjZZVNd9F8W1962pL6ouSW3sRvUTTjvfPan21vp',
    Size: '1226165'
  }
}
Visit at: https://gateway.lighthouse.storage/ipfs/QmQnCjNcjZZVNd9F8W1962pL6ouSW3sRvUTTjvfPan21vp
### Deal status details
Deal Status: {
  data: [
    {
      endEpoch: 4658820,
      chainDealID: 50295180,
      publishCID: 'bafy2bzacecz7qvzmphorv4tzrtmslfuyozvsjozlbl2jr75rvn57hjhyoqcbm',
      storageProvider: 'f02620',
      dealStatus: 'Sealing: PreCommit1',
      dealUUID: '4af04aa3-8baa-4cf1-b174-d374627a3b26',
      startEpoch: 3120900,
      aggregateIn: '068895a6-c533-48be-a51a-3fc4d9b15044',
      providerCollateral: '9.848 mFIL',
      lastUpdate: 1676160004130,
      pieceCID: 'baga6ea4seaqj4zrmpxem2mje6ap3ivc7jewpoa6irkywq7fcil6ahoiad5lhiny',
      payloadCid: 'bafybeid4qffkefmbdaoayyrxvebhmsuyh3fikkb2igpyls76go7ipgtrx4',
      pieceSize: 34359738368,
      carFileSize: 34091302912,
      dealId: 50295180,
      miner: 'f02620',
      content: 1434070
    }
  ]


}

Proposing transfer on 0xD596081aBa4D708AD1182911834764B72fc80195 with 0x978aFb7BEd7f2AA1d5a0e44794067114B3611E47,100000000000000000000
Proposal Description:
DealID: 100, IPFS CID: QmUxFi7j27zcM4hUDU5Rrd8SM32bko5BEGDTuz3tCTSJYu

Proposed with proposal ID:
  77777899155727862529040084811537699558472852125058985584758186689005749427866
