document.addEventListener("DOMContentLoaded", () => {
    
let start_day = new Date('2021-05-29');
let missing_day = new Date('2021-05-31');
let today_day = new Date();

let all_period = ((missing_day.getTime() - start_day.getTime()) / (1000 * 3600 * 24)); // static period (100%)
let rest_days = ((today_day.getTime() - start_day.getTime()) / (1000 * 3600 * 24)); // reduce every day

let passed_path_percent = Math.floor((rest_days/all_period)*100);
let middle_path_pixels = (window.screen.width * 0.6) / 2 - 45;
let current_margin = middle_path_pixels * (passed_path_percent/100);
console.log(current_margin);




function update_variables(){
 today_day = new Date();
 rest_days = ((today_day.getTime() - start_day.getTime()) / (1000 * 3600 * 24)); 
 passed_path_percent = Math.floor((rest_days/all_period)*100);
}

 function count_percent(){
  update_variables();
  const percent = document.querySelector('.percent'); // find DOM element
  percent.innerHTML = `${passed_path_percent}%`; // update data
  console.log(passed_path_percent);
 }
if(passed_path_percent<=100){
  setInterval(count_percent, 1000);
}
function change_position(){
 
  const evgen_icon = document.querySelector('.evgen'); // find DOM element
  evgen_icon.style.marginLeft=`${current_margin}px` // update position
  console.log(evgen_icon)

  const kate_icon = document.querySelector('.kate'); // find DOM element
  kate_icon.style.marginRight=`${current_margin}px` // update position
}
change_position();

  });


