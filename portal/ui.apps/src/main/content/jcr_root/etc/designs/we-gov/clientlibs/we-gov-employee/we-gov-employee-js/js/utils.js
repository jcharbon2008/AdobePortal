/*************************Emp Onboarding ************************/
$(function() {

    /* $('.guideContainerWrapperNode').off('swipeleft swiperight', function(e){
         console.log("doing nothing");
     });*/
    /*Switching off the swipe gesture!*/
    window.setTimeout(function() {

        $('.guideContainerWrapperNode').off('swipeleft');
        $('.guideContainerWrapperNode').off('swiperight');
    }, 1000);

});

function calculateDuration(startDate,endDate)
{
  if(startDate != null && endDate!=null)
    {
        if(endDate>=startDate)
    {

    var oneDay = 24*60*60*1000;
    var start=new Date(startDate).getTime();
    var end=new Date(endDate).getTime();

     var duration=(end-start)/oneDay;
        return duration + 1;
    }
        else{
return 0;
        }}
}
function calcBusinessDays(dDate1, dDate2) {         // input given as Date objects
 
  var iWeeks, iDateDiff, iAdjust = 0;
    if(dDate1 != null && dDate2!=null){
        if (dDate2 < dDate1)
		{
			return 0;   
		}
  else{
  var iWeekday1 = new Date(dDate1).getDay();              // day of week
  var iWeekday2 = new Date(dDate2).getDay();    
 
  iWeekday1 = (iWeekday1 == 0) ? 7 : iWeekday1;   // change Sunday from 0 to 7
  iWeekday2 = (iWeekday2 == 0) ? 7 : iWeekday2;
 
  if ((iWeekday1 > 5) && (iWeekday2 > 5)) iAdjust = 2;  // adjustment if both days on weekend
       if ((iWeekday1 > 5) || (iWeekday2 > 5)) iAdjust = 1;

  iWeekday1 = (iWeekday1 > 5) ? 5 : iWeekday1;    // only count weekdays
  iWeekday2 = (iWeekday2 > 5) ? 5 : iWeekday2;

  // calculate differnece in weeks (1000mS * 60sec * 60min * 24hrs * 7 days = 604800000)
  iWeeks = Math.floor((new Date(dDate2).getTime() - new Date(dDate1).getTime()) / 604800000)
 
  if (iWeekday1 <= iWeekday2) {
    iDateDiff = (iWeeks * 5) + (iWeekday2 - iWeekday1)
  } else {
    iDateDiff = ((iWeeks + 1) * 5) - (iWeekday1 - iWeekday2)
  }
 
  iDateDiff -= iAdjust                            // take into account both days on weekend
 
  return (iDateDiff + 1);                         // add 1 because dates are inclusive
        }
    }
	else{
		return 0;
	}

}

function generateRandomNumber(){

  var randomnumber=Math.floor(Math.random()*9999999999)
  return randomnumber;
}

function validateDuration()
{
return guideBridge.validate('guide[0].guide1[0].guideRootPanel[0].panel14793846146111479384614755[0].duration[0]');
}

/************************End*************************************/
