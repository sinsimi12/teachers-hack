<h1 align="center">
    Time Chaser
    <br><br>
    <img alt="Time Chaser screenshot" height="300" src="https://github.com/sinsimi12/teachers-hack/blob/main/screenshot.png?raw=true">
</h1>

## 💡 Inspiration 💡

We believe that animals all over the world deserve to have a warm, loving home. It is our mission that we promote and connect people to animals by creating a community of love and care. Each year, it's estimated that more than one million adoptable dogs and cats are euthanized in the United States, simply because too many pets come into shelters and too few people consider adoption when looking for a pet. We believe that we, as a community, can help lead this cause and help prevent cases of euthanization.

## ⚙ What it does ⚙

Animal providers can upload animal information. There are many people like these who found injured/lost animals and hope for others to adopt them. They can use recommended third-party apps like PhotoCatch to convert video to 3D models in seconds. Users looking for animals to adopt can view a list of animals available, and can use the iOS app to view the animal in 3D Augmented Reality (AR) to see if the animal is a good fit. If users do decide to adopt these “unwanted” animals, they get a code to redeem NFTs. They will be messaged by our app through iMessage on their code. Users are therefore incentivized to adopt these animals. We get these NFTs from Non-Profit Organizations that want to contribute to our cause.

## 🏗 How we built it 🏗

The front end for the web app was done in Tailwind and React, while the storage of information was used in both a CockroachDB database (user information) and in the blockchain using Solidity and Hedera (adoption information). The iOS app was done in SwiftUI and RealityKit + ARKit. Uploaded 3D images get stored on our Echo3D account and are fetched from Echo3D in the iOS app.

## Installation

1. Clone the repository.

```
git clone https://github.com/sinsimi12/teachers-hack.git
```

2. Install the dependencies

```
npm install
```

3. Run the server. Do note that the server runs on port 3000.

```
npm start
```

## ⌛ What's next for Time Chaser

For the future milestones for Time Chaser, we envision it having a better UI and screen responsiveness and are hoping to add more features that would aid in the web app’s ease of use while utilizing AI/ML solutions.

## Contributors

[Chantal Pino](https://github.com/chalory)  
[Christian Mina](https://github.com/sinsimi12)  
[Joshua Sintos](https://github.com/JSintos)  
[Lib Martinito](https://github.com/libmartinito)  
[Renz Vital](https://github.com/rvitality)
