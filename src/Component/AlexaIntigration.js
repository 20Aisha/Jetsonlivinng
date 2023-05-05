const Alexa = require('ask-sdk-core');
const skillBuilder = Alexa.SkillBuilders.custom();

const handler = {

  canHandle(handlerInput) {
    return true;
  },

  handle(handlerInput) {
    const speechOutput = 'Hello, World!';
    return handlerInput.responseBuilder.speak(speechOutput).getResponse();
  },
};

skillBuilder.addRequestHandler(handler);
exports.handler = skillBuilder.lambda();
