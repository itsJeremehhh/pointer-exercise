// add whatever parameters you deem necessary
function constructNote(message, letters) {
    //we want letters values to ne included in message. if message does not use all characters in letter then it is false. 
    //lets make the parameters into objects so we can obtain the vallue of the idx to its char i.e. 0:a, 1:b so we can use char[0] which is a.
   const lettersFreq = {};
   const messageFreq = {};

   //build frequense counter.
   //we need to loop through characters of the letters
   for (let char of letters) {
    //Not sure on how to translate this. 
    lettersFreq[char] = ++lettersFreq[char] || 1;
   }

   //final comparison of message freq with letter freq.
   for (let char of message) {
    messageFreq[char] = ++messageFreq[char] || 1;
   }

   //final comparison of message frequency with letter freq.
   for (let char of messageFreq) {
    if (!lettersFreq[char]) {
        return false;
    }
    if (messageFreq[char] > lettersFreq[char])
    return false;
   }

   return true;
}
