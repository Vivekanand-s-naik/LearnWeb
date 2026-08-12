
let GlobalElements; 
document.addEventListener('DOMContentLoaded', ()=>{
    console.log("Html Content Loaded...");

    const elements = {
        usernameInput: document.getElementById('username'),
        searchBtn: document.getElementById('search-btn'),
        statsContainer: document.querySelector('.stats-container'),
        statsCardContainer: document.querySelector('.stats-card'),
        progressContainer: document.querySelector('.progress-container'),
        progressCircles:{
            easy: document.querySelector('.easy-progress'),
            medium: document.querySelector('.medium-progress'),
            hard: document.querySelector('.hard-progress')
        },
        levelLabels:{
            easy: document.getElementById('easy-level'),
            medium: document.getElementById('medium-level'),
            hard: document.getElementById('hard-level')
        }
    };
    GlobalElements = elements;

    function validateUsername(username){
        if (username.trim() === ""){
            alert("Username cannot be Empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{4,20}$/;
        if (!regex.test(username)){
            alert("Invalid username");
            return false;
        }
        console.log("Valid Username...");
        return true;
    }
    function processData(allQuestions, userData){
            //Get Questions Count
            let totalQuestions = allQuestions[0].count;
            let totalEasyQuestions = allQuestions[1].count;
            let totalMediumQuestions = allQuestions[2].count;
            let totalHardQuestions = allQuestions[3].count;

            //Get Solved Questions Count
            let totalSolvedQuestions = userData.acSubmissionNum[0].count;
            let easySolvedQuestions = userData.acSubmissionNum[1].count;
            let mediumSolvedQuestions = userData.acSubmissionNum[2].count;
            let hardSolvedQuestions = userData.acSubmissionNum[3].count;
            
            //Get Submission Count
            let totalSubmission = userData.totalSubmissionNum[0].submissions;
            let easySubmission = userData.totalSubmissionNum[1].submissions;
            let mediumSubmission = userData.totalSubmissionNum[2].submissions;
            let hardSubmission = userData.totalSubmissionNum[3].submissions;

            const cardsData = [
                {label: 'Total-Submission', value : totalSubmission},
                {label: 'Easy-Submission', value : easySubmission},
                {label: 'Medium-Submission', value : mediumSubmission},
                {label: 'Hard-Submission', value : hardSubmission},
            ]
            console.log("cardsData : ", cardsData);
            //Process Those Values
            let easyPercentage = (easySolvedQuestions/totalEasyQuestions)*1000;
            let mediumPercentage = (mediumSolvedQuestions/totalMediumQuestions)*1000;
            let hardPercentage = (hardSolvedQuestions/totalHardQuestions)*1000;
            console.log("easyPercentage : ", easyPercentage);   
            //Update the chart
            elements.progressCircles.easy.style.setProperty('--progress-degree', `${easyPercentage}%`);
            elements.progressCircles.medium.style.setProperty('--progress-degree', `${mediumPercentage}%`);
            elements.progressCircles.hard.style.setProperty('--progress-degree', `${hardPercentage}%`);
            
            elements.levelLabels.easy.textContent = `${easySolvedQuestions}/${totalEasyQuestions}`;
            elements.levelLabels.medium.textContent = `${mediumSolvedQuestions}/${totalMediumQuestions}`;
            elements.levelLabels.hard.textContent = `${hardSolvedQuestions}/${totalHardQuestions}`;
            
            //populate the Cards Dynamically 
            elements.statsCardContainer.innerHTML = cardsData.map((data)=>{
                return `
                <div class="card">
                    <h3 class="card-label">${data.label}</h3>
                    <p class="card-value">${data.value}</p>
                </div>
                `
            }).join("");
            console.log("Elements Updated Successfully");
            
    }
    //get user details
    async function fetchDetails(username){
        try{
            const url = 'https://cors-anywhere.herokuapp.com/https://leetcode.com/graphql/';
            elements.searchBtn.textContent = "Searching...";
            elements.searchBtn.disabled = true;
            elements.statsCardContainer.disabled = true;
            elements.progressContainer.style.visibility = 'hidden';
            elements.statsCardContainer.style.visibility = 'hidden';

            const methodType = 'POST';
            const requestHeader = new Headers();
            requestHeader.append('content-type', 'application/json');

            const graphQl = JSON.stringify({
                query:
                `
                query userSessionProgress($username: String!) {
                    allQuestionsCount {
                        difficulty
                        count
                    }
                    matchedUser(username: $username) {
                        submitStats {
                            acSubmissionNum {
                                difficulty
                                count
                                submissions
                            }
                            totalSubmissionNum {
                                difficulty
                                count
                                submissions
                            }
                        }
                    }
                }
                `,variables: {username: `${username}`}
            });
            const requestOptions = {
                method:methodType,
                headers:requestHeader,
                body:graphQl,
                redirect:'follow'                
            }
            console.log("Sending Post Request");
            const response = await fetch(url, requestOptions);
            console.log("Response fetched Successfully");

            if (!response.ok){
                throw new Error("Unable to Fetch...")
                console.log(response.json());
                elements.statsCardContainer.innerHTML = `<p>Error Loading Data</p>`;
            }
            const responseData = await response.json();
            console.log("ResponseData : ", responseData)
            const userData = responseData?.data?.matchedUser?.submitStats;
            const allQuestions = responseData?.data?.allQuestionsCount;
            console.log(`userData : ${JSON.stringify(allQuestions)}`, `userData : ${JSON.stringify(userData)}`);
            processData(allQuestions, userData);
        }
        catch(error){
            console.log(error);
            elements.statsCardContainer.innerHTML = `<p>Error Loading Data</p>`;
            elements.progressCircles.easy.style.setProperty('--progress-degree', `${0}%`);
            elements.progressCircles.medium.style.setProperty('--progress-degree', `${0}%`);
            elements.progressCircles.hard.style.setProperty('--progress-degree', `${0}%`);
            
        }
        finally{
            elements.searchBtn.textContent = "Serach";
            elements.searchBtn.disabled = false;      
            elements.statsCardContainer.style.visibility = 'visible';  
            elements.progressContainer.style.visibility = 'visible';
            elements.statsCardContainer.style.visibility = 'visible'; 
        }
        
    }
    elements.searchBtn.addEventListener('click', ()=>{
        if (!navigator.onLine){
            window.location.href='/offline.html'
        }
        else{
            const username = elements.usernameInput.value;
            if (validateUsername(username)){
                const response = fetchDetails(username);
            }            
        }

    });
});

// Perform Service Worker Functionality
// 1st check for support
// 2nd let Window load first before cahching
// 3rd register service Worker
// 4th Check for updates in service Worker if so create a new worker
// 5th add 'statechange Listner 'and trigger reload
if ('serviceWorker' in navigator){
    window.addEventListener('load', 
        async (event)=>{
            try{
                const registration = await navigator.serviceWorker.register('/sw.js');
                console.log("Registration Successfull...");
                //handle sw updates
                registration.addEventListener('updatefound', ()=>{
                    const newWorker = registration.installing;
                    if (newWorker.state='statechange' && navigator.serviceWorker.controller){
                        console.log("Sw updated Reloading");
                        // window.location.reload();
                    }
                });
            }catch(error){
                console.log("Error Registering Sevice Worker : ", error);
            }
        }
    )
}

// window.addEventListener('offline',()=>{
//     GlobalElements.searchBtn.textContent = 'GoOffline';
//     GlobalElements.searchBtn.addEventListener('click', ()=>{
//         window.location.href='/offline.html'
//     });
//     // window.location.href='LeetMetric/offline.html'
// });

// window.addEventListener('online',()=>{
//     window.location.href='/'
// }); 