var arr = document.querySelectorAll("button");

for (var i = 0; i< arr.length; i++)
    {
        arr[i].addEventListener("click", handleClick);
    }

document.addEventListener("keypress", handleClick);


function handleClick()
{
    
    var audio;
    switch (event.key || this.innerHTML)
            {
            
    case("w"):
    {
        audio = new Audio("\\sounds\\tom-1.mp3");
        audio.play();
        break;
    }
    case("a"):
    {
        audio = new Audio("\\sounds\\tom-2.mp3");
        audio.play();
        break;
    }
    case("s"):
    {
        audio = new Audio("\\sounds\\tom-3.mp3");
        audio.play();
        break
    }
        
    case("d"):
    {
        audio = new Audio("\\sounds\\tom-4.mp3");
        audio.play();
        break;
    }
    case("j"):
    {
        audio = new Audio("\\sounds\\crash.mp3");
        audio.play();
        break;
    }
    case("k"):
    {
        audio = new Audio("\\sounds\\kick-bass.mp3");
        audio.play();
        break;
    }
    case("l"):
    {
        audio = new Audio("\\sounds\\snare.mp3");
        audio.play();
        break;
    }
        default:break;
        

    }
}