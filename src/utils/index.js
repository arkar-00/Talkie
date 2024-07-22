// Function to format the timestamp
export const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

export const groupMessagesByDate = (messages) => {
  // Get today's date in "YYYY-MM-DD" format
  const todayDate = new Date().toLocaleDateString();

  // Create an object to store grouped messages
  const groupedMessages = {};

  // Iterate through each message
  messages.forEach((message) => {
    // Extract date from timestamp
    const messageDate = new Date(message.timestamp).toLocaleDateString();

    // Replace date with "Today" if it matches today's date
    const dateLabel = messageDate === todayDate ? "Today" : messageDate;

    // Check if date already exists in groupedMessages, if not, create an empty array
    if (!groupedMessages[dateLabel]) {
      groupedMessages[dateLabel] = [];
    }

    // Push the message to the corresponding date group
    groupedMessages[dateLabel].push(message);
  });

  // Return an array of objects containing grouped messages
  return Object.keys(groupedMessages).map((date) => ({
    date,
    data: groupedMessages[date],
  }));
};
