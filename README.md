# SmartScribe SWE Intern Code Challenge

Welcome to the SmartScribe Software Engineering Intern Code Challenge! This challenge is designed to give us a glimpse into your problem-solving skills, coding abilities, and creativity. As you work through the stages outlined below, remember that while we do appreciate a touch of flair in UI design, our primary focus is on functionality, code clarity, efficiency, and your ability to follow instructions and implement features.

## Getting Started

1. **Clone this repository**: Start by cloning this repository. We suggest naming your cloned repository in a way that reflects the challenge, such as SmartScribe-Intern-Challenge.

2. **Set up your environment**: Ensure you have a development environment set up for React and TypeScript. You'll need Node.js installed on your computer, and we recommend using an IDE like Visual Studio Code for its excellent TypeScript and React support.

3. **Install dependencies**: Navigate to your project directory in the terminal and run `npm install` to install the necessary dependencies.

4. **Start the development server**: Once dependencies are installed, you can start the development server by running `npm run dev`. This will launch the project in your default web browser.

## Objectives

Your task is to build and improve upon a React component that allows users to record audio, name their recordings, download the audio file, and simulate an upload process for transcription. The challenge is divided into stages, each with its own set of requirements. You'll find the specific instructions in the `INSTRUCTIONS.md` file in the repo.

- **Stage I**: Focuses on fixing some existing bugs.
- **Stage II**: Aims at improving the user experience based on given criteria and using browser media APIs.
- **Stage III**: Involves implementing a new feature related to audio upload and transcription simulation.
- **BONUS Stage IV**: (Optional) Enhances the application by providing visual feedback on microphone input volume.

## What We're Looking For

- **Problem-solving skills**: Your approach to debugging and making improvements.
- **Code quality**: Clean, readable, and well-structured code.
- **Understanding of React and TypeScript**: Effective use of React's features and TypeScript's type system.
- **Creativity and initiative**: Any additional features or enhancements you decide to implement.

## Time Consideration

We understand that your time is valuable, and this challenge is not meant to take an excessively long time. Aim to spend no more than 2-5 hours on this challenge. It's okay if you don't complete every single requirement within this timeframe; we're more interested in seeing your thought process, coding practices, and how you prioritize tasks when time is limited.

## Submission

Once you have completed the challenge to your satisfaction, please submit your work by pushing your code to a GitHub repository and sharing the link with us. Include a README notes you think might be helpful in understanding your approach and thought-process. If you spent a lot of time going down a path that didn't prove fruitful—that's software development!—include a note in your README.

## Notes

My approach to the 3 stages was to first get a decent understanding of the React and Typescript coding language since I wasn't familiar with it. After spending some time watching Youtube and analyzing the code, I started on stage 1. Debugging stage 1 wasn't to bad since I just needed to find where the timer was and change the message through a parent update through the onDownloadRecording Prop. Stage 2 also wasn't to bad. Stage 3 was definitely the hardest stage. I managed to finish stages 1 and 2 relatively quickly but my first try at stage 3 wasn't great. I tried to call the handleUpload function directly which wasn't working and I didn't have a great initial way to solve this problem. After a break, I developed a better plan. Calling the handleUpload function (without any errors) was the first hurdle I conquered, and after that, getting a message to display was. I combined the Uploading message and the output of the handleUpload function in one useState to help shorten the code. I  was able to get the full functionality of Stage 3 working. I did use a lot of useStates to achieve this which may not be the best practice, but it works. I think there is a better way to solve this, but I am not familiar enough with React to know a better way at the moment. I did enjoy learning about React and this coding challenge was a great way to introduce me to some more front end development. Some modifications I would have made it I had time would be to use bootstrap instead of all the css styling because I think it makes it simplier. I also would make the Upload feature it's own component because the code is getting a little long. I think there is a way to make the upload feature a component and call the handleUpload through a parent - child relationship but I didn't know how to do that. Overall this was an enjoyable coding challenge. 

