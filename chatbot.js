const Chatbot = {
    getResponse: function (message) {
      if (!message) return "Message cannot be empty!";
      const responses = {
        "hello": "Hello! How can I help you?",
        "how are you": "I'm good! How about you?",
        "flip a coin": () => (Math.random() < 0.5 ? "Heads" : "Tails"),
        "roll a dice": () => `You rolled a ${Math.floor(Math.random() * 6) + 1}`,
        "write a c++ program for addition of two numbers": `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cout << "Enter two numbers: ";\n    cin >> a >> b;\n    cout << "Sum: " << (a + b) << endl;\n    return 0;\n}`,
      };
  
      return responses[message.toLowerCase()] || "Sorry, I didn't understand.";
    },
  };
  
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Chatbot;
  } else {
    window.Chatbot = Chatbot;
  }
  (function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      define([], factory);
    } else if (typeof module === 'object' && module.exports) {
      module.exports = factory();
    } else {
      root.Chatbot = factory();
    }
  }(typeof self !== 'undefined' ? self : this, function () {
    return Chatbot;
  }));