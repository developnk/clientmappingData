# API Information

This document contains details regarding various curl commands used for accessing different data.

## Lucid Mapping Data

### Country Data
Retrieve country languages using the following curl command:

```bash
curl --location 'https://api.samplicio.us/Lookup/v1/BasicLookups/BundledLookups/CountryLanguages' \
--header 'Authorization: C9D1462F-42DC-46A6-B9C4-C883B7F8032E'

# Qualification Data
## Retrieve Questions

To fetch all questions related to a specific library, use the command below:

curl --location 'https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/6' \
--header 'Authorization: C9D1462F-42DC-46A6-B9C4-C883B7F8032E'

Answer Data
Retrieve Answer Options

curl --location 'https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestionOptions/6/79378' \
--header 'Authorization: C9D1462F-42DC-46A6-B9C4-C883B7F8032E'


This structure provides clarity, making it easy for others to understand the purpose of each curl command.

