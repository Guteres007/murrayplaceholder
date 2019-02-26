const imgPlaceholder = function()
{
  // pokud nebude vyplněný img src tak se zobrazí Murray
  // src atribut musí být vždy na prvním místě tzn. <img src="">
  console.log("imgPlaceholder");

  const imgs = document.querySelectorAll('img');

  imgs.forEach((img)=>{

    if(img.attributes[0].value == "")
    {
       img.src = "https://www.fillmurray.com/" + img.offsetWidth + "/" + img.offsetHeight;
    }
  })
}();
