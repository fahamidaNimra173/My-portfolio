// src/data/projectsData.js
export const projectsData = [
  {
    id: 1,
    name: "LearnIQ",
    note: "A full-stack e-learning platform with secure payments, interactive assignments, and role-based dashboards.",
    description:
      "LearnIQ is a comprehensive e-learning platform designed to connect students, teachers, and administrators in one unified system. Students can browse available courses, view detailed information including instructor details, course content, and enrollment statistics, and securely enroll through an integrated payment system. After enrollment, students gain access to assignments, can submit their work, and provide feedback to teachers via a dedicated evaluation form. Teachers can create and submit courses for admin approval, track enrollments, and manage assignments. Admins verify teacher applications, approve or reject courses, and oversee platform activity, ensuring course quality and fair pricing.",
    keyFeatures: [
      "Secure course payment and enrollment system",
      "Detailed course pages with instructor info, learning outcomes, and student count",
      "Role-based dashboards for Admin, Teacher, and Student",
      "Teacher request system with admin approval/rejection workflow",
      "Course submission and approval management by admins",
      "Assignment creation, submission tracking, and evaluation",
      "Teacher evaluation system for student feedback",
      "Progress monitoring for courses and assignments by admin",
      "Fully responsive and optimized for all devices"
    ],
    technologys: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Stripe"
    ],
    banner1: "https://i.ibb.co.com/gMftP37v/p1banner1.png",
    banner2: "https://i.ibb.co.com/xtB5QwZK/p1banner2.png",
    banner3: "https://i.ibb.co.com/4RGzc6Ft/p1banner3.png",
    banner4: "https://i.ibb.co.com/67D2q3jw/p1banner4.png",
    liveLink: "https://edu-web-client.web.app/",
    githubLink: "https://github.com/fahamidaNimra173/LearnIQE-Learning-Website",
    challenges: [
      "One of the main challenges was tracking enrollments for each course individually, particularly for the 'My Enrollments' page, where I needed to display the total number of enrolled students and track assignment submissions. Initially, the data structure felt complex to manage. I solved this by sketching a tree diagram on paper to visualize the relationships between courses, enrollments, and assignments, and ultimately decided to use two separate collections for enrollment data, which simplified the process significantly."
    ],
    futureImprovements: [
      "Integrate multiple local payment gateways such as bKash and Nagad in addition to Stripe.",
      "Allow teachers to upload and manage video tutorials for their courses.",
      "Enhance the dashboard by integrating interactive graphs and analytics for improved data visualization."
    ]
  },
  {
    id: 2,
    name: "AurIs",
    note: "A modern hotel booking platform with premium services, booking management, and live location integration.",
    description:
      "AurIs is a modern hotel booking platform designed to deliver a seamless experience for discovering, booking, and managing hotel stays. The homepage features an engaging slider, featured rooms, premium services like spa, morning breakfast, and event management, along with special offers. Users can browse available rooms, filter by price, and view detailed room pages with images, amenities, and reviews. I have also implemented a detailed page with a live Google Map so users can easily find the hotel's location. Authenticated users can book rooms, manage bookings (update or cancel within the allowed timeframe), and leave reviews. Admins manage room data, monitor bookings, and ensure quality standards. The platform features JWT-secured private routes and is fully responsive across mobile, tablet, and desktop devices.",
    keyFeatures: [
      "Interactive homepage slider showcasing offers and rooms",
      "Premium services section: spa, morning breakfast, event management",
      "Special offers display for promotions and discounts",
      "Room filtering by price range and category",
      "Detailed room pages with amenities, reviews, and booking option",
      "Live Google Map integration for location access",
      "Secure booking system with date updates and cancellation policy",
      "Review system with rating and comments for booked rooms",
      "Role-based access with JWT-secured authentication",
      "Fully responsive design for all devices"
    ],
    technologys: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "JWT",
      "Framer Motion",
      "Google Maps API"
    ],
    banner1: "https://i.ibb.co.com/JWKXN6DK/Screenshot-2025-09-04-171803.png",
    banner2: "https://i.ibb.co.com/twCghswP/Screenshot-2025-09-04-171919.png",
    banner3: "https://i.ibb.co.com/sJcWkPmT/Screenshot-2025-09-04-172018.png",
    banner4: "https://i.ibb.co.com/yCT1jv3/Screenshot-2025-09-04-172041.png",
    liveLink: "https://hotel-client-side.web.app/",
    githubLink: "https://github.com/fahamidaNimra173/Hotel-Client-side",
    challenges: [
      "Implementing a conditional review system was a key challenge, as only users who had booked a room could leave a review. Additionally, ensuring that rooms became unavailable when booked for specific dates — while still allowing users to update their booking dates under certain conditions — required careful backend logic. The condition was that bookings could only be updated or canceled at least one day before the reserved date. To solve the date comparison issue, I explored and implemented Moment.js, which simplified date manipulation and validation."
    ],
    futureImprovements: [
      "Integrate a secure payment system for direct bookings.",
      "Enhance the dashboard for a more seamless user experience.",
      "Implement date-based availability logic so that rooms are unavailable only for booked dates, automatically becoming available after the booking period ends."
    ]
  },
  {
    id: 3,
    name: "Verdura",
    note: "A full-stack smart plant care companion for tracking, managing, and nurturing your indoor and outdoor greenery.",
    description:
      "Verdura is a plant care management platform that empowers plant lovers to track daily and scheduled care activities for their indoor and outdoor plants. Users can add plants with details such as category, care level, watering frequency, and health status. The platform supports reminders, health tracking, and personalized plant dashboards for each user. Secure authentication ensures that each user’s plant data is private, while update and delete features provide complete control over plant records. Verdura’s vibrant, nature-inspired design makes plant care both easy and enjoyable.",
    keyFeatures: [
      "Secure user authentication with email/password and Google login",
      "Personalized dashboard showing only the user's plants",
      "Add, update, and delete plant records",
      "Detailed plant pages with category, care level, watering schedule, and health status",
      "Sort plants by next watering date or care level",
      "Private routes for managing and viewing plants",
      "Beginner-friendly tips and common plant care mistakes section",
      "Dark/Light mode toggle for better accessibility",
      "Responsive design optimized for mobile, tablet, and desktop"
    ],
    technologys: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Lottie React",
      "Date-fns"
    ],
    banner1: "https://i.ibb.co.com/spYxxVMr/p3banner1.png",
    banner2: "https://i.ibb.co.com/HLfxDmbM/p3banner2.png",
    banner3: "https://i.ibb.co.com/cXs6RKJ6/p3banner3.png",
    banner4: "https://i.ibb.co.com/xtrFnzbN/p3banneer4.png",
    liveLink: "https://plant-clint-site.web.app/",
    githubLink: "https://github.com/fahamidaNimra173/Plant-client-side",
    challenges: [
      "As my first full-stack project, implementing CRUD operations effectively was initially challenging. A particular difficulty was enabling users to submit reviews for specific plants and displaying those reviews only on the relevant plant’s details page. I overcame this by learning to apply backend filtering to retrieve data for a specific plant ID."
    ],
    futureImprovements: [
      "Implement a watering reminder system by calculating the next watering date based on the last recorded watering event.",
      "Add a community post section where users can share plant health concerns or care tips, allowing others to view and provide feedback."
    ]
  }
];
