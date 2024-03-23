import emotional1 from "./../assets/emotion1.png";
import emotional2 from "./../assets/emotion2.png";
import emotional3 from "./../assets/emotion3.png";
import emotional4 from "./../assets/emotion4.png";
import emotional5 from "./../assets/emotion5.png";

export function getEmotion(emotionId) {
  switch (emotionId) {
    case 1:
      return emotional1;
    case 2:
      return emotional2;

    case 3:
      return emotional3;

    case 4:
      return emotional4;

    case 5:
      return emotional5;

    default:
      return null;
  }
}
