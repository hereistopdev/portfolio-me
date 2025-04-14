import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Senior Software Engineer",
    company: "PixelFyre",
    startDate: "Jun 2023",
    isCurrentJob: true,
    location: "Gilmer, Texas, United States | Remote",
    description: [
      "Delivered a comprehensive project management platform that enhanced team collaboration and streamlined task tracking for diverse industries",
      "Designed and implemented a secure role-based access control system, ensuring sensitive information was accessible only to authorized users",
      "Developed a highly responsive user interface, improving accessibility and user satisfaction across desktop and mobile platforms",
      "Created a modular and scalable system architecture that allowed seamless integration of new features and functionalities over time",
      "Optimized system performance to handle high traffic and large data volumes, ensuring consistent reliability for end-users",
    ],
  },
  {
    designation: "Senior Software Engineer",
    company: "Meta",
    startDate: "Mar 2020",
    endDate: "May 2023",
    isCurrentJob: false,
    location: "Gilmer, Texas, United States | Hybrid",
    description: [
      "Contributed to the development of an advanced employee task management system, streamlining workflow organization and improving task completion rates across teams",
      "Enhanced platform usability by upgrading key components, resulting in a more intuitive and efficient user experience",
      "Designed a modular system for managing tasks and resources, enabling scalability and seamless adoption across departments",
      "Improved data retrieval efficiency and reduced system response times, ensuring a smoother user experience under high-demand conditions",
      "Delivered new features for task tracking, reporting, and team collaboration that increased platform adoption by internal teams",
      "Supported cross-team collaboration by aligning product design and engineering efforts to meet organizational objectives",
    ],
  },
  {
    designation: "Senior Software Engineer",
    company: "Emergent Software",
    startDate: "Jul 2017",
    endDate: "Feb 2020",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Designed and delivered highly interactive dashboards and advanced data visualizations, empowering users to extract actionable insights and make data-driven decisions",
      "Developed and maintained responsive, user-friendly web applications that enhanced client engagement and satisfaction",
      "Implemented secure solutions for exchanging sensitive health records, ensuring data integrity and confidentiality, which improved client trust and compliance with privacy standards",
      "Improved software reliability and performance through comprehensive testing and proactive debugging, reducing system downtime and user-reported issues",
      "Played a critical role in delivering projects on time by managing tasks effectively in Agile workflows and facilitating clear communication between stakeholders",
    ],
  },
  {
    designation: "Software Engineer",
    company: "Accenture",
    startDate: "Jul 2013",
    endDate: "Jun 2017",
    isCurrentJob: false,
    location: "On-site",
    description: [
      "Designed and implemented scalable web solutions tailored to meet specific business requirements, enabling clients to achieve their operational goals",
      "Enhanced the security and usability of applications handling sensitive data, ensuring compliance with industry standards and improving client confidence",
      "Streamlined application development processes by collaborating with design and product teams to align project objectives with user needs",
    ],
  },
];

export default experiences;
