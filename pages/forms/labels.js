export default {
  schema: {
    translations: {
      type: "array",
      items: {
        type: "object",
        title: "Translations",
        properties: {
          english: {
            title: "English",
            description: "Nickname allowed",
            type: "string",
          },
          spanish: {
            title: "Spanish",
            description: "Nickname allowed",
            type: "string",
          },
          dutch: {
            title: "Dutch",
            description: "Nickname allowed",
            type: "string",
          },
        },
      },
    },
  },
  value: {
    translations: [
      {
        english: "Help answering this question",
        spanish: "male",
        dutch: "Dutch translation",
      },
      {
        english:
          "If you will change the email address, saving it will log you out of the application and you will have to re-login",
        spanish: "espan",
        dutch: "Dutch translation",
      },
      {
        english: "Invalid Session",
        spanish: "male",
        dutch: "Dutch translation",
      },
      {
        english: "Your session is invalid, please login again.",
        spanish: "male",
        dutch: "Dutch translation",
      },
      {
        english: "This document has expired. Please upload a new document",
        spanish: "male",
        dutch: "Dutch translation",
      },
    ],
  },
  form: [
    {
      type: "array",
      items: [
        {
          key: "translations[]",
          title: "Translation number {{idx}}",
          onClick: function (evt) {
            evt.preventDefault();
            alert("Thank you!");
          },
        },
      ],
    },
  ],
};
