//UI Controller




var uicontroller = (function () {

    var d = new Date();

    var birthDate, selectedTodaysDate;
    var todayDay, todayMonth, todayYear;




    //current date to be put if today date is not selected
    todayDay = d.getDate();
    todayMonth = d.getMonth() + 1;
    todayYear = d.getFullYear();
    


    //putting default value
    var finalDate = {
        now: [todayDay, todayMonth, todayYear],
        prev: [20, 4, 2000]
    };



    var validateDates = function () {
        var bInput = document.getElementById('birthday-input');
        var defaultTodayDate = document.getElementById('today-input');

        if (bInput != null)
            birthDate = bInput.value;

        if (defaultTodayDate != null)
            defaultTodayDate = defaultTodayDate.value;

        selectedTodaysDate = defaultTodayDate || finalDate.now[2] + "-" + finalDate.now[1] + "-" + finalDate.now[0];
        birthDate = birthDate || finalDate.now[2] + "-" + finalDate.now[1] + "-" + finalDate.now[0];
        
       // console.log(birthDate+"---"+selectedTodaysDate);    
        
//        document.getElementById('birthday-input').placeholder=birthDate;
//        document.getElementById('today-input').placeholder =selectedTodaysDate;
          
    }

    var splitDate = function () {

        
        //        console.log(selectedTodaysDate);
        //        console.log(birthDate);
        finalDate.now = selectedTodaysDate.split("-");
        finalDate.prev = birthDate.split("-");
    }
    
    
    
    
    function dateDiff(startingDate, endingDate) {
    var startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
    if (!endingDate) {
        endingDate = new Date().toISOString().substr(0, 10);    // need date in YYYY-MM-DD format
    }
    var endDate = new Date(endingDate);
    if (startDate > endDate) {
        var swap = startDate;
        startDate = endDate;
        endDate = swap;
    }
    var startYear = startDate.getFullYear();
    var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
    var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var yearDiff = endDate.getFullYear() - startYear;
    var monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }
    var dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
        if (monthDiff > 0) {
            monthDiff--;
        } else {
            yearDiff--;
            monthDiff = 11;
        }
        dayDiff += daysInMonth[startDate.getMonth()];
    }

    return yearDiff + 'Y ' + monthDiff + 'M ' + dayDiff + 'D';
}
    var displayResult = function(result) {
        
        
        
        document.querySelector('.result-main').style.visibility="visible";
        document.querySelector('.result-para').textContent=result;
        
    }

    document.querySelector('.calculate-div')
        .addEventListener('click', function (event) {
            // do something
            validateDates();
            splitDate();
            var passBirth=finalDate.prev[0].toString()+"-"+finalDate.prev[1].toString()+"-"+finalDate.prev[2].toString();
            var passNow=finalDate.now[0].toString()+"-"+finalDate.now[1].toString()+"-"+finalDate.now[2].toString();
            var result= dateDiff(passBirth,passNow);
            displayResult(result);
            
                
            
        
        });



})();

