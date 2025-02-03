export const handleSubmitFormClick = ({ name, email, message }) => {
  const phoneNumber = "+9710525585916 ";
  const messageContent = `NAME : ${name}\n EMAIL : ${email}\n MESSAGE : ${message}`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};

export const handleEnquiryFormClick = () => {
  const phoneNumber = "+9710525585916";
  const messageContent = `Hello, I would like to Enquire!!`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};
