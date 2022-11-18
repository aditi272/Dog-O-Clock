const currentTime = setInterval(()=>{
            let  a = new Date();
         let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
         
         let date = a.toLocaleDateString();
        let hours = a.getHours()
        let min = a.getMinutes();
    let sec = a.getSeconds();
        let meridian = "AM";
    
     if (12 <= hour && hour < 17) {
      meridian = `PM`;
      document.querySelector(".pics").src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ56ntEFR5XM0m4RP4BTo8jxRTdkzkqMQP3luFtp7O_eWmcUKq4_nveRVpKS472u5VnM0&usqp=CAU";
    } else if (17 <= hour && hour < 20) {
      meridian = `PM`;
      document.querySelector(".pics").src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVySXLqEZ-gNedSDd3wFQh-pVY665SOvm56g&usqp=CAU";
    } else if (20 <= hour && hour < 00) {
      meridian = `PM`;
      document.querySelector(".pics").src =
        "https://i.pinimg.com/originals/56/2f/a9/562fa9687cff0023c3fd4f868916d55c.jpg";
    } else if (00 <= hour && hour <= 5) {
      meridian = `AM`;
      document.querySelector(".pics").src =
        "https://i.pinimg.com/originals/56/2f/a9/562fa9687cff0023c3fd4f868916d55c.jpg";
    } 
  else if(6<= hour && hour < 12 ) {
      meridian = `AM`;
      document.querySelector(".pics").src =
        "https://i.pinimg.com/originals/3f/0f/e1/3f0fe1df1c1443e9561833c8771d5c14.png";
    }
      else{
                  document.querySelector(
      ".tick"
    ).textContent  =  "Come Later!";
      }
  
  
       document.querySelector(
      ".tick"
    ).textContent  =  `${hour}:${min}:${sec} ${meridian} `;
        },1000);
        
