<h1 align="center">
    Time Chaser
    <br><br>
    <img alt="Time Chaser screenshot" height="300" src="https://github.com/sinsimi12/teachers-hack/blob/main/screenshot.png?raw=true">
</h1>

## 💡 Inspiration 💡

We believe that teachers are the pillars of our society and pave the way for the next generation to thrive and grow. Even though they play such a huge role in the development of a successful community, they are often overworked, underpaid and treated unfairly. This led us to address the issue of exploited teachers and raise awareness for this global problem.

## ⚙ What it does ⚙

Time Chase is a QR code-based time tracking website that keeps track of your own schedule and advocates for a healthier work-life balance for teachers.

We use QR codes to verify the time-ins and time-outs of our users. This is integral for us as this lets us add another layer of security to the process, promote transparency between the school and the teacher, and makes it convenient for them to log their times. We also added a virtual map with markers with differing colors that signify the average number of hours per marker with green markers being the least overworked and red markers being the most overworked academic institutions.

This data helps us arrive at conclusions on which schools have the highest density of overworked teachers and can serve as a stepping stone to better equip leaders to make more inclusive decisions.

## 🏗 How we built it 🏗

We developed the application with love using the React library for the frontend, and the Flask framework for the backend. Additionally, we used CockroachDB as our database to store information such as the logs and passphrases, Psycopg2 library as an adapter to connect to it and Twilio to send confirmation SMS.

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
