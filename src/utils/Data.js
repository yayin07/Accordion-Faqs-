import { RxDotFilled } from "react-icons/rx";

export const accordionData = [
    {
      id: 1,
      question: 'I need to Sign Up before I buy Tickets?', 
      dot: <RxDotFilled />,
      answer: <div>You can register using your <a className="link" href="https://www.ticketnation.ph/signin">Facebook & Google</a> account or <a className="link" href="https://www.ticketnation.ph/signup"> Sign up  </a> to create your account. </div>, 
    },

    {
      id: 2,
      question: 'How do I purchase ticket?',
      dot: <RxDotFilled />,
      answer: <div> Just register for an account on <a className="link" href="https://www.ticketnation.ph/" > www.ticketnation.ph </a> via the website </div>,
      answer1: `the Ticketnation or through your mobile browser or download mobile application   `, 
      answer2: `from Google Play or the App Store. Afterwards, just choose your desired event.`,
    
    },
    {
      id: 3,
      question: 'How to pay tickets?', 
      dot: <RxDotFilled />,
      answer: `Just choose your desired ticket group before checking out your order. `,
  
    },
    {
      id: 4,
      question: 'What are the payment options available for purchasing tickets?',
      dot: <RxDotFilled />,
      answer: `Online Payment Method: E-Wallet/Credit Card, Gcash,Paymaya,BDO, Unionbank,`,
      answer1: `RCBC,BPI,Mastercard.`,
   
    },
    {
      id: 5,
      question: 'Where can I see my ticket?',
      dot: <RxDotFilled />,
      answer: `You can see your Ticket on your Profile to view your tickets tap on "View Tickets"/`,
      answer1: `your PDF ticket will be automatically Send to your gmail account that linked`,
      answer2: `on your Ticketnation account.`,
     
    },
    {
      id: 6,
      question: 'Do I need to print the tickets once I receive?', 
      dot: <RxDotFilled />,
      answer: `Yes, Just present the QR code/have a copy via screenshot or save the PDF file`, 
      answer1: `On your smartphone present the QR Ticket on the day of event.`,
      
   
    },
    {
      id: 7,
      question: 'Do we process refunds?',
      dot: <RxDotFilled />, 
      answer: `Ticketnation Philippines has NO REFUND policy on ALL ticket purchase unless  `,
      answer1: `the event is cancelled.`,
    
    },
    {
      id: 8,
      question: 'Can I reuse my QR Ticket?', 
      dot: <RxDotFilled />,
      answer: `NO at the event gate, Once we already scanned the QR you can't re-use`,
      answer1: `the qr for multiple times.`,
      
    },
    {
      id: 9,
      question: 'How can I reach your customer service representative?', 
      dot: <RxDotFilled />, 
      answer: `For your ticket concerns, please email us at corporate@ticketnation.ph`,
      answer1: <div> or message us at Official Facebook Page <a className="link" href="https://www.facebook.com/ticketnationphofficial">Ticketnation Philippines</a>. </div>,
      answer2: <div> or you message us on our website at <a className="link" href="https://www.ticketnation.ph/">www.ticketnation.ph</a>.</div>,
   
    },
    {
      id: 10,
      question: 'Do we need to pick up for physical tickets?', 
      dot: <RxDotFilled />,
      answer: <div>No, The PDF Ticket is downloable in your E-mail.</div>,
    },
    
  ];
  