# Hypetribe DataDAO: A New Frontier for Web3-powered Data Unions for AI Training 

The Filecoin Virtual Machine (FVM) unlocks the potential for a revolutionary form of organization dedicated to data: User-Generated Content (UGC) and Creators' Data DAOs. These DAOs specialize in aggregating, curating, enhancing, and distributing datasets contributed by creators and micro-influencers, making them a powerhouse for AI training purposes and social media marketing strategies for brands.
In SMM and UGC interactions, the raw data that is created in the process is often overlooked and not rewarded. Filecoin tools provide an opportunity to bring the creator economy to a new level and monetize all types of content created for brands.

At the core,  Hypetribe Data DAO focuses on collecting raw data from a myriad of creators across platform. In the traditional Web2 case, brands fund only the final piece of content that gets posted on socials. The raw data collection can help brands train various models, automate further creation processes, and choose collaborators and influencers better. This data could range from video content, images, texts, and any digital format that creators produce. 

The unique feature of  Data DAOs is the ability to tokenize stake in the data and participate in the decision making on how it will be used in the future. Backed by cryptographic proofs, it allows for the objective valuation of data and an ethical approach to ownership. 

Hypetribe paves the way for a more democratic and transparent data market, where the value of data is recognized and rewarded accordingly.

# Solution for HypeTribe based on BiscuitDAO repo

This repo is based on the example  of the BscuitDAO. For further development of the project, it has to be significantly changed to reflect the data market of the described case.

## Results of Deploy & Upload of the UGC
Input of the contract:  {lens_profiles, arb_address, rating} + pk_of_treasury_manager 

E.g. can collect JSON for CampaignPerformance:  "campaignContributions": [     {       "lensName": "user123",       "arbitrumAddress": "0xABC123...",       "rating": 95     },...

Goal: On the campaign page, campaign owner (Brand) can click “Finish Campaign” and start reward distribution.  Say, we have 20 Influencers participated in the campaign and submitted content + minted NFTs. We have Reward Pool of 1000 Tokens that must be airdropped to their accounts proportionally to their rating (r_i/sum R_j *1000)
We can use existing private key of the sender (Brand) 
  
Deployed: Arbitrum + USDC SDK
Links:
https://ethereum.stackexchange.com/questions/147873/how-to-do-bulk-transaction-with-usdcavax
https://docs.lens.xyz/docs/developer-quickstart
