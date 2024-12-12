const axios = require('axios');

const fetchQuestionsAndOptions = async () => {
  // for lucid  vendor 
  try {
    const questionsResponse = await axios.get(
      'https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/10',
      {
        headers: {
          Authorization: 'C9D1462F-42DC-46A6-B9C4-C883B7F8032E',
        },
      }
    );

    const questions = questionsResponse.data.Questions;

    const updatedQuestions = await Promise.all(
      questions.map(async (question) => {
        const optionsResponse = await axios.get(
          `https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestionOptions/10/${question.QuestionID}`,
          {
            headers: {
              Authorization: 'C9D1462F-42DC-46A6-B9C4-C883B7F8032E',
            },
          }
        );

        question.Options = optionsResponse.data.QuestionOptions;
        return question;
      })
    );

    return {
      ApiResult: questionsResponse.data.ApiResult,
      ApiResultCode: questionsResponse.data.ApiResultCode,
      ApiAccount: questionsResponse.data.ApiAccount,
      AccountType: questionsResponse.data.AccountType,
      ApiAccountStatus: questionsResponse.data.ApiAccountStatus,
      AccountCode: questionsResponse.data.AccountCode,
      ApiMessages: [...questionsResponse.data.ApiMessages],
      ResultCount: questionsResponse.data.ResultCount,
      Questions: updatedQuestions,
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw new Error('Failed to fetch questions and options');
  }
};

module.exports =  {fetchQuestionsAndOptions} ;
