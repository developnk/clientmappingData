const axios = require('axios');

const fetchQuestionsAndOptions = async () => {

  // for cinit  data 
  try {
    // Perform the API call using the Cinit curl details
    const response = await axios.get(
      'https://api.cintworks.net/ordering/Reference/Questions?countryId=58',
      {
        headers: {
          'X-Api-Key': 'pDelAYG82Y71zNjjRlt3UV4fQwuQZ1kK',
        },
      }
    );

    // Extracting the response data
    const questions = response.data;

    // Processing the questions into a structured format
    const processedQuestions = questions.map((question) => ({
      questionId: question.id,
      questionName: question.name,
      questionText: question.text,
      categoryName: question.categoryName,
      answers: question.variables.map((variable) => ({
        answerId: variable.id,
        answerName: variable.name,
      })),
    }));

    // Returning the transformed data
    return {
      success: true,
      message: 'Questions fetched successfully',
      totalCount: questions.length,
      questions: processedQuestions,
    };
  } catch (error) {
    console.error('Error fetching questions:', error.message);
    throw new Error('Failed to fetch questions');
  }
};

module.exports =  {fetchQuestionsAndOptions} ;
